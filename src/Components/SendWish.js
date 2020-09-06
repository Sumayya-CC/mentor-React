import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

import * as API from '../constants/Api';



function WishRetrieval(props){
  

  useEffect(() => {
    
    
    const fetchData=async()=>{

    const response = await axios.get(props.api,{params:{shareId: props.message}});
    
    let sender= response.data.SENDER;
    let note =response.data.NOTE;
    let recipient =response.data.RECIPIENT;
    let imageId =response.data.IMAGE_ID;
    let creation_time =response.data.CREATION_TIME;
  

  
  };
  fetchData();});

    
     return(
      <Grid>
       
            </Grid>
      );
    
};
export default WishRetrieval;  