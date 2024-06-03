const usersSQL = require("../models/userSQL")

module.exports = async function(req, res, userId) {
    const success = await usersSQL.deleteUser(userId)
    if (success) {
        res.status(200).json({ status: "DELETED" });
    } else {
        res.status(400).json({ status: "NOT DELETED" })
    }
}