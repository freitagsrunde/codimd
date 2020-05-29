'use strict'
// all notes
// external modules
// var LZString = require('@hackmd/lz-string')

// core
// var config = require('../config')
var logger = require('../logger')
// var response = require('../response')
var models = require('../models')

function checkViewPermission (req, note) {
  if (note.permission === 'private') {
    if (!req.isAuthenticated() || note.ownerId !== req.user.id) { return false } else { return true }
  } else if (note.permission === 'limited' || note.permission === 'protected') {
    if (!req.isAuthenticated()) { return false } else { return true }
  } else {
    return true
  }
}

function allNotesGet (req, res, next) {
  const invalidNotes = ['favicon.ico', 'status', 'build', 'robots.txt']

  models.Note.findAll(
    { attributes: ['id', 'alias', 'permission', 'title', 'content', 'authorship', 'createdAt', 'updatedAt', 'ownerId', 'lastchangeuserId'] }
  ).then((notes) => {
    const parsedNotes = notes.filter(note => checkViewPermission(req, note))
      .map(note => {
        return {
          id: note.alias || models.Note.encodeNoteId(note.id),
          text: models.Note.decodeTitle(note.title),
          tags: models.Note.parseNoteInfo(note.content).tags,
          authorship: note.authorship,
          longNoteId: note.id,
          permission: note.permission,
          createdAt: (new Date(note.createdAt)).getTime(),
          updatedAt: (new Date(note.updatedAt)).getTime(),
          ownerId: note.ownerId,
          lastchangeuserId: note.lastchangeuserId
        }
      }).filter(note => !invalidNotes.includes(note.id))
    return res.json({ allNotes: parsedNotes })
  }).catch(function (err) {
    logger.error(err)
    return res.errorInternalError(res)
  })
}

// public
exports.allNotesGet = allNotesGet
