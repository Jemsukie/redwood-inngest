import { serve } from 'inngest/redwood'

import fns from 'src/inngest'
import { inngest } from 'src/inngest/client'

export const handler = serve(inngest, fns, {
  servePath: `${process.env.WEB_API_URL || '/.redwood/functions'}/inngest`,
  signingKey: process.env.SIGNING_KEY,
})
