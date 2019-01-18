import fs from 'fs'
import { resolve } from 'path'

export default class Controller {
  /**
   * Starts the creation of CRUD functions
   * @param {Object} model - Object collections
   */
  constructor (model) {
    this.model = model

    return this.createFunction()
  }

  /**
   * Creates the functions of CRUS
   */
  createFunction () {
    const path = resolve('src/resources')
    const paths = fs.readdirSync(path)
    const actions = paths.map((p) => {
      const action = p.replace('.js', '')
      return { [action]: require(`${path}/${action}`)(this.model) }
    })

    return Object.assign(...actions)
  }
}
