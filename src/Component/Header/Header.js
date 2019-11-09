import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg"
import "./Header.scss";
import {auth} from "../../Firebase/FirebaseUltil";

const Header=({currentuser})=>(
    
            <div className="header">
                <Link className="logo-container" to="/">
                    <Logo className="logo"/> 
                </Link>
                <div className="opitions">
                    <Link className="opition" to="/shops">
                        SHOP
                    </Link>
                    <Link className="opition" to="/shops">
                        CONTACT
                    </Link>
                    {
                        currentuser ? (
                            <div className="opition" onClick={()=>auth.signOut()}>SIGN OUT</div>
                        ) :
                        (
                            <Link className="opition" to="/signin">SIGN IN</Link>
                        )
                    }
                </div>
                

            </div>
        )

export default Header;
