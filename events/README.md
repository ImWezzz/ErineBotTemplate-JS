# Errors

• Errors.MissingBotChannelPermission

• Errors.MissingBotPermission

• Errors.CommandNotFound

• Errors.GuildOnly

• Errors.MissingPermission

• Errors.MissingChannelPermission

• Errors.NotInChannelType

• Errors.NotParamBoolean

• Errors.NotParamNumber

• Errors.InvalidParamChoice

• Errors.InvalidParamMember

• Errors.InvalidParamChannel

• Errors.InvalidParamRole

• Errors.InvalidChannelType

• Errors.MissingRequiredParam

• Errors.UnknownCommandError

• Errors.NotNSFW

• Errors.OnlyForIDs

• Errors.NotOwner

# Example

```js
const { ErineClient, Errors } = require("erine");

const event = {
    name: 'contextError',
    /**
  * @param {Error} client
  */
    async code(error) {
        if(error instanceof Errors.CommandNotFound) return
        else if(error instanceof Errors.MissingRequiredParam) {
          return error.ctx.send(`Missing parameters: **${error.param.name}**`)
        }
        else if(error instanceof Errors.InvalidParamMember) {
            return error.ctx.send("User not found")
        }
    }
}


module.exports = { event }``` 
