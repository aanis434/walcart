/**
 * @author Md Anisur Rahman
 * @function Categories
 **/
import styles from "./Categories.module.css";
import { CategoriesItem } from "./CategoriesItem";

export const Categories = ({ title, categories }) => {
  return (
    <div className={`container text-dark text-sm leading-6 mb-13`}>
      <h2 className={`${styles.title} `}>{title ?? "Categories"}</h2>
      <div className={`flex wrap gap-5 gap-y`}>
        {categories?.map((item) => (
            <CategoriesItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};
