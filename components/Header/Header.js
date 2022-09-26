
/**
* @author Md Anisur Rahman
* @function Header
**/
import styles from "./Header.module.css"
import { NavBar } from "./NavBar"
import { SearchBar } from "./SearchBar"
import { TopBar } from "./TopBar"

export default function Header(props){
  return(
    <header className={styles.header}>
        <TopBar />
        <SearchBar />
        <NavBar />
    </header>
   )

 }