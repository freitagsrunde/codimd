'use strict'
// search

var models = require('../models')
var Sequelize = require('sequelize')
var response = require('../response')
var utils = require('../utils')

function search (req, res, next) {
  if (!req.isAuthenticated()) return response.errorForbidden(req, res)
  if (typeof req.body === 'undefined') return response.errorBadRequest(req, res)
  if (typeof req.body.query === 'undefined') return response.errorBadRequest(req, res)

  const query = req.body.query

  models.Note.findAll(
    {
      attributes: ['id', 'alias', 'permission', 'title', 'content', 'authorship',
        'createdAt', 'updatedAt', 'ownerId', 'lastchangeuserId', [Sequelize.fn('to_tsvector', Sequelize.col('content')), 'vec']],
      where: Sequelize.and(
        Sequelize.literal(`to_tsvector("content") @@ to_tsquery($query)`)
      ),
      bind: { query }
    }
  ).then((notes) => {
    const parsedNotes = notes.filter(note => utils.getViewPermission(req, note)).map((note) => { return note.alias || models.Note.encodeNoteId(note.id) })
    res.json({ allNotes: parsedNotes })
  })
}

exports.search = search
