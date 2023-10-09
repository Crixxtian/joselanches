import styles from './Cardapio.module.scss';
import logo from 'assets/logo.png';
import Buscador from './Buscador/index';
import { useState } from 'react';
import Filtros from './Filtros';

export default function Cardapio() {
    const [busca, setBusca] = useState("");
    return (
    <main>
        <br></br>
        <nav className={styles.menu}>
            <img className={styles.logo} src= {logo} alt="logo" />
        </nav>
        <header className={styles.header}> 
        </header>
        <section className={styles.cardapio}>
            <h3 className={styles.cardapio__titulo}>Cardapio</h3>
            <Buscador busca={busca} setBusca={setBusca} />

            <div className={styles.cardapio__filtros}>
            <Filtros/>
            </div>
        </section>
   
   </main>
    );
}