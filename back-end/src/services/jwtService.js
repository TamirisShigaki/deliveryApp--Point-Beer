require('dotenv/config');
const jwt = require('jsonwebtoken');
const fs = require('fs');
// const fs = require('fs').promises;

const secret = fs.readFileSync('jwt.evaluation.key', 'utf8');
console.log(secret);
// jwt.evaluation.key
// src/services/jwtService.js
// /home/qsc/development/trybe/projetos/backend/sd-019-a-project-delivery-app/back-end/jwt.evaluation.key
// console.log(process.cwd());
// console.log(`__dirname: ${__dirname}`);
// async function main() {
//   try {
//     const data = await fs.readFile('../../jwt.evaluation.key', 'utf-8');
//     console.log(data);
//   } catch (err) {
//     console.error(`Erro ao ler o arquivo: ${err.message}`);
//   }
// }

// console.log(main());

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
