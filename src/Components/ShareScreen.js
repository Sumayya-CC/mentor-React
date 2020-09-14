// import React, { useRef } from "react";
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from "react-component-export-image";
// import CardImage from './CardImage';


// function ShareScreen(props) {
//     const cardIm = useRef();
  
//     return (
//     <React.Fragment>
//         <CardImage shareId={props.params.shareId} ref={cardIm} />
        // <button onClick={() => exportComponentAsJPEG(cardIm)}>
        //     Export As JPEG
        // </button>
        // <button onClick={() => exportComponentAsPDF(cardIm)}>
        //     Export As PDF
        // </button>
        // <button onClick={() => exportComponentAsPNG(cardIm)}>
        //     Export As PNG
        // </button>
//     </React.Fragment>);
//   }
  
import React,{useEffect} from 'react';
import logo from '../Image/tarentologo.png';
import '../App.css';
import './Style.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img from '../Image/image.jpg';
import axios from 'axios';
import * as API from '../constants/Api';
import  { useRef, useState } from 'react';
// import { exportComponentAsJPEG } from "react-component-export-image";

const useStyles = makeStyles({
    root: {
      maxWidth: '70%',
      marginLeft:'15.5%',
      marginTop:'5%',
      height:"80%"
     
    },
  
  });

  
function ShareScreen(props) {
  
  
  const [recipient, setRecipient] = React.useState('');
  const [note, setNote] = React.useState('');
  const [sender, setSender] = React.useState('');
  const[imageId,setImageId]=useState();  
  const cardIm = useRef();

  
  useEffect(() => {
    
    
    const fetchData=async()=>{
      console.log(props.params.shareId);
    const response = await axios.get(API.RETRIEVE_WISH,{params:{shareId: props.params.shareId}});
    console.log(response.data.SENDER);
   setSender(response.data.SENDER);
    setNote(response.data.NOTE);
    setRecipient(response.data.RECIPIENT);
    setImageId(response.data.IMAGE_ID);
    //let creation_time =response.data.CREATION_TIME;
  

  
  };
  fetchData();});

  const classes = useStyles();
  return (
      // style:className=" split1 center1"
    <div className = 'split1 center1'>
      
       {/* <div className = "Space"> <img  src={logo} alt="cur" className="center"/></div>  */}
     <Card className={classes.root} ref={cardIm}>
      <CardActionArea>
        
         <img src={imageId} style={{width:"100%"}}/>
       
        <CardContent>
        <img  src={logo} alt="tarento" style={{marginTop:'1%',marginBottom:'2%', width:'35%'}}/>
          <Typography gutterBottom variant="h6" style={{font: " Bold 22px  Roboto"}} >
          Thank you {recipient} !
          </Typography>
          <Typography variant="body" color="textSecondary" component="p" align="justify" style={{font: " 18px  Roboto"}}>
          {note}
          </Typography>
          <Typography variant="h6" style={{float:"right", paddingTop: "5%", font: " Italic 20px Roboto " }}>
            - {sender}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> 
    <style dangerouslySetInnerHTML={{__html: `
      html, body {
        margin: 0;
        padding: 0;
        text-align: center;
      }
      h1 {
        font-size: 24px;
        font-weight: bold;
      }
      hr {
        margin-bottom: 40px;
        margin-top: 40px;
        width: 50%;
      }
    `}} /> 
<div>
      <div style={{paddingTop:'1%'}}></div>
      <button onClick={() => exportComponentAsJPEG(cardIm)}>
            Export As JPEG
        </button>
        <button onClick={() => exportComponentAsPDF(cardIm)}>
            Export As PDF
        </button>
        <button onClick={() => exportComponentAsPNG(cardIm)}>
            Export As PNG
        </button>
    </div>
    <div style={{paddingTop:'1.5%'}}></div>
    
  </div>
  );
}


  export default ShareScreen;
