import videos from "../../json/db.json";
import styles from "./Category.module.css";

export const categories = [
    "INTRODUÇÃO",
    "Melhor do Ano!",
    "2007 a 2009",
    "2010 a 2016",
    "2022 até agora (BOPE)"
  ]

export function filterCategory(id) {
    return videos.filter( video => video.category === categories[id] )
}

function Category({ category, children }) {
    return (
        <section className={styles.category}>
            <h2>{category}</h2>
            <div>
                { children }
            </div>
        </section>
    );
}

export default Category;
