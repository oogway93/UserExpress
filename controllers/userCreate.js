const usersSQL = require("../models/userSQL")

module.exports = async function (req, res) {
    let body = ""
    req.on("data", chunk => {
        body += chunk
    })
    req.on("end", async function () {
        try {
            const parsedBody = JSON.parse(body)
            const name = parsedBody.name
            const age = parsedBody.age
            if (name && age) {
                const query = await usersSQL.createUser(name, age)
                console.log("New User" + JSON.stringify({
                    name: name,
                    password: age
                }))
                res.status(201).json({
                    "status": "CREATED", data: {
                        ...query
                    }
                })
            }
        }
        catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(400).json({ "error": "Error parsing JSON data." });
        }
    })
}
