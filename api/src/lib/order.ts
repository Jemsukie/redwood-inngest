export const order = async () => {
  await fetch('https://api.brevo.com/v3/smtp/email', {
    // TODO, merge options.headers if exist
    headers: {
      accept: 'application/json',
      'api-key': process.env.BREVO_API_KEY || '',
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
