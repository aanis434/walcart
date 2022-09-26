import React, { useState } from "react";

/**
 * @author Md Anisur Rahman
 * @function Carousel
 **/
import styles from "./Carousel.module.css";

export const Carousel = ({items}) => {
    const [checkedId, setCheckedId] = useState(1);
 
  const handleIndicators = (id) => {
    setCheckedId(id);
  }

  return (
    <>
      <div className={`${styles.carousel}`}>
        <div className={`${styles.carouselInner}`}>
          {items?.map((item) => (
            <div key={item.id} className="cursor-pointer">
              <input
                className={`${styles.carouselOpen}`}
                type="radio"
                id={`${styles.carousel+item.id}`}
                name="carousel"
                aria-hidden="true"
                hidden={true}
                value={checkedId}
                checked={item.id==checkedId ? true : false }
                readOnly
              />
              <div className={`${styles.carouselItem}`}>
                <img src={item.img} />
              </div>
            </div>
          ))}

          <ol className={`${styles.carouselIndicators}`}>
           {items?.map(item => (
             <li key={item.id} onClick={() => handleIndicators(item.id)}>
             <label htmlFor={`carousel${item.id}`} className={`${styles.carouselBullet} ${item.id==checkedId ? styles.active : ''}`}>
               •
             </label>
           </li>
           ))}
          </ol>
        </div>
      </div>
    </>
  );
};
