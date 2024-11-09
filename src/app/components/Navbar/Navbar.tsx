import Image from "next/image";
import Logo from "../../../../public/images/logo-muji.svg";
import UserMenu from "../UserMenu/UserMenu";

const NavbarCommon: React.FC = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Logo />
        </div>
        <div className="navbar-center">
          <ul>
            <li>婦人服</li>
            <li>紳士服</li>
            <li>こども服</li>
            <li>生活雑貨</li>
            <li>家具・収納・家電</li>
            <li>食品</li>
          </ul>
        </div>
        <div className="navbar-right">
          <Image
            className="navbar-icon"
            src="/images/search-interface-symbol.png"
            alt="Search icon"
            width={24}
            height={24}
          />
          <UserMenu />
          <Image
            className="navbar-icon"
            src="/images/heart.png"
            alt="Heart icon"
            width={24}
            height={24}
          />
          <Image
            className="navbar-icon"
            src="/images/shopping-cart.png"
            alt="Shopping cart icon"
            width={24}
            height={24}
          />
          <Image
            className="navbar-icon"
            src="/images/attention.png"
            alt="Attention icon"
            width={24}
            height={24}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavbarCommon;
