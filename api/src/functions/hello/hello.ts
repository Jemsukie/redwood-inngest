import type { APIGatewayEvent, Context } from 'aws-lambda'

import { inngest } from 'src/inngest/client'
import { logger } from 'src/lib/logger'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (_event: APIGatewayEvent, _context: Context) => {
  logger.info('Invoked hello function')

  const callInngest = inngest.send('app/order.runner', {
    data: {
      user_account_id: 'Jemuel',
    },
  })

  await Promise.all([
    callInngest,
    callInngest,
    callInngest,
    callInngest,
    callInngest,
    callInngest,
    callInngest,
    callInngest,
    callInngest,
    callInngest,
    callInngest,
    callInngest,
    callInngest,
    callInngest,
    callInngest,
    callInngest,
    callInngest,
    callInngest,
    callInngest,
    callInngest,
  ])

  console.log('serverless function is called')

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      data: 'hello function',
    }),
  }
}
