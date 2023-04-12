const { HybridBuilder, ParamsBuilder } = require("erine");

const body = {
    data: new HybridBuilder()
    .setName('say')
    .setDescription('I repeat your text'),
    params: new ParamsBuilder()
    .addString({ name: "text", description: "Insert a text", required: true, long: true }),
    async code(ctx) {
       await ctx.send(ctx.get("text"));
    }
}

module.exports = { body }
