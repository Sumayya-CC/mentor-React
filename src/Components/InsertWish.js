import React, {useState, useEffect } from 'react';

import axios from 'axios';

import * as API from '../constants/Api';



function WishCreation(props){

   
const[emailId,setEmailId]=useState();
const[sender,setSender]=useState();
const[recipient,setRecipient]=useState();
const[note,setNote]=useState();
const[imageId,setImageId]=useState();
const[shareId,setShareId]=useState();  

useEffect(() => { 
            const fetchData=async()=>{

                
                const response = await axios.post(API.GET_EXPENSE,JSON.stringify({
                    "emailID":emailId,
                    "sender":sender,
                    "recipient":recipient,
                    "note":note,
                    "imageId":imageId,
                }),{headers:{"Content-Type":"application/json"}});
                
                setShareId(response.data.shareId);
            };
            fetchData();});

return(
         
    <div>
        
        {/* <Cards items={items}/> */}
        </div>
    
   )
}
export default WishCreation;