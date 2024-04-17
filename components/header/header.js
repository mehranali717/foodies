import Link from "next/link";
import logo from "@/assets/images/logo.png";
import classes from "./header.module.css";
import Image from "next/image";
import NavLink from "../navLinks/navlink";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["container"]}>
        <div className={classes.content_inner}>
          <div>
            <Link href="/" className={classes.logo}>
              <Image src={logo.src} height={90} width={90} alt="Logo" placeholder="blur" blurDataURL={logo.src}/>
              <span> NextLevel Meals</span>
            </Link>
          </div>
          <nav className={classes.nav_bar}>
            <ul className={classes.nav_list}>
              <li>
                <NavLink href="/meals">Browse Meals</NavLink>
              </li>
              <li>
              <NavLink href="/community">Community Meals</NavLink>

              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
