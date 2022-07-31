/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

export default async function (req, res) {
  const body = req.body
  const message = `
  Name: ${body.firstName}\r\n
  Email: ${body.email}\r\n
  Wesbsite: ${body.website}
  `

  const data = {
    to: process.env.NEXT_PUBLIC_TO_EMAIL_ADDRESS,
    from: process.env.NEXT_PUBLIC_FROM_EMAIL_ADDRESS,
    subject: `Free Mini SEO Audit Message`,
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  }

  try {
    await sgMail.send(data)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}
