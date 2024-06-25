
// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import "./Recepie.css"

// function RecepiList() {
//     const route=useNavigate();
//     const location = useLocation();
//     const { data: newRecipe } = location.state || {};

//     console.log(location.state);
//   function handlclick({}){

//     route("/fullreecipe", { state: { data: newRecipe } });
  
//   }
//     return (
//         <div className='main_recipePage'>
//             <h1>Recipe List</h1>
//             {newRecipe ? (
//                 <div className='cont_recipePage'>
//                     <img src={newRecipe.img} alt={newRecipe.title} />
//                     <h2>Recipe Name: {newRecipe.title}</h2>
//                     <button onClick={handlclick}>go to full recipe</button>
//                     {/* <p><strong>Ingredient:</strong> {newRecipe.ingredient}</p> */}
//                     {/* <p><strong>Steps:</strong> {newRecipe.steps}</p> */}
//                 </div>
//             ) : (
//                 <p>No recipe details found.</p>
//             )}
//         </div>
//     );
// }

// export default RecepiList;

