let dotenv = require('dotenv').config()

const express = require("express");
const app = express();

const userRoutes = require("./routes/userRouter");

const PORT = dotenv.parsed.PORT;

app.get("/api/users", userRoutes.usersGetAll)
app.post("/api/users", userRoutes.userCreate)
app.get("/api/users/:id", userRoutes.userGet)
app.put("/api/users/:id", userRoutes.userUpdate)
app.delete("/api/users/:id", userRoutes.userDelete)

app.listen(PORT, () => {
    console.log(`Запущен сервер на порту: ${PORT}`)
});
