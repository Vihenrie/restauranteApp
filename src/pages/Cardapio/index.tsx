import styles from './Cardapio.module.scss'
import logo from 'assets/logo.svg'

export default function Cardapio() {
    return(
        <main>
            <nav className={ styles.menu }>
                <img src={logo} alt="logo casa del taco" />
            </nav>
            <header className={ styles.header }>
                <div className={ styles.header__text }>
                    A casa del taco y del codigo
                </div>
            </header>
            <section>
                <h3>Cardápio</h3>
            </section>
        </main>
    );
}