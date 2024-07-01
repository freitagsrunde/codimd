'use strict'
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const mime = require('mime-types')

exports.isSQLite = function isSQLite (sequelize) {
  return sequelize.options.dialect === 'sqlite'
}

exports.getImageMimeType = function getImageMimeType (imagePath) {
  return mime.lookup(path.extname(imagePath))
}

exports.isRevealTheme = function isRevealTheme (theme) {
  if (fs.existsSync(path.join(__dirname, '..', 'public', 'build', 'reveal.js', 'css', 'theme', theme + '.css'))) {
    return theme
  }
  return undefined
}

exports.wrap = innerHandler => (req, res, next) => innerHandler(req, res).catch(err => next(err))

// create application/x-www-form-urlencoded parser
exports.urlencodedParser = bodyParser.urlencoded({
  extended: false,
  limit: 1024 * 1024 * 10 // 10 mb
})

// create text/markdown parser
exports.markdownParser = bodyParser.text({
  inflate: true,
  type: ['text/plain', 'text/markdown'],
  limit: 1024 * 1024 * 10 // 10 mb
})

exports.getViewPermission = function (req, note) {
  if (note.permission === 'private') {
    if (!req.isAuthenticated() || note.ownerId !== req.user.id) { return false } else { return true }
  } else if (note.permission === 'freely' || note.permission === 'editable' || note.permission === 'limited' || note.permission === 'locked' || note.permission === 'protected') {
    if (!req.isAuthenticated()) { return false } else { return true }
  } else {
    return false
  }
}
