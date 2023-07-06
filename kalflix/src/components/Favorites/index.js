import Header from "../Header";
import Footer from "../Footer";
import Container from "../Container";
import styles from "./Favorites.module.css";

function Favorites() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.favorites}>
                    <h2>Meus Favoritos</h2>
                    Lista de Favoritos
                </section>
            </Container>
            <Footer />
        </>
    );
}

export default Favorites;