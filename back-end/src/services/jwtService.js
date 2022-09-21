require('dotenv/config');
const jwt = require('jsonwebtoken');
const fs = require('fs');
// const fs = require('fs').promises;

const secret = fs.readFileSync('jwt.evaluation.key', 'utf8');

const jwtService = {
  createToken: (data) => {
    const token = jwt.sign({ data }, secret);
    return token;
  },

  validateToken: (token) => {
      const { data } = jwt.verify(token, secret);
      return data.id;
  },
};

module.exports = jwtService;
