import nodemailer from "nodemailer";

export default async (req, res) => {
	switch (req.method) {
		case "POST":
			const { email } = req.body;
			// generate coupon code for user with 5 characters
			const coupon = Math.random().toString(36).substr(2, 5).toUpperCase();
			const mail = await sendCoupon(email, coupon);
			console.log(mail);
			res.status(200).json({ statusCode: 200, message: "Email sent" });
			break;
		default:
			// method not allowed
			res
				.status(405)
				.send(
					`The method ${req.method} is not allowed. Please use a POST request`
				);

			break;
	}
};

// send coupon code to user
const sendCoupon = async (email, coupon) => {
	const transporter = nodemailer.createTransport({
		host: "smtp-relay.brevo.com",
		port: 587,
		auth: {
			user: "ahmadnurhalim@students.amikom.ac.id",
			pass: "yXLCc6FEgIp7ZMBQ",
		},
	});

	const mailData = {
		from: "admin@alivgym.xyz",
		to: email,
		subject: "Thanks for join us! | Here is your discount code",
		html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Thanks for join us!</title>
      </head>
      <body>
        <!-- give sign up discount code -->
        <h1>Thanks for join us!</h1>
        <p>Here is your discount code: <span id="discount-code">${coupon}</span></p>
        <p>Use it when you sign up for your first programs!</p>
    
        <!-- add footer -->
        <footer>
          <p>© 2020 <a href="https://www.alivgym.xyz">ALIVGYM</a></p>
        </footer>
    
        <!-- add css for more beatifuf -->
        <style>
          body {
            background-color: #f5f5f5;
            font-family: Arial, Helvetica, sans-serif;
          }
          h1 {
            text-align: center;
            color: #333;
          }
          p {
            text-align: center;
            color: #333;
          }
          #discount-code {
            color: #f00;
            font-weight: bold;
          }
          footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
          }
        </style>
      </body>
    </html>
    `,
	};

	return transporter.sendMail(mailData, (err, info) => {
		if (err) {
			console.log(err);
		} else {
			console.log(info);
			return info;
		}
	});
};
