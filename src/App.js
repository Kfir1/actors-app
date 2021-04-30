// import logo from './logo.svg';
import './App.css'; 
import ActorModel from './components/ActorModel'; //ctrl spacebar for auto complete intellisence   import from ActorModel component
import Gallery from './components/Gallery';  // ctrl spacebar for auto complete intellisence     import from Gallery component
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const actorsArray = [
    {
        "fName": "Tom",
        "lName": "Hanks",
        "bday": "1956-07-09",
        "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg",
        "imdbLink": "https://www.imdb.com/name/nm0000158"
    },
    {
        "fName": "Tom",
        "lName": "Cruise",
        "bday": "1962-07-03",
        "imgUrl": "https://m.media-amazon.com/images/M/MV5BMTk1MjM3NTU5M15BMl5BanBnXkFtZTcwMTMyMjAyMg@@._V1_UY317_CR14,0,214,317_AL_.jpg",
        "imdbLink": "https://www.imdb.com/name/nm0000129"
    },
    {
        "fName": "Jennifer",
        "lName": "Lawrence",
        "bday": "1990-08-15",
        "imgUrl": "https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX214_CR0,0,214,317_AL_.jpg",
        "imdbLink": "https://www.imdb.com/name/nm2225369"
    },
    {
      "fName": "Jennifer",
      "lName": "Lawrence",
      "bday": "1990-08-15",
      "imgUrl": "https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX214_CR0,0,214,317_AL_.jpg",
      "imdbLink": "https://www.imdb.com/name/nm2225369"
    },
    {
      "fName": "Jennifer",
      "lName": "Lawrence",
      "bday": "1990-08-15",
      "imgUrl": "https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX214_CR0,0,214,317_AL_.jpg",
      "imdbLink": "https://www.imdb.com/name/nm2225369"
    },
    {
      "fName": "Jennifer",
      "lName": "Lawrence",
      "bday": "1990-08-15",
      "imgUrl": "https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX214_CR0,0,214,317_AL_.jpg",
      "imdbLink": "https://www.imdb.com/name/nm2225369"
    },
    {
      "fName": "Jennifer",
      "lName": "Lawrence",
      "bday": "1990-08-15",
      "imgUrl": "https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX214_CR0,0,214,317_AL_.jpg",
      "imdbLink": "https://www.imdb.com/name/nm2225369"
    },
    {
      "fName": "Jennifer",
      "lName": "Lawrence",
      "bday": "1990-08-15",
      "imgUrl": "https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_UX214_CR0,0,214,317_AL_.jpg",
      "imdbLink": "https://www.imdb.com/name/nm2225369"
    },
]
// see time of this moment from method moment();
// const now = moment();
// console.log(now);
const actorsList = actorsArray.map((actor) => new ActorModel(actor.fName, actor.lName, actor.bday, actor.imgUrl, actor.imdbLink))
  return (
    <div className="App">
      <Gallery listOfActors={actorsList} />  
    </div>
  );
}

export default App;

