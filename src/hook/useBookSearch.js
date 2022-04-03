import React,{useEffect,useState}from 'react'
import axios from 'axios'
import { calculateNewValue } from '@testing-library/user-event/dist/utils';
const useBookSearch = (query,pageNumber) => {
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    const [books,setBooks]=useState([])
    const [hasMore,setHasMore]=useState(false);

    useEffect(()=>{
        setBooks([])
    },[query])

    useEffect(()=>{
        setLoading(true);
        setError(false);

        let cancel;
        setTimeout(()=>{
  axios({
            method:"GET",
            url:"http://www.localhost:5000/users",
            params:{page:pageNumber,limit:7},
            cancelToken:new axios.CancelToken(c=>cancel=c)
        }).then(res=>{
            setBooks(prevState=>{
                return [...new Set([...prevState,...res.data.results])]
            })
            setHasMore(res?.data?.next?true:false)
            setLoading(false)
        }).catch(err=>{

            if(axios.isCancel(err)) return
            setError(true)
            setLoading(false)
        })
        return ()=>cancel();
        },1000)
      
    },[query,pageNumber])
   
  return {loading,error,books,hasMore}
}

export default useBookSearch