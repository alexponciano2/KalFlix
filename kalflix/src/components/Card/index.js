import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorites from "./favorite.png"
import iconUnFavorites from "./unfavorite.png"
import { useFavoriteContext } from "../../context/Favorites";

function Card({ id }) {

    // mudar cor do coração se estiver como favorito ou não
    const { favorite, addFavorite } = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id)
    const icone = isFavorite ? iconUnFavorites : iconFavorites
    // ----------------------------------------------------------
    
    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`} >
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                alt="Capa" className={styles.capa}/>
            </Link>
            <figure className={styles.icon}>
                <img
                    src={icone}
                    alt="Ícone"
                    onClick={() => addFavorite({ id })}
                    />
            </figure>
        </section>
    );
}

export default Card;
