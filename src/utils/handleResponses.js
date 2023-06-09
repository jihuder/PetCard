const success = ({ status, message, data, res }) => {
  res.status(status).json({
    status: status,
    message: message,
    data: data,
  });
};

const error = ({ status, message, fields, data, res }) => {
  res.status(status).json({
    error: true,
    status: status,
    message: message,
    data: data,
    fields: fields,
  });
};

module.exports = {
  success,
  error,
};
