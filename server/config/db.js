import loki from 'lokijs';

let db = new loki('user.json');

let userCollection = db.addCollection('users')

export default users;
