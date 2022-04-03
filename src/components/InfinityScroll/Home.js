import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{display:"flex",width:"100vw",height:"100vh",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"40px"}}>
        <div>
            <Link to="/infinity-scroll">
               1. Infinity Scroll
            </Link><br/>
            <a href='https://github.com/sohel902833/node_PaginatedRestApi'>Backend Source Github Link</a>
            
        </div>

    </div>
  )
}

export default Home