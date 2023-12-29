import { useEffect, useState, useContext } from  "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb"
import { CgShoppingCart } from "react-icons/cg"
import { AiOutlineHeart } from "react-icons/ai"

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import "./Header.scss";


const Header = () => {
            const [scrolled, setScolled] = useState(false);
            const [showCart, setShowCart] = useState(false);
            const [showSearch, setShowSearch] = useState(false);
            const handleScroll = () =>{
                const offset = window.scrollY
              if(offset > 200)
              {
                setScolled(true);
              }else{
                setScolled(false);
              }
            }

            useEffect(() => {
                window.addEventListener("scroll", handleScroll)
            }, [])

        return (
            <>

        <header className={`main-header ${scrolled ? 'sticky-header' : ''}` }>

            <div className="header-context">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center">NPT_STORE</div>
                <div className="right">
                    <TbSearch onClick={()=> setShowSearch(true)} />
                    <AiOutlineHeart/>
                <span className="cart-icon" onClick={()=> setShowCart(true)}>
                    <CgShoppingCart/>
                    <span>7</span>
                </span>

                </div>

            </div>

        </header>
                    {showCart && <Cart setShowCart={setShowCart} /> }
                    {showSearch && <Search setShowSearch={setShowSearch} /> }
            </>
        );
};

export default Header;
