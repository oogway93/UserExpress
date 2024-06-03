const usersSQL = require("../models/userSQL")

module.exports = (req, res, userId) => {
    let body = ""
    req.on("data", chunk => {
        body += chunk
    })
    req.on("end", async function () {
        try {
            const parsedBody = JSON.parse(body)
            const name = parsedBody.name
            const age = parsedBody.age
            if (userId && name && age) {
                console.log("Updated user" + JSON.stringify({ id: userId, name: name, password: age }))
                let result = await usersSQL.updateUser(userId, name, age)
                res.status(201).json({ status: "UPDATED", data: result })
            }
        } catch (error) {
            console.error('Error parsing JSON or user Id:', error);
            res.status(400).json({ "error": "Error parsing JSON data or user Id." });
        }
    })
}