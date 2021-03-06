import request from 'request';
import Secret from '../secrets.js';

import { authenticateUser } from '../app/usercontroller';

//Note: don't hardcode the redirect url, also present in login page
const REDIRECT_URL = 'http://localhost:8000/authenticate';

export default (app, db) => {

  app.get('/authenticate', (req, res) => {

    let { clientID, clientSecret } = Secret;

    if (req.query.code) {
      request.post({
        url: 'https://api.instagram.com/oauth/access_token',
        form: {
          client_id: clientID,
          client_secret: clientSecret,
          grant_type: 'authorization_code',
          redirect_uri: REDIRECT_URL,
          code: req.query.code
        }
      }, function(err, res, body){
          return authenticateUser(err, res, body, db);
      });
    } else if (req.query.error) {
      res.sendFile(path.join(process.cwd(), 'public/index.html'));
    }
  })
}