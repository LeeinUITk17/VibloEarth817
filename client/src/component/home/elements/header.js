import Hero from './hero';
import { SearchArea } from '../../child.component';
const Header = () => {
   return (
    <>
    <div className="top-header-area" id="sticker">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-sm-12 text-center">
                <div className="main-menu-wrap">
                    <div className="site-logo">
                        <a href="/home">
                           <img src="assets/img/logo.png" alt=""></img>
                        </a>
                    </div>
                    <nav className="main-menu">
                        <ul>
                            <li className="current-list-item"><a href="/home">Home</a></li>
                            <li><a href="/news">News</a> </li>
                            <li><a href="/contact">Contact</a></li>
                            <li>
                                <div className="header-icons">
                                    <a className="shopping-cart" href="cart.html"><i className="fas fa-shopping-cart"></i></a>
                                    <a className="mobile-hide search-bar-icon" href="#"><i className="fas fa-search"></i></a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <a className="mobile-show search-bar-icon" href="#"><i className="fas fa-search"></i></a>
                    <div className="mobile-menu"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<SearchArea/>
<Hero/>
    </>
   )
}
export default Header;