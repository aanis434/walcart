/**
 * @author Md Anisur Rahman
 * @function SearchBar
 **/

import Image from "next/image";
import Link from "next/link";
import {
  CartIcon,
  FavouriteIcon,
  SearchIcon,
  UserIcon,
} from "../Utilities/Icons";
import styles from "./SearchBar.module.css";

export const SearchBar = (props) => {
  return (
    <div className="container">
      <div className="flex flex-col flex-row--xl justify-between items-center pb-14 pt-11">
        <div className="cursor-pointer">
          <Link href="/">
            <a>
              <Image
                src="/walcart-logo.png"
                alt=""
                width="135px"
                height="46px"
              />
            </a>
          </Link>
        </div>
        <div className="max-w-xl grow">
          <div className="flex justify-center flex-row ">
            <div className="w-full">
              <div className="input-group relative flex items-stretch w-full">
                <input
                  type="search"
                  className={`${styles.input} h-60 form-control relative flex-auto min-w-0 block w-full text-base font-normal`}
                  placeholder="What do you want to order?"
                  aria-label="Search"
                  aria-describedby="button-addon3"
                />
                <div className={`absolute ${styles.searchIcon}`}>
                  <SearchIcon />
                </div>
                <button
                  className={`font-medium ${styles.btn} cursor-pointer`}
                  type="button"
                  id="button-addon3"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden flex--xl gap-14 items-center justify-center">
          <div className="flex gap-5 items-center justify-center cursor-pointer">
            <UserIcon />
            <div className="flex flex-col text-base leading-5">
              <span className="tracking-wider">Sign In </span>
              <span className="font-medium leading-6">Account</span>
            </div>
          </div>
          <div className="relative cursor-pointer">
            <FavouriteIcon />
            <span className={`${styles.badge}`}>1</span>
          </div>
          <div className="relative cursor-pointer">
            <CartIcon />
            <span className={`${styles.badge}`}>7</span>
          </div>
        </div>
      </div>
    </div>
  );
};
