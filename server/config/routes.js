import { post } from 'request'

export default (app) => {

  app.get('/authenticate', (req, res) => {
    if (req.query.code) {
      console.log("xzxzxzx", req.query.code)
    }
  })
}