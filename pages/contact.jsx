import Head from "next/head";


const Contact = () => {
    return (  
        <div className="col-md-6 col-11 m-auto py-5">
            <Head>
                <title>Contact - the basics</title>
                <meta name="description" content="A series of live cohort which intents to teach you the basics from scratch." />
        
            </Head>

            <h2 className="sub-heading mb-4">Contact Us</h2>

            <p>Thank you for visiting the Stipill! If you have any questions or comments, we would love to hear from you.</p>

            <p>You can reach to us through the following channels:</p>

            <ul>
                <li>Email: contact@stipill.in</li>
                <li>Twitter: twitter.com/stipill1</li>
                <li>LinkedIn: https://www.linkedin.com/company/stipill/</li>
                <li>Facebook: facebook.com/stipill</li>
            </ul>
            <p>We strive to respond to all inquiries within one business day.</p>
            <p>Thank you for choosing. We look forward to serving you!</p>

        </div>
    );
}
 
export default Contact;