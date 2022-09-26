/**
 * @author Md Anisur Rahman
 * @function CategoriesItem
 **/
import Image from "next/image";
import styles from './CategoriesItem.module.css'

export const CategoriesItem = ({ item }) => {
  return (
    <>
      <a
        href="#"
        className={`flex gap-4 items-center justify-center grow shirnk-0 basis-25--xl ${styles.item}`}
      >
        <Image
          src={item?.image?.src}
          width={item?.image?.width}
          height={item?.image?.height}
          alt={item?.title}
        />
        {item?.title}
      </a>
    </>
  );
};
