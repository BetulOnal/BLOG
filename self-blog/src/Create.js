import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
   const [title, setTitle]= useState("");
   const [body, setBody]= useState("");
   const [author, setAuthor]= useState("");
   const[isPending, setPending]= useState(false);
   const history= useHistory();

   const handleInfo = (e)=>{
      e.preventDefault();
      setPending(true)
      const blog={title,body,author}
      fetch('http://localhost:8000/blogs', {
         method:"POST",
         headers:{"Content-type":"application/json"},
         body: JSON.stringify(blog)
      }).then( ()=>{
         console.log("New post added")
         setPending(false)
         history.push("/")
      })
   }


    return ( 
        <div className="create">
           <h2>Add a New Blog</h2>
          <form onSubmit={handleInfo}>
            <label>Blog Title</label>
            <input type="text" required
             value={title}
             onChange={(e)=> setTitle(e.target.value)}
             ></input>

            <label>Blog Body </label>
            <textarea required
            value={body}
            onChange={e=> setBody(e.target.value)}></textarea>

             <label> Blog Author</label>
             <select
             value={author}
             onChange={e=> setAuthor(e.target.value)}>
               <option value="Mario"> Mario</option>
               <option value="Yoshi"> Yoshi</option>
             </select>
            {!isPending && <button>Add Blog </button>} 
            {isPending && <button disabled>Loading</button>}
         </form>

        </div>
     );
}
 
export default Create;