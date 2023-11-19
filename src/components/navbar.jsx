import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div id="navbar">
            <div id="logo">
                <Link className="nb-link logo-link" to="/">wills.fyi</Link>
            </div>
            <div id="nb-links">
                <Link className="nb-link" to="about">about me</Link>
                <Link className="nb-link" to="contact">contact</Link>
                <Link className="nb-link" to="blog">blog</Link>
            </div>
        </div>
    );
}
