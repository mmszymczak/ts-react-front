module.exports = (request, response) => {
  setTimeout(() => {
    response.status(403).sendFile('GET.json', { root: __dirname });
  }, 2000);
};
