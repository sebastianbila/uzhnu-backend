const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs')
const { User } = require('../../db/models')
const { generatePassword } = require('../../shared/helpers')

class UserService {
  async getUserInfo(userId) {
    const user = await User.findOne({ _id: userId })
    if (!user) throw new Error('User not found')

    return user
  }

  async resetPassword(email) {
    const user = await User.findOne({ email })
    if (!user) throw new Error('User with email not found')

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'osbb.uzhnu@gmail.com',
        pass: 'osbb12345'
      }
    })

    const newPassword = generatePassword()
    await User.findOneAndUpdate(
      { _id: user._id },
      { $set: { password: bcrypt.hashSync(newPassword, 10) } },
      { new: true }
    )

    const mailOptions = {
      from: 'osbb.uzhnu@gmail.com',
      to: email,
      subject: 'OSBB UzhNU | Reset Password',
      html: `
        <h1>Ваші дані для входу в кабінет: </h1>
        <ul>
          <li>Номер телефону: <b>${user.phoneNumber}</b></li>
          <li>Пароль: <b>${newPassword}</b></li>
        </ul>
      `
    }

    await transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })
  }
}

module.exports = UserService
