const { HybridBuilder, ParamsBuilder } = require('erine');
const { EmbedBuilder } = require("discord.js");

const body = {
   data: new HybridBuilder()
   .setName('avatar')
   .setAliases('pfp')
   .setDescription('Display a user avatar'),
  params: new ParamsBuilder()
  .addMember({ name: "user", description: "Select a user", required: false }),
  async code(ctx) {
    const u = ctx.get("user")?.user || ctx.author
    const embed = new EmbedBuilder()
      .setDescription(`${u.username}'s avatar`)
      .setImage(u.displayAvatarURL({ size: 1024 }))
      .setColor('dcdcdc')
  await ctx.send({ embeds: [embed] })
  }
}

module.exports = { body }
