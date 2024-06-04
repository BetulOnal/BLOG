import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const {articleId}=useParams();
    const{data:blog, isLoading,error}= useFetch('http://localhost:8000/blogs/'+ articleId )
    //article id must be match path="/blogs/:articleId" path name 
    // const{id}= usePrams() ===>>> path="/blogs/:id" 

    return ( 
        <div className="blog-details">
            {isLoading && <div>Loading</div>}
            {error && <div> {error}</div> }
            {blog && 
            <article>
                <h2> {blog.title}</h2>
                <p>Writter by {blog.authot}</p>
                <div> {blog.body}</div>
                </article>}
            
            
        </div>
     );
}
 
export default BlogDetails;