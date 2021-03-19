import HomePage from "./Routes/Home/Home";
import GamePage from "./Routes/Game/Game";
import {useRouteMatch, Route, Switch, Redirect} from "react-router-dom";
import MenuHeader from "./components/MenuHeader/MenuHeader";
import Footer from "./components/Footer/Footer";
import About from "./Routes/About/About";
import Contacts from "./Routes/Contacts/Contacts";
import styles from './App.module.css';
import cn from 'classnames'

const App = () =>{

    const match = useRouteMatch('/')

    return (
            <Switch>
                <Route path='/404' render={() => (
                    <h1>404 NOT FOUND</h1>
                )}/>
                <Route>
                    <>
                    <MenuHeader bgActive={!match.isExact}/>
                    <div className={cn(styles.wrap, {[styles.isHomePage]: match.isExact})}>
                    <Switch>
                    <Route path='/' exact component={HomePage}/>
                    <Route path='/home' component={HomePage}/>
                    <Route path='/game' component={GamePage}/>
                    <Route path='/about' render={About}/>
                    <Route path='/contact' render={Contacts}/>
                    <Route render={() =>(
                        <Redirect to='/404'/>
                    )} />
                    </Switch>
                    </div>
                    <Footer/>
                    </>
                </Route>
            </Switch>
    )
}

export default App