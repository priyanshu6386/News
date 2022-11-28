import React from 'react'
import {useState, useEffect } from 'react'
import axios from 'axios'
import { Container,Spinner } from 'react-bootstrap'
import {useParams} from 'react-router-dom'
const Pic =()=> {

    const [singlePhoto,setSinglePhoto] = useState({})
     const {id} =  useParams()
      

     useEffect(()=>{

       axios.get(`https://picsum.photos/id/${id}/info`)
      .then((res)=>setSinglePhoto(res.data))
      .catch((err)=>console.log(err))
     
     },[id])

  return (
   <>
      
      {Object.keys(singlePhoto).length ? (

     
     <Container>
     <img src = {singlePhoto.download_url} alt="enlarged-img" style=
     {{
         width:"100%", 
         height: "90vh" ,
         margin :"10px",
         boxShadow:" rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;",
         borderRadius: "15px"

        }}></img>
      
     </Container>
      ) : ( 
      <Spinner 
      animation="border" 
      role="status" 
      style={{margin: "200px auto" , display : 'block' }}>
     <span className="visually-hidden " >Loading...</span>
     </Spinner> 
     )}
        </>
  
  )
}

export default Pic