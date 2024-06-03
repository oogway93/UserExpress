module.exports = async function (req, res, userId) {
    // const result = await usersSQL.getUserById(userId)
    res.json(
        {
            status: "SUCCESS",
            data: userId
        })
}