import { useState } from "react";
import styles from "./Menu.module.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuButton} onClick={handleToggle}>
        <h1>+</h1>
      </div>
      {isOpen && (
        <div className={styles.menuDropdown}>
          <ul>
            <li>
              <div className={styles.box}>
                <a href="https://www.twitter.com/bcit/">
                  <div className={styles.imageContainer}>
                    <img src="/icons/twitter.png" alt="Box 1" />
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className={styles.box}>
                <a href="https://www.facebook.com/bcit.ca/">
                  <div className={styles.imageContainer}>
                    <img src="/icons/facebook.png" alt="Box 2" />
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className={styles.box}>
                <a href="https://www.instagram.com/lifeatbcit/">
                  <div className={styles.imageContainer}>
                    <img src="/icons/instagram.png" alt="Box 3" />
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
