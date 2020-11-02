import { Client, ClientOptions } from 'eris'
import { SoulError } from './errors'

/**
 * Construction options for Soul
 */
interface SoulOptions {
  /** The token to use. Defaults to the `DISCORD_TOKEN` environment variable. */
  token: string
  /** [ClientOptions](https://abal.moe/Eris/docs/Client) to be passed to Eris. */
  erisOptions: ClientOptions
}

/**
 * The base client class. Handles connections to Discord and commands.
 * Extends the
 * <a href="https://abal.moe/Eris/docs/CommandClient" target="_blank">
 *  Eris CommandClient</a>.
 */
export default class Soul extends Client {
  constructor (options: Partial<SoulOptions> = {}) {
    const token = options.token ?? process.env.DISCORD_TOKEN
    if (token === undefined) {
      throw new SoulError('Token not provided')
    }
    super(token, options.erisOptions)
  }
}
