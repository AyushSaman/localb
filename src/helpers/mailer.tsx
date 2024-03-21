import nodemailer from 'nodemailer'
import User from "@/models/userModel";
import bcrypt from 'bcryptjs';

export async function sendMail(email:any,emailType:any,userId:any) {
    try {
      const hasedToken =  await bcrypt.hash(userId.toString(),10)
   
   if (emailType === "VERIFY") {
    await User.findByIdAndUpdate(userId,{verifyToken:hasedToken,verifyTokenExpiry:Date.now() + 3600000})
   } else if(emailType === "RESET"){
    await User.findByIdAndUpdate(userId,{forgotPasswordToken:hasedToken,forgotPasswordTokenExpiry:Date.now() + 3600000})
   }
   var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d9f52c1907bd2e",
      pass: "a2864614bae520"
    }
  });

  const mailOptions = {
    from: 'ayushsaman5@gmail.com',
    to: email,
    subject: emailType === "VERIFY" ? "Verify your email" : "Reset your password",
    html:`Click <p>Click <a href="${process.env.domain}/verifyemail?token=${hasedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
    or copy this url and paste it in your browser ${process.env.domain}/verifyemail?token=${hasedToken}
    </p>`
  }
 const mailResponse = await transport.sendMail(mailOptions);
   return mailResponse
} catch (error:any) {
        throw new Error(error.message);
        
    }
}