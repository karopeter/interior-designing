function auth(req, res, next) {
    console.log('Authentication...');
    next();
}

module.exports = auth;