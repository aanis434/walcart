/**
 * @author Md Anisur Rahman
 * @function Sidebar
 **/

import Image from "next/image";
import { LaptopIcon } from "../Utilities/Icons/LaptopIcon";
import { RightArrowIcon } from "../Utilities/Icons/RightArrow";
import styles from "./Sidebar.module.css";

export const Sidebar = (props) => {
  const items = [
    {
      id: 1,
      title: "Laptop and Desktop",
      icon: {
        src: "/sidebar-icons/laptop.png",
        width: 15,
        height: 12,
      },
      children: [
        {
          id: 9,
          title: "Laptop and Desktop",
          children: "",
        },
        {
          id: 10,
          title: "Home Living",
          children: "",
        },
        {
          id: 11,
          title: "Book and Stationary",
          children: [
            {
              id: 17,
              title: "Laptop and Desktop",
              children: "",
            },
            {
              id: 18,
              title: "Home Living",
              children: "",
            },
            {
              id: 19,
              title: "Book and Stationary",
              children: "",
            },
            {
              id: 20,
              title: "Home Appliances",
              children: "",
            },
          ],
        },
        {
          id: 12,
          title: "Home Appliances",
          children: "",
        },
        {
          id: 13,
          title: "Book and Stationary",
          children: "",
        },
        {
          id: 14,
          title: "Electronics Appliances",
          children: "",
        },
        {
          id: 15,
          title: "Fast Food and Snacks",
          children: "",
        },
        {
          id: 16,
          title: "More Categories",
          children: "",
        },
      ],
    },
    {
      id: 2,
      title: "Home Living",
      icon: {
        src: "/sidebar-icons/home-living.png",
        width: 16,
        height: 12,
      },
      children: "",
    },
    {
      id: 3,
      title: "Book and Stationary",
      icon: {
        src: "/sidebar-icons/book.png",
        width: 11,
        height: 14,
      },
      children: [
        {
          id: 9,
          title: "Laptop and Desktop",
          children: "",
        },
        {
          id: 10,
          title: "Home Living",
          children: "",
        },
        {
          id: 11,
          title: "Book and Stationary",
          children: [
            {
              id: 17,
              title: "Laptop and Desktop",
              children: "",
            },
            {
              id: 18,
              title: "Home Living",
              children: "",
            },
            {
              id: 19,
              title: "Book and Stationary",
              children: "",
            },
            {
              id: 20,
              title: "Home Appliances",
              children: "",
            },
          ],
        },
        {
          id: 12,
          title: "Home Appliances",
          children: "",
        },
        {
          id: 13,
          title: "Book and Stationary",
          children: "",
        },
        {
          id: 14,
          title: "Electronics Appliances",
          children: "",
        },
        {
          id: 15,
          title: "Fast Food and Snacks",
          children: "",
        },
        {
          id: 16,
          title: "More Categories",
          children: "",
        },
      ],
    },
    {
      id: 4,
      title: "Home Appliances",
      icon: {
        src: "/sidebar-icons/home-appliances.png",
        width: 14,
        height: 12,
      },
      children: [
        {
          id: 9,
          title: "Laptop and Desktop",
          children: "",
        },
        {
          id: 10,
          title: "Home Living",
          children: "",
        },
        {
          id: 11,
          title: "Book and Stationary",
          children: [
            {
              id: 17,
              title: "Laptop and Desktop",
              children: "",
            },
            {
              id: 18,
              title: "Home Living",
              children: "",
            },
            {
              id: 19,
              title: "Book and Stationary",
              children: "",
            },
            {
              id: 20,
              title: "Home Appliances",
              children: "",
            },
          ],
        },
        {
          id: 12,
          title: "Home Appliances",
          children: "",
        },
        {
          id: 13,
          title: "Book and Stationary",
          children: "",
        },
        {
          id: 14,
          title: "Electronics Appliances",
          children: "",
        },
        {
          id: 15,
          title: "Fast Food and Snacks",
          children: "",
        },
        {
          id: 16,
          title: "More Categories",
          children: "",
        },
      ],
    },
    {
      id: 5,
      title: "Book and Stationary",
      icon: {
        src: "/sidebar-icons/tv.png",
        width: 16,
        height: 12,
      },
      children: "",
    },
    {
      id: 6,
      title: "Electronics Appliances",
      icon: {
        src: "/sidebar-icons/mobile.png",
        width: 9,
        height: 16,
      },
      children: [
        {
          id: 9,
          title: "Laptop and Desktop",
          children: "",
        },
        {
          id: 10,
          title: "Home Living",
          children: "",
        },
        {
          id: 11,
          title: "Book and Stationary",
          children: [
            {
              id: 17,
              title: "Laptop and Desktop",
              children: "",
            },
            {
              id: 18,
              title: "Home Living",
              children: "",
            },
            {
              id: 19,
              title: "Book and Stationary",
              children: "",
            },
            {
              id: 20,
              title: "Home Appliances",
              children: "",
            },
          ],
        },
        {
          id: 12,
          title: "Home Appliances",
          children: "",
        },
        {
          id: 13,
          title: "Book and Stationary",
          children: "",
        },
        {
          id: 14,
          title: "Electronics Appliances",
          children: "",
        },
        {
          id: 15,
          title: "Fast Food and Snacks",
          children: "",
        },
        {
          id: 16,
          title: "More Categories",
          children: "",
        },
      ],
    },
    {
      id: 7,
      title: "Fast Food and Snacks",
      icon: {
        src: "/sidebar-icons/food.png",
        width: 15,
        height: 16,
      },
      children: "",
    },
    {
      id: 8,
      title: "More Categories",
      icon: {
        src: "/sidebar-icons/more.png",
        width: 13,
        height: 13,
      },
      children: "",
    },
  ];
  return (
    <div className="text-sm leading-6 text-dark bg-white rounded-6">
      {/* Parent Item  */}
        {items && items.map(item => (
             <div key={item.id} className={`${styles.item} px-5 py-3 py-4--2xl cursor-pointer ${styles.borderBottom} ${item.children && 'relative'}`}>
             <a href="#" className="flex items-center justify-between gap-10">
               <span className="flex gap-4 items-center">
                 <Image src={item.icon.src} width={item.icon.width} height={item.icon.height}  alt={item.icon.title} />
                 {item.title}
               </span>
               {item.children && <RightArrowIcon />  }
             </a>
             {/* child item start  */}
            
                
                <div className={`${styles.childItem}`}>
                <div className="text-sm leading-6 text-dark bg-white rounded-r-6">
                {item.children && (item.children.map(child => (
                  <div key={child.id} className={`px-5 py-3 py-4--2xl cursor-pointer ${styles.borderBottom} ${item.children && 'relative'} ${styles.item}`}>
                    <a href="#" className="flex items-center justify-between ">
                      <span className="flex gap-4 items-center">
                        {child.title}
                      </span>
                      {child.children && <RightArrowIcon /> }
                    </a>
                    {/* nested child item start  */}
                    <div  className={`${styles.childItem}`}>
                        <div className="text-sm leading-6 text-dark bg-white rounded-r-6">
                   {child.children && (
                    child.children.map(nestedItem => (
                        
                          <div key={nestedItem.id} className={`px-5 py-3 py-4--2xl cursor-pointer ${styles.borderBottom}`}>
                            <a href="#" className="flex items-center justify-between ">
                              <span className="flex gap-4 items-center">
                                {nestedItem.title}
                              </span>
                              {/* <RightArrowIcon /> */}
                            </a>
                          </div>
                           ))
                           )}
                        </div>
                      </div>
                   
                    {/* nested child item end  */}
                  </div>
                  
                ))
                )}
                </div>
              </div>
             {/* child ietm end  */}
           </div>
        ))}
      {/* paren item end  */}
    </div>
  );
};
