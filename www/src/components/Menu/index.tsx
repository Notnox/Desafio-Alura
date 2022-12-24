import { ReactComponent as Logo } from 'assets/img/logo.svg';
import styles from './Menu.module.scss';

const Menu = () => {
	return (
		<nav className={styles.nav}>
			<Logo />
			<div className={styles.nav__menu}>
				<a className={styles.nav__menu__link}>Como fazer</a>
				<label className={styles.nav__menu__divisor}>/</label>
				<a  className={styles.nav__menu__link}>Ofertas</a>
				<label className={styles.nav__menu__divisor}>/</label>
				<a  className={styles.nav__menu__link}>Depoimentos</a>
				<label className={styles.nav__menu__divisor}>/</label>
				<a  className={styles.nav__menu__link}>Vídeos</a>
				<label className={styles.nav__menu__divisor}>/</label>
				<a  className={styles.nav__menu__link}>Meu Carrinho</a>
			</div>
		</nav>
	);
};

export default Menu;