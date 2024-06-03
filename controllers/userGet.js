const usersSQL = require("../models/userSQL")

module.exports = async function (req, res, userId) {
    const result = await usersSQL.getUserById(userId)
    res.json(
        {
            status: "SUCCESS",
            data: result
        })
}