'use strict'
// all notes
// external modules
// var LZString = require('@hackmd/lz-string')

// core
// var config = require('../config')
var logger = require('../logger')
// var response = require('../response')
var models = require('../models')
var Sequelize = require('sequelize')

function checkViewPermission (req, note) {
  if (note.permission === 'private') {
    if (!req.isAuthenticated() || note.ownerId !== req.user.id) { return false } else { return true }
  } else if (note.permission === 'freely' || note.permission === 'editable' || note.permission === 'limited' || note.permission === 'locked' || note.permission === 'protected') {
    if (!req.isAuthenticated()) { return false } else { return true }
  } else {
    return false
  }
}

function allNotesGet (req, res, next) {
  const invalidNotes = ['favicon.ico', 'status', 'build', 'robots.txt', 'register', 'login']

  models.Note.findAll(
    { attributes: ['id', 'alias', 'permission', 'title', [Sequelize.fn('SPLIT_PART', Sequelize.col('content'), '\n', 1), 'content'], 'authorship', 'createdAt', 'updatedAt', 'ownerId', 'lastchangeuserId'] }
  ).then((notes) => {
    const parsedNotes = notes.filter(note => checkViewPermission(req, note))
      .map(note => {
        return {
          id: note.alias || models.Note.encodeNoteId(note.id),
          text: models.Note.decodeTitle(note.title),
          tags: models.Note.parseNoteTags(note.content),
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
