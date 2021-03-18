import {useState} from 'react';
import HomePage from "./Routes/Home/Home";
import GamePage from "./Routes/Game/Game"; ;

const App = () => {
    const [page, setPage] = useState('app');

    const handleChangePage = (page) => {
        setPage(page)
    }

    switch (page) {
        case "app":
            return <HomePage onChangePage={handleChangePage}/>
        case "game":
            return <GamePage onChangePage={handleChangePage}/>
        default:
            return <HomePage onChangePage={handleChangePage}/>
    }
}

export default App