const t = require('tap')
const { Soul } = require('../dist')

t.test('Soul construction', t => {
  // Clear any env vars so they don't interfere
  delete process.env.DISCORD_TOKEN

  t.throws(() => new Soul(), 'cannot construct without token')
  t.doesNotThrow(() => new Soul({
    token: 'FAKE_TOKEN'
  }), 'construct with passed token')
  t.doesNotThrow(() => {
    process.env.DISCORD_TOKEN = 'FAKE_TOKEN'
    // eslint-disable-next-line no-new
    new Soul()
    delete process.env.DISCORD_TOKEN
  }, 'construct with token in environment variable')
  t.end()
})
