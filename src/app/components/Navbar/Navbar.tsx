import Logo from "../../../../public/images/logo-muji.svg";

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
          <img
            className="navbar-icon"
            src="/images/search-interface-symbol.png"
            alt=""
          />
          <img className="navbar-icon" src="/images/user.png" alt="" />
          <img className="navbar-icon" src="/images/heart.png" alt="" />
          <img className="navbar-icon" src="/images/shopping-cart.png" alt="" />
          <img className="navbar-icon" src="/images/attention.png" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default NavbarCommon;
