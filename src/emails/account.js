const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'purnamasrahayu@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'purnamasrahayu@gmail.com',
        subject: 'Till we meet again',
        text: `Hello, ${name}. We're sorry to know that you have decided to delete your account. Your experience matters to us. Please share your opinion if there is something we need to do for improvement. Thank you.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}