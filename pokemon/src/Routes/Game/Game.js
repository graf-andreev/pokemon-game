import {useState, useEffect} from 'react';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import s from './Game.module.css';
import database from "../../service/firebase";

const GamePage = () =>{

    const [pokemons, setPokemons] = useState({});

    useEffect( () => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val())
        })
    }, []);

    const handleClickPokemon = (e) => {
        const result = Object.entries(pokemons).map(item => {
            if (item[1].id === e)
                item[1]["active"] = true;
            return { ...item[1], active: item[1].active }});
        setPokemons(result);
    };
    return (
        <div className={s.root}>
            <div className="flex">
                {
                    Object.entries(pokemons).map(item => <PokemonCard
                        key={item[1].name}
                        name={item[1].name}
                        img={item[1].img}
                        id={item[1].id}
                        type={item[1].type}
                        values={item[1].values}
                        isActive={item[1].active}
                        handleClickPokemon={handleClickPokemon}
                    />)
                }
            </div>
        </div>
    );
};

export default GamePage;