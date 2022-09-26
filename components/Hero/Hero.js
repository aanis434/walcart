/**
 * @author Md Anisur Rahman
 * @function Hero
 **/

import { Banner } from "./Banner";
import { Sidebar } from "./Sidebar";
import styles from "./Hero.module.css";
import { Carousel } from "./Carousel";

export const Hero = (props) => {
    // Carousel Items 
    const CarouselItems = [
        {
          id: 1,
          img: "/sliders/slider-1.webp"
        },
        {
          id: 2,
          img: "/sliders/slider-1.webp",
        },
        {
          id: 3,
          img: "/sliders/slider-1.webp",      
        },
      ];

    // Banners Items 
    const banners = [
        {
            id: 1,
            src: "/banners/banner-1.png", 
        },
        {
            id: 2,
            src: "/banners/banner-2.png", 
        }
    ]
  return (
    <div className="container mt-8">
      <div className="flex flex-col flex-row--xl gap-5 justify-between">
        {/* flex item one start  */}
        <div className={`${styles.item1} hidden block--xl`}>
          <Sidebar />
        </div>
        {/* flex item two start */}
        <div className={`${styles.item2}`}>
          <Carousel items={CarouselItems} />
        </div>
        {/* flex item three start  */}
        <div className={`flex flex-col  gap-4 ${styles.item3}`}>
          {
            banners?.map(item => (
                <Banner key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </div>
  );
};
