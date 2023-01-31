import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "../components/nav.module.css";

export default function Nav(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const MENU = [
    {
      title: "HOME",
      link: "#",
    },
    {
      title: "SERVICES",
      link: "#",
    },
    {
      title: "SHOP",
      link: "#",
    },
    {
      title: "BLOG",
      link: "#",
    },
    {
      title: "BOOK NOW",
      link: "#",
    },
  ];

  const handleOnClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.logo}>-10 || MINUS TEN</div>
      <ul className={styles.desktopMenu}>
        {MENU.map((menuItem, idk) => {
          return (
            <li key={idk}>
              <a href={menuItem.link} className={styles.desktopMenuA}>
                {menuItem.title}
              </a>
            </li>
          );
        })}
      </ul>
      {isMobileMenuOpen ? (
        <FontAwesomeIcon
          className={styles.mobileMenuButton}
          icon={faXmark}
          onClick={handleOnClick}
        />
      ) : (
        <FontAwesomeIcon
          className={styles.mobileMenuButton}
          icon={faBars}
          onClick={handleOnClick}
        />
      )}
      {isMobileMenuOpen && (
        <ul className={styles.mobileMenu}>
          {MENU.map((menuItem, idk) => {
            return (
              <li key={idk} className={styles.mobileLi}>
                <a href={menuItem.link} className={styles.mobileA}>
                  {menuItem.title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
