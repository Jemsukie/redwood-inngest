import axios from 'axios'

export const order = async () => {
  try {
    const response = await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
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
        htmlContent: 'Hello, this is testing',
        subject: 'Testing this part',
      },
      {
        headers: {
          accept: 'application/json',
          'api-key': process.env.BREVO_API_KEY || '',
        },
      }
    )

    // Handle the response here if needed
    return response
  } catch (error) {
    // Handle errors here
    console.error(error)
  }
}
