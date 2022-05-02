import axios from 'axios'

export default (req, res) => {
  if (req.query.q !== undefined) res.send(req.query.q);
  res.send('No query available!')
}