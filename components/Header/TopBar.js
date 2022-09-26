/**
 * @author Md Anisur Rahman
 * @function TopBar
 **/
import { DownArrow } from "../Utilities/Icons";
import styles from "./TopBar.module.css";

export const TopBar = (props) => {
  return (
    <div className={`container hidden block--xl`}>
      <div className="flex justify-between font-medium leading-6 text-xs py-10">
        <div>
          <a href="#" className={`pr-5 ${styles.borderRight}`}>
            About Us
          </a>
          <a href="#" className={`px-5 ${styles.borderRight}`}>
            My Account
          </a>
          <a href="#" className={`px-5 ${styles.borderRight}`}>
            Featured Products
          </a>
          <a href="#" className={`px-5`}>
            Contact
          </a>
        </div>
        <div className={`flex gap-10`}>
          <a href="#">Order Tracking</a>
          <a href="#" className={`flex items-center justify-center gap-1`}>
            English
            <DownArrow />
          </a>
          <a href="#" className={`flex items-center justify-center gap-1`}>
            USD
            <DownArrow />
          </a>
        </div>
      </div>
    </div>
  );
};
