const usersSQL = require("../models/userSQL")

module.exports = async function (req, res) {
    const result = await usersSQL.getUsers()
    res.status(200).json(
        {
            status: "SUCCESS",
            data: result
        })
}