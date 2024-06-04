// We use JSON server to make fake Rest API for take json data from our db.json 
// like a database 
//npx json-server --watch data/dj.json --port 8000 to start our json server we change port 
import Card from "./Card";
import useFetch from "./useFetch";

const Home = () => {
  const {data:blogs, isLoading, error}= useFetch('http://localhost:8000/blogs/')
  return (
    <div className="home">
    {error && <div>{error}</div>}
    {isLoading && <div>Loading...</div>}
    {blogs && <Card blogs={blogs}/>}
    </div>
  );
}
 
export default Home;
