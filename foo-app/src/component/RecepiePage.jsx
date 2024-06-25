
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "./Recepie.css"

// function RecepiePage() {
//     const navigate = useNavigate();
//     const [title, setTitle] = useState("");
//     // const [ingredient, setIngredient] = useState("");
//     // const [steps, setSteps] = useState("");
//     const [img, setImg] = useState(null);

//     function handleChange(e) {
//         setImg(URL.createObjectURL(e.target.files[0]));
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         const newRecipe = { title, img };

//         console.log(newRecipe, "newRecipe");
//         navigate("/recepielist", { state: { data: newRecipe } });
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="title"
//                     placeholder="Title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <br />
//                 {/* <textarea
//                     name="ingredient"
//                     placeholder="Ingredient"
//                     value={ingredient}
//                     onChange={(e) => setIngredient(e.target.value)}
//                 />
//                 <br /> */}
//                 {/* <textarea
//                     name="steps"
//                     placeholder="Steps"
//                     value={steps}
//                     onChange={(e) => setSteps(e.target.value)}
//                 /> */}
//                 <br />
//                 <input type="file" onChange={handleChange} required />
//                 <br />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default RecepiePage;




























