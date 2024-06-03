const express = require("express")
const url = require("url")
const app = express()
const usersGetAll = require("../controllers/usersGetAll")
const userGet = require("../controllers/userGet")
const userCreate = require("../controllers/userCreate")
const userUpdate = require("../controllers/userUpdate")
const userDelete = require("../controllers/userDelete")

exports.userGet = (req, res) => {
    const userId = req.params.id
    res.contentType("application/json")
    userGet(req, res, userId)
}

exports.userCreate = (req, res) => {
    res.contentType("application/json")
    userCreate(req, res)
}

exports.usersGetAll = (req, res) => {
    res.contentType("application/json")
    usersGetAll(req, res)
}

exports.userUpdate = (req, res) => {
    const userId = req.params.id
    res.contentType("application/json")
    userUpdate(req, res, userId)
}

exports.userDelete = (req, res) => {
    const userId = req.params.id
    res.contentType("application/json")
    userDelete(req, res, userId)
}
