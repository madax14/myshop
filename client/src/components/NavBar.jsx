import React from 'react';
import { Link} from "react-router-dom";

function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                <li>
                    <Link className="link" to="/">Shop</Link>
                </li>
                <li>
                    <Link className="link" to="/BookDetails">Book Detail</Link>
                </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;