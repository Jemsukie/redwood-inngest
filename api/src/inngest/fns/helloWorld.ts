// import { logger } from 'src/lib/logger'

import { order } from 'src/lib/order'

import { inngest } from '../client'

export default inngest.createFunction(
  'hello-world',
  'test/hello.world',
  async () => {
    // await step.sleep('wait-a-moment', '1s')

    await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000))
    await order()
    return { event, body: 'Hello, World!' }
  }
)
