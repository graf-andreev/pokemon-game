import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyBxdsta1FcY3YX-HlXTf5z8IA9gMocttP0",
    authDomain: "pokemon-game-7897f.firebaseapp.com",
    databaseURL: "https://pokemon-game-7897f-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-7897f",
    storageBucket: "pokemon-game-7897f.appspot.com",
    messagingSenderId: "322085845430",
    appId: "1:322085845430:web:ba839d8273c6267a606917"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = firebase.database();

database.ref('pokemons').once('value', (snapshot) => {
    console.log(snapshot.val())
})

export default database