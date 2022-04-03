import React,{useRef,useCallback} from "react";
import useBookSearch from '../../hook/useBookSearch'

const InfinityScroll = () => {

    const [query,setQuery]=React.useState("");
  const [pageNumber,setPageNumber]=React.useState(1);
   const {loading,error,books,hasMore}=useBookSearch(query,pageNumber);

  const observer=useRef(null);
  const lastBookElementRef=useCallback(node=>{
    if(loading) return 
    if(observer.current) observer.current.disconnect()
    observer.current=new IntersectionObserver(entries=>{
        if(entries[0].isIntersecting && hasMore){
          setPageNumber(prevPage=>prevPage+1)
          console.log("calling")
        }
    })
     if(node) observer.current.observe(node)
  },[loading,hasMore])

  return (
    <div className="App">
     <input 
      style={{width:"100%",height:"50px",fontSize:"25px"}}
      value={query}
      onChange={e=>{setQuery(e.target.value);setPageNumber(1)}} 
      type="text"/>
      {
        books?.map((b,index)=>{
          if(books.length-2===index+1){
            return <div ref={lastBookElementRef} key={index}>
               <h2 style={{fontSize:"60px",color:"red"}}>{b.name}</h2>
               <h2 style={{fontSize:"25px"}}>{b.desc}</h2>
            </div>
          }else{
            return <div key={index}> 
               <h2 style={{fontSize:"60px"}}>{b.name}</h2>
               <h2 style={{fontSize:"25px"}}>{b.desc}</h2>
              </div>
          }
           
        })
      }
      {
        loading &&  <div>Loading....</div>
      }{
        error && <div style={{color:"red"}}>Error</div>
      }
    
    
    </div>
  );
}

export default InfinityScroll