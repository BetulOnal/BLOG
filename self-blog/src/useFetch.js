import { useState,useEffect } from "react"

function useFetch(url){
  const [data, setData] = useState(null)
  const[isLoading, setIsLoading]= useState(true)
  const[error, setError]= useState(null)

  const abortCont= new AbortController();


  useEffect(() => {
    fetch(url,{signal:abortCont.signal})
      .then(res => {
        console.log(res)
        if (!res.ok){
          throw new Error("Server Error "+ res.status)
        }
        return res.json()
      
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
        setError(null)
      })
      .catch(err => {
        if (err.name=== "AbortError"){
          console.log(err.name)
        }else{
          setIsLoading(false)
          setError(err.message)
        }        
      })
      return ()=> abortCont.abort();
  }, [url])
  //that's mean when url passing useEffect is activing
  return {data, isLoading,error}
}

export default useFetch;