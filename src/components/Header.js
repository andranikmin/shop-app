import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Header extends React.Component {
    
    render() {
        const { location: { pathname } } = this.props;

        return (
            <nav className="nav">
                <Link className={`nav_item ${pathname === "/seller" || pathname === "/" ? "active" : ""}`} to="/seller">Seller</Link>
                <Link className={`nav_item ${pathname === "/buyer" ? "active" : ""}`} to="/buyer">Buyer</Link>
            </nav>
        );
    }
}

export default withRouter(Header);


