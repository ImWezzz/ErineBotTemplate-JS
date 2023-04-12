const { HybridBuilder, Context } = require('erine');

const body = {
    data: new HybridBuilder()
    .setName("ping")
    .setAliases("latency")
    .setDescription("Show my ping"),
    async code(ctx) {
        ctx.send(`Ping: ${ctx.bot.ws.ping}ms`)
    }
}

module.exports = { body }
