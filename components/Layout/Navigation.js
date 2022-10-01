import Image from "next/image";
import useScroll from "../../hooks/useScroll";

const Navigation = () => {

  const scrollY = useScroll();

  return <nav className="navigation">
    <div className="pageBound">
      <div className={`navigation__wrapper ${scrollY > 200 ? "navigation__wrapper--stickToTop" : ""}`}>
        <ul className="navigation__list">
          <li className="navigation__listItem">link</li>
          <li className="navigation__listItem">link</li>
          <li className="navigation__listItem">link</li>
          <li className="navigation__listItem">link</li>
        </ul>
        <ul className="navigation__list">
          <li className="navigation__listItem">
            <Image className="navigation__listIcon" src="/assets/cart.svg" alt="cart"  width="30px" height="30px"></Image>
          </li>
          <li className="navigation__listItem">
            <Image className="navigation__listIcon" src="/assets/search.svg" alt="cart"  width="25px" height="25px"></Image>
          </li>
          <li className="navigation__listItem">
            <Image className="navigation__listIcon" src="/assets/vector.svg" alt="cart"  width="25px" height="25px"></Image>
          </li>
        </ul>
      </div>
    </div>
    
  </nav>
}

export default Navigation;