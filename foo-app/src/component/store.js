// import React, { useState } from 'react'

// function AddrecipePage() {

//     // const[recepietitle,setRecepietitle]=useState("")
//     // const[recepieingredent,setRecepieingredent]=useState("")
//     // const[recepiesteps,setRecepiesteps]=useState("")

//     const[recepie,setRecepie]=useState({title:"", ingredent:"", steps:"",})
//     console.log(recepie,"recepie")

//     function handlinput(e){
//         setRecepie({...recepie,[e.target.name] :e.target.value})
//     }
//     function handlesubmit(e){
//        e.preventDefault();
//     }

    
//   return (
//     <div>
//     <form action="" onSubmit={handlesubmit}>
//      <input onChange={handlinput}  value={recepie.title} type="text" name="title"/><br/>
//      <input  onChange={handlinput} value={recepie.ingredent} type="text" name='ingredent'/><br/>
//      <input  onChange={handlinput} value={recepie.steps} type="text" name='steps'/>
//      <button>submit</button>
//      </form>

//     </div>
//   )
// }

// export default AddrecipePage