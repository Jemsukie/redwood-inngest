import { logger } from 'src/lib/logger'

import { inngest } from '../client'

export default inngest.createScheduledFunction(
  'Purge cache every morning',
  '* * * * *',
  async () => {
    // Purge the cache
    await new Promise((resolve) => setTimeout(resolve, Math.random() * 1000))
    logger.info('Run every minute', new Date().toTimeString())
  }
)
