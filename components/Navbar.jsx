import Link from "next/link";

const Navbar = () => {
    return (  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link href='/' className="navbar-brand"><span id="logo">stipill</span> <span id="careers">Jobs</span> </Link>
                
            </div>
        </nav>
    );
}
 
export default Navbar;