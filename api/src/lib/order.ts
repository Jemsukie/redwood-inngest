export const order = async () => {
  await fetch('https://api.brevo.com/v3/smtp/email', {
    // TODO, merge options.headers if exist
    headers: {
      accept: 'application/json',
      'api-key':
        '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',
    },
    method: 'POST',
    body: JSON.stringify({
      sender: {
        name: `"Atlas Admin" <ops@thefreelancemovement.com>`,
        email: 'jemuel.lupo@gmail.com',
      },
      to: [
        {
          email: 'jemuel.lupo@gmail.com',
          name: 'Dev Testing',
        },
      ],
      htmlContent: 'Hello this is testing',
      subject: 'Testing this part',
    }),
  })
}
