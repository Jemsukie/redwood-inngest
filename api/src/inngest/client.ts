import { Inngest } from 'inngest'

// npx inngest-cli types ts
// import { Events } from 'src/__generated__/inngest'

export const inngest = new Inngest({
  name: 'My RedwoodJS App',
  eventKey: process.env.INNGEST_EVENT_KEY,
})
