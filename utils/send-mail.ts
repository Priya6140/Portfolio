import nodemailer from "nodemailer";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL || EMAIL_USER; // fallback to sender

export const sendMailFromNodemailer = async (
  subject: string,
  email: string,
  message: string,
  name: string
) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: RECEIVER_EMAIL,
      subject,
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("MAIL SENT:", info.response);
    return info.response;
  } catch (error) {
    console.error("MAIL ERROR:", error);
    throw error;
  }
};

