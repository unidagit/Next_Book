import React from "react";
import { ICategories, ICategoriesProps } from "../../lib/api";
import Loading from "../loading/Loading";
import styles from "./Categories.module.css";
import CategoryItem from "./CategoryItem";

function Categories({
  setSelect,
  categories,
  categoriesLoading,
  categoriesError,
  categoriesErrorMessage,
}: ICategoriesProps) {
  if (categoriesLoading) {
    return <Loading />;
  }

  if (categoriesError) {
    return <>Error:{categoriesErrorMessage}</>;
  }

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelect(e); //내가 클릭한 인자를 함수에 담아서 보냄
  };

  return (
    <div className={styles.categoriesContainer}>
      {categories &&
        categories.map((item: ICategories) => (
          <CategoryItem
            key={item.idCategory}
            category={item}
            onClickHandler={onClickHandler} //함수를 넘김
          />
        ))}
    </div>
  );
}

export default Categories;
