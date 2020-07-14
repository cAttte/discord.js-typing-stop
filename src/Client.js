module.exports = Client => class extends Client {
    constructor(options) {
        super(options)
        this.on("typingStart", (channel, user) => {
            user.typing = true
            user.typingChannelID = channel.id
            user.typingChannel = channel
            this.setTimeout(() => {
                if (!user.typing) return
                user.typing = false
                user.typingChannelID = null
                user.typingChannel = null
                this.emit("typingStop", channel, user)
            }, 10000)
        })
        this.on("message", message => {
            if (!message.author.typing) return
            message.author.typing = false
            message.author.typingChannelID = null
            message.author.typingChannel = null
            this.emit("typingStop", message.channel, message.author)
        })
    }
}