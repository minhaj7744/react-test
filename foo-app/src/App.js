import './App.css';
import {Routes,Route} from "react-router-dom"
import {useState} from "react"
import Adddish from "./Newcomponents/Adddish"
import RecepieList from "./Newcomponents/RecepieList"
import ReciepiDetail from "./Newcomponents/ReciepiDetail"

function App() {

  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Adddish addRecipe={addRecipe}/>}/>
    <Route path="/recepielist" element={<RecepieList recipes={recipes}/>}/>
    <Route path="/recepiedetail/:id" element={<ReciepiDetail recipes={recipes}/>}/>

  

</Routes>
    </div>
  );
}

export default App;
