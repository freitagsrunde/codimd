/* eslint-env browser, jquery */
/* global serverurl, moment */

import store from 'store'
import LZString from '@hackmd/lz-string'

import escapeHTML from 'lodash/escape'

import {
  checkNoteIdValid,
  encodeNoteId
} from './utils'

import {checkIfAuth} from './lib/common/login'

import {urlpath} from './lib/config'


export function parseServerAllNotes(list, callback) {
  checkIfAuth(
    $.get(`${serverurl}/history`)
      .done(data => {
        if (data.history) {
          parseAllNotes(list, data.history, callback)
        }
      })
      .fail((xhr, status, error) => {
        console.error(xhr.responseText)
      })
  )
}

function parseAllNotes(list, allNotes, callback) {
  if (!callback) return
  else if (!list || !allNotes) callback(list, allNotes)
  else if (allNotes && allNotes.length > 0) {
    for (let i = 0; i < allNotes.length; i++) {
      // migrate LZString encoded id to base64url encoded id
      try {
        const id = LZString.decompressFromBase64(allNotes[i].id)
        if (id && checkNoteIdValid(id)) {
          allNotes[i].id = encodeNoteId(id)
        }
      } catch (err) {
        console.error(err)
      }
      // parse time to timestamp and fromNow
      const timestamp = (typeof allNotes[i].time === 'number' ? moment(allNotes[i].time) : moment(allNotes[i].time, 'MMMM Do YYYY, h:mm:ss a'))
      allNotes[i].timestamp = timestamp.valueOf()
      allNotes[i].fromNow = timestamp.fromNow()
      allNotes[i].time = timestamp.format('llll')
      // prevent XSS
      allNotes[i].text = escapeHTML(allNotes[i].text)
      allNotes[i].tags = (allNotes[i].tags && allNotes[i].tags.length > 0) ? escapeHTML(allNotes[i].tags).split(',') : []
      // add to list
      if (allNotes[i].id && list.get('id', allNotes[i].id).length === 0) {
        list.add(allNotes[i])
      }
    }
  }
  callback(list, allNotes)
}

