import React, { useEffect } from 'react';
import Menu from 'components/Menu';
import styles from './PaginaInicio.module.scss';
import { ReactComponent as Elipse } from 'assets/img/ellipse.svg';
import { AiFillMail, AiOutlineArrowRight } from 'react-icons/ai';
import classNames from 'classnames';
import { useState } from 'react';
import { Plantas } from 'data/Plantas';
import { PassosParaComprar } from 'data/PassosParaComprar';
import { IPlanta } from 'styles/interfaces/IPlanta';
import { validateEmail } from 'utils/Email';


const PaginaInicio = () => {
	const [email, setEmail] = useState<string>('');
	const [emailValido, setEmailValido] = useState<boolean>(false);

	useEffect(() => {
		setEmailValido(validateEmail(email));
	}, [email])
	const passos: string[] = PassosParaComprar;
	const plantas: IPlanta[] = Plantas;

	const cadastrarEmail = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault();
		alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email}`);
		setEmail('');
	}
	return (
		<>
			<Menu />
			<form className={styles.form} onSubmit={cadastrarEmail}>
				<h3 className={styles.form__h3}>Sua casa com as</h3>
				<h1 className={styles.form__h1}>melhores plantas</h1>
				<h2 className={styles.form__h2}>
                    Encontre aqui uma vasta seleção de plantas para decorar a sua casa e 
                    torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail 
                    e assine nossa newsletter para saber das novidades da marca.
				</h2>
				<div className={styles.form__box}>
					<div  className={styles.form__box__submit}>
						<AiFillMail size={30}/>
						<input 
							required
							className={styles.form__box__submit__input} 
							placeholder='Insira seu e-mail'
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
					</div>
					<button 
						className={classNames({
							[styles['form__box__submit__botao--ativo']]: emailValido,
							[styles['form__box__submit__botao--desativado']]: !emailValido
						})}
						disabled={!emailValido}
					>
						Assine newsletter
					</button>
				</div>
			</form>
			<section className={styles.section}>
				<img 
					src='/assets/img/planta.png' 
					alt='Como conseguir'
					className={styles.section__imagem}
				/>
				<div className={styles.section__box}>
					<label className={styles.section__box__h3}>Como conseguir</label>
					<label className={styles.section__box__h2}>minha planta</label>
					{passos.map((passo, index) => (
						<div 
							key={index}
							className={styles.section__box__passo}
						>
							<Elipse />
							<label className={styles.section__box__passo__texto}>{passo}</label>
						</div>
					))}
				</div>
			</section>
			<section className={styles.ofertas}>
				<p className={styles.ofertas__h3}>Conheça nossas</p>
				<p className={styles.ofertas__h2}>Ofertas</p>
				<div className={styles.ofertas__box}>
					{plantas?.map(planta => (
						<div 
							key={planta.id}
							className={styles.ofertas__box__planta}
						>
							<img 
								src={planta.imagem} 
								alt={planta.nome}
								className={styles.ofertas__box__planta__imagem}
							/>
							<div className={styles.ofertas__box__planta__detalhes}>
								<p className={styles.ofertas__box__planta__detalhes__nome}>{planta.nome}</p>
								<p className={styles.ofertas__box__planta__detalhes__valor}>R$ {Number(planta.valor).toFixed(2)}</p>
								<a className={styles.ofertas__box__planta__detalhes__comprar}>
									Comprar
									<AiOutlineArrowRight size={15}/>
								</a>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default PaginaInicio;