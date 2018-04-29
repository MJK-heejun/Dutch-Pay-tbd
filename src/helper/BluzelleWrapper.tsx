const bluzelle = require('bluzelle')

const BOOTSTRAP_NODES = [
  'ws://13.78.130.82:51010',
  '13.78.130.82:51011',
  '13.78.130.82:51012'
]

export default class BluzelleWrapper {

  bluzelleInstance: undefined

  // constructor(uuid: string) {
  //   //this.connectBluzelle(uuid)
  // }

  async connectBluzelle(uuid: string) {
    await bluzelle.connect(BOOTSTRAP_NODES[0], uuid)
  }

  async create(key: string, obj:any) {
    await bluzelle.create(key, obj)
  }

  async read(key: string) {
    await bluzelle.read(key)
  }
 

}