
const event = {
    name: "ready",
    async code(client) {
        client.skyfold.sync(client.token, client.user.id).then(() => {
            console.log("Slash commands cargados exitosamente!")
        })
        console.log(`Me conecte en: ${client.user.username}`)
    }
} 

module.exports = {event}
