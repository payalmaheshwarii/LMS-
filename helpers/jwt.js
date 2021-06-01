const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {

    if (req.path == '/login' || (req.path == '/users' && req.method == 'POST')) {
        return next()
    }
    else {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if (token == null) return res.sendStatus(401)

        jwt.verify(token, process.env.SECRET, (err, user) => {
            if (err) return res.sendStatus(403)
            req.user = user
            console.log(user)
            next()
        })

    }

}

module.exports = authenticateToken