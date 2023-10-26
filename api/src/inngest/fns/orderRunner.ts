import { logger } from 'src/lib/logger'
import { order } from 'src/lib/order'

import { inngest } from '../client'

export default inngest.createFunction(
  'Order runner',
  'app/order.runner',
  async () => {
    await order().then(() => logger.info('Successfully sent email!'))

    return { itemsGenerated: 347 }
  }
)
