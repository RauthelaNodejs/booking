const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


async function createHash(params) {
    let data = await bcrypt.hash(params, 10);
    return data
}


async function validatePass(params) {
    const result = await bcrypt.compare(params.password, params.hash);
    return result;

}

async function createToken(params) {
    const token = jwt.sign({ userId: params._id, email: params.email }, "27B5427675142C449CF4B827538EA", { expiresIn: "2h" });
    return token;
}


async function verifyToken(params) {
    const data = jwt.verify(params.token, "27B5427675142C449CF4B827538EA")
    return data
}







module.exports = {
    createHash,
    validatePass,
    createToken,
    verifyToken
}