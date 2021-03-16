import React, {useState} from "react";
import styles from './PokemonCard.module.css';
import backImg from '../../img/card-back-side.jpg';
import cn from 'classnames';

const PokemonCard = ({img, values, name, id, type}) => {

    const [isOpen, setIsOpen] = useState(false)

    const handlerRotateCard = () => {
        setIsOpen(!isOpen)
    }


    return(
            <div className={styles.root}>
                  <div onClick={handlerRotateCard} className={cn(styles.pokemonCard, {[styles.active] : isOpen}) }>
                    <div className={styles.cardFront}>
                        <div className={cn(styles.wrap, styles.front)}>
                            <div className={cn(styles.pokemon, styles[type])}>
                                <div className={styles.values}>
                                    <div className={cn(styles.count, styles.top)}>{values.top}</div>
                                    <div className={cn(styles.count, styles.right)}>{values.right}</div>
                                    <div className={cn(styles.count, styles.bottom)}>{values.bottom}</div>
                                    <div className={cn(styles.count, styles.left)}>{values.left}</div>
                                </div>
                                <div className={styles.imgContainer}>
                                    <img src={img} alt={name} />
                                </div>
                                <div className={styles.info}>
                                    <span className={styles.number}>{id}</span>
                                    <h3 className={styles.name}>{name}</h3>
                                    <small className={styles.type}>Type: <span>{type}</span></small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cardBack}>
                        <div className={cn(styles.wrap, styles.back)}>
                            <img src={backImg} alt="Сard Backed" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default PokemonCard