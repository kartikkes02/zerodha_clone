import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
            <div className="container-fluid">
                <Link class="navbar-brand" to="/">
                    <img src="/images/logo.svg" alt="" style={{ width: "20%" }} />
                </Link>
                <button
                    className="navbar-toggler"Link                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <form>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active ml-5" to="/signup">
                                    Sign up           
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active ml-5" to="/about">
                                    About
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/products">
                                    Products
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/pricing">
                                    Pricing
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" to="/support">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
