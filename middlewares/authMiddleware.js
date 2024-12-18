const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).send({message: 'Access denied. No token provided.' , success: false});
    try {
        const decoded = jwt.verify(token, "121212");
        req.body.employeeId = decoded.employeeId;
        next();
    } catch (error) {
        console.log(error);
        return res.status(500).send({message: 'Access denied. Invalid token.' , success: false});
    }

}