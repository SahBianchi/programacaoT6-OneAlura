import styles from './Rodape.module.css';
import logo from './logo.png'

function Rodape() {
    return(
        <footer className={styles.teste}>
            <div className={styles.rodape}>
                <img className={styles.img} src={logo} alt='logo AluraFlix'/>
            </div>
        </footer>

    )
}

export default Rodape;