class User {
  constructor() {
    this._id = undefined
    this._identityNumber = undefined
    this._firstName = undefined
    this._lastName = undefined
    this._email = undefined
    this._username = undefined
  }

  set id(value) {
    this._id = value
  }

  get id() {
    return this._id
  }

  set identityNumber(value) {
    this._identityNumber = value
  }

  get identityNumber() {
    return this._identityNumber
  }

  set firstName(value) {
    this._firstName = value
  }

  get firstName() {
    return this._firstName
  }

  set lastName(value) {
    this._lastName = value
  }

  get lastName() {
    return this._lastName
  }

  set email(value) {
    this._email = value
  }

  get email() {
    return this._email
  }

  set username(value) {
    this._username = value
  }

  get username() {
    return this._username
  }

  //functions
  static search(searchString) {
    return User.findAll({
      firstName: searchString,
    })
  }

  static findAll(criteria) {
    return new Promise((resolve, error) => {

    })
  }

  static findOne(identifier) {
    return new Promise((resolve, error) => {

    })
  }

  save() {
    return new Promise((resolve, error) => {

    })
  }

  delete() {
    return new Promise((resolve, error) => {

    })
  }
}
