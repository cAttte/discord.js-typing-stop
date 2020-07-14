module.exports = User => class extends User {
    typing = false
    typingChannelID = null
    get typingChannel() {
        return this.client.channels.cache.get(this.typingChannelID) || null
    }
}