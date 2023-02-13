import Link from "next/link";

const Footer = () => {
    return (  
        <div className='footer-section'>

            <div className="row col-md-10 m-auto align-items-center ">
                <div className="col-md-4 col-12 mb-4 d-flex justify-content-center justify-content-md-start">
                    <a href="/" className="text-decoration-none text-white">
                        <h5 className='footer-brand'>stipill</h5>
                        <small>Made with ❤ in India</small> <br />
                        <small>©2023 Stipill ・ All rights reserved.</small>
                    </a>
                </div>



                <div className="col-md-8 col-12 d-flex justify-content-md-end  justify-content-center">

                    <div className="row">
                        <div className="d-flex justify-content-md-end mb-md-3">
                            <a href='https://twitter.com/stipill1' target='_blank'  className="ms-md-4 text-decoration-none text-light"><i className="bi bi-twitter"></i> </a> <br />
                            <a href='https://facebook.com/stipill' target='_blank'  className="ms-md-4 text-decoration-none text-light"><i className="bi bi-facebook"></i> </a> <br />
                            <a href='https://github.com/stipill' target='_blank'  className="ms-md-4 text-decoration-none text-light"><i className="bi bi-github"></i> </a> <br />
                            <a href='https://www.linkedin.com/company/stipill/' target='_blank'  className="ms-md-4 text-decoration-none text-light"><i className="bi bi-linkedin"></i> </a> <br />
                        </div>
                        
                        <div className="d-flex justify-content-md-end ">
                            <Link href='/contact' className="ms-md-2 text-decoration-none text-light">Contact</Link> ・
                            <Link href='/terms' className="ms-md-2 text-decoration-none text-light">Terms</Link> ・
                            <Link href='/privacy' className="ms-2 text-decoration-none text-light">Privacy</Link>      
                        </div> 
                    </div>           
                </div>
            </div>

        </div>
    );
}
 
export default Footer;