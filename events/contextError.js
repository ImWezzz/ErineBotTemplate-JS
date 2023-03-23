const { ErineClient, Errors } = require("erine");

const event = {
  name: 'contextError',
  /**
  * @param {Error} client
  */
  async code(error) {
      if(error instanceof Errors.CommandNotFound) return
      else if(error instanceof Errors.MissingRequiredParam) {
          return error.ctx.send(`Parametro **${error.param.name}** faltante!`)
  }
}


module.exports = { event }
