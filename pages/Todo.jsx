
import { Button } from "@mui/material"
import { useRef, useState, useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
 
import { useNavigate } from "react-router-dom";




const auth = getAuth();

function Todo() {


  const navigate = useNavigate()
  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const uid = user.uid;
        console.log(uid);
        
       console.log(uid)
      } else {
        console.log("user is not logged in!");
        navigate("/")
        alert("please login your account")  
        
      }
    });
   
  }, [])
  





const input = useRef()
const [todo,  setTodo] = useState([])

const addTodo = async (event)=>{ 
 event.preventDefault()
  console.log(input.current.value);


  todo.push(input.current.value);
  setTodo([...todo])
  input.current.value =" ";  
  
}

const deleteTodo = (index)=>{
  todo.splice(index,1)
  setTodo([...todo])

}
const editTodo = (index)=>{
  const edit = prompt("Please enter your todo")
  todo.splice(index,1,edit)
  setTodo([...todo])


}




return(
<>
<div className="todo">
  <form onSubmit={addTodo}>
    <input type="text" placeholder="Enter your item" ref={input}/>
    <Button type="submit" className="todobtn" variant="contained" sx={{marginLeft: "10px"}}>Add Todo</Button>
  </form>
  <ol className="ol">
    {todo.length > 0? todo.map( (item , index)=>{
      return <li  style={{marginTop: '20px', fontSize: "20px"}} className="li" key={index}> {item} 
      
      <div style={{marginTop: "20px"}}>
      
      <Button   onClick={()=> deleteTodo(index)} className="edbtn" variant="contained" sx={{backgroundColor: "red"}}>Delete</Button>
      
    
      <Button onClick={()=> editTodo(index)} className="edbtn" variant="contained" sx={{backgroundColor: "blue", marginLeft:"10px"}}>Edit</Button>
      </div>


      </li>
      
    }): <h1>No item found...</h1> }
  </ol>
</div>

</>


)





}

export default Todo

