const statusByErrorCode = {
    'any.required': 400,
    'string.min': 400,
    'number.positive': 400,
    'number.min': 400,
    'string.empy': 400,
    'string.email': 400,
    notFound: 404,
    invalidData: 400,
    alreadyExists: 409,
    required: 400, 
  };

module.exports = (err, _req, res, _next) => {
    if (err.isJoi) {
      const status = statusByErrorCode[err.details[0].type] || 500;
      return res.status(status).json({ message: err.details[0].message });
    }
    if (err.code) {
      const status = statusByErrorCode[err.code] || 500;
      return res.status(status).json(err);
    }
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
};