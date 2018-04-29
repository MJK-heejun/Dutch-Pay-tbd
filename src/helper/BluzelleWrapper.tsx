const bluzelle = require('bluzelle')

const BOOTSTRAP_NODES = [
  '13.78.130.82:51010',
  '13.78.130.82:51011',
  '13.78.130.82:51012'
]

export default class BluzelleWrapper {

  bluzelleInstance: undefined

  constructor(uuid: string) {
    //this.connectBluzelle(uuid)
  }

  connectBluzelle(uuid: string) {
    this.bluzelleInstance = bluzelle.connect(BOOTSTRAP_NODES[0], uuid)
  }

}