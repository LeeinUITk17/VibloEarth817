const nodemailer = require("nodemailer");
const {
    mailreply,
}= require('../helpers/mailreply');
const {
    addcontact,
}=require('../services/contact.service');

const dotenv = require('dotenv');
dotenv.config();

class contactController{
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GOOGLE_MAIL_USER ,
                pass: process.env.GOOGLE_MAIL_PASSWORDS
            }
        });
    }
    sendContactMail = async (req, res, next) => {
        console.log(req.body);
        try {
            const { Name, Email, Message,Subject } = req.body;
            const replyContent = mailreply();        
            const mailOptions = {
                from: process.env.GOOGLE_MAIL_USER,
                to: Email,
                subject: `Thank you for your feedback, ${Name}!`, 
                html: `<p>Dear ${Name},</p><p>${replyContent}</p>`, 
            };
            await this.transporter.sendMail(mailOptions);
            await addcontact({ Name, Email, Message,Subject});
            res.redirect('/home');
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).send('Error sending email');
        } 
    }
}
module.exports=new contactController();