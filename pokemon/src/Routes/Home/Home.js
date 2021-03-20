import '../../App.module.css';
import Header from "../../components/Header/Header";
import Layout from "../../components/Layout/Layout";
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import PictureBg from "../../img/bg1.jpg";
import data from '../../data.json';

function HomePage({onChangePage}) {

    const handleClickButton = (page) => {
        onChangePage && onChangePage(page)
    }

    return (
        <>
            <Header title='This is title!'
                    descr='This is description!'
                    onClickButton={handleClickButton}
            />
            <Layout title='Title' desc='Description' />
            <Layout urlBg={PictureBg} />
            <Layout colorBg='#e2e2e2'/>
            <div className='flex'>
                {
                    data.map(item => <PokemonCard
                        key={item.id}
                        img={item.img}
                        id={item.id}
                        values={item.values}
                        name={item.name}
                        type={item.type}
                    />)
                }
            </div>
            <Layout urlBg={PictureBg}>
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
                <p>
                    To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.
                </p>
            </Layout>
        </>
    );
}

export default HomePage;
