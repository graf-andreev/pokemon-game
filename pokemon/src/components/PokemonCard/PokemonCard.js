import CardBackSide from '../../img/card-back-side.jpg';
import cn from 'classnames';
import styles from './PokemonCard.module.css';

const PokemonCard = ({keyId, name, img, id, type, values, isActive, handleClickPokemon}) => {
    const handleClick = () =>{
        handleClickPokemon(id, keyId);
    };
    return (
        <div className={styles.root} onClick={handleClick}>
            <div className={cn(styles.pokemonCard, {[styles.active]: isActive})}>
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
                            <div className="info">
                                <span className={styles.number}>#{id}</span>
                                <h3 className={styles.name}>{name}</h3>
                                <small className={styles.type}>
                                    Type:
                                    <span>{type}</span>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.cardBack}>
                    <div className={cn(styles.wrap, styles.back)}>
                        <img src={CardBackSide} alt="Сard Backed" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;