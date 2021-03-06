import React from "react";
import  { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg.svg';
import './header.styles.scss';
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdoown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from 'reselect';



const Header = ({ currentUser, hidden }) => {
    return(
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {
                currentUser  ? 
                    <div className="option" onClick={() => auth.signOut()}>
                        {currentUser.displayName}
                    </div>
                    :
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null: <CartDropdown />
        }
    </div>
)}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);