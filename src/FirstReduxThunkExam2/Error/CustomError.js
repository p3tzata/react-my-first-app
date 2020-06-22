export class NoResponse extends Error {



  constructor(message='No Network Response') {
    super(message);
    this.name = "NoResponse";
  }

}


export class NoValidJson extends Error {
  constructor(message='No Valid Json') {
    super(message);
    this.name = "NoValidJson";
  }
}

export class TokenExpired extends Error {
  constructor(message='Your session expired') {
    super(message);
    this.name = "TokenExpired";
  }
}
