const { HybridBuilder, ParamsBuilder } = require("erine");

const body = {
    data: new HybridBuilder()
    .setName('say')
    .setDescription('Repito tu texto'),
    params: new ParamsBuilder()
    .addString({ name: "texto", description: "Ingresa tu text", required: true, long: true }),
    async code(ctx) {
       await ctx.send(ctx.get("texto"));
    }
}

module.exports = { body }
