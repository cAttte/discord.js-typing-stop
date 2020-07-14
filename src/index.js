const client = require("./Client")
const user = require("./User")

module.exports = (Discord) => {
    Discord.Client = client(Discord.Client)
    Discord.Structures.extend("User", user)
    return Discord
}