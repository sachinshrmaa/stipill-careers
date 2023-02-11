import Link from "next/link";

const Navbar = () => {
    return (  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link href='/' className="navbar-brand"><span id="logo">stipill</span> <span id="careers">Jobs</span> </Link>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}
 
export default Navbar;