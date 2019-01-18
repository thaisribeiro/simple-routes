import fs from 'fs'
import { resolve } from 'path'

export default class Controller {
  constructor (model) {
    this.model = model

    return this.createFunction()
  }

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
