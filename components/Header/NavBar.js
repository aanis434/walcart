/**
 * @author Md Anisur Rahman
 * @function NavBar
 **/

import { DownArrow, DiscountIcon, HamburgIcon, DownArrowFill } from "../Utilities/Icons";
import styles from './NavBar.module.css'

export const NavBar = (props) => {
  return (
    <div className="container hidden block--xl">
      <nav className="flex justify-between">
        <div className={`text-base font-medium leading-6 flex gap-7 items-center ${styles.topCategories}`}>
          <HamburgIcon />
          <a>Top Categories</a>
          <DownArrowFill />
        </div>
        <div className={`text-sm font-medium leading-6 flex items-center gap-10`}>
          <a href="#" className="flex gap-4 items-center">
            Exclusive Deals
            <DownArrow />
          </a>
          <a href="#" className="flex gap-4 items-center">
            Smart Wathces
            <DownArrow />
          </a>
          <a href="#" className="flex gap-4 items-center">
            Cell Phone
            <DownArrow />
          </a>
          <a href="#">Headphone</a>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <DiscountIcon />
          <a href="#" className="flex flex-col">
              <span className={`tracking-wider opacity-65 ${styles.discountTitle}`}>Only this weekend</span>
            <span className={`text-base leading-6 ${styles.discountSubtitle}`}>Super Discount</span>
          </a>
          <DownArrow />
        </div>
      </nav>
    </div>
  );
};
