import React,{useEffect, useState} from 'react';
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
import {browserHistory} from 'react-router';

const useStyles = makeStyles({
  root: {
    width: '50%',
    marginLeft:'25%',
    marginTop:'1%',
    height:"85%"
   
  },
  button:{  
    //  align: 'center', 
  backgroundColor: "#004040", color:"#FFFFFF", 
  width:'10%', height: '30%', 
  textTransform: 'none',
  marginTop:'0.5%',
  marginBottom:'0.5%',
  marginLeft:'2%'
   },
},
);

  
function Publicshare(props) {
  
  const [recipient, setRecipient] = React.useState('');
  const [note, setNote] = React.useState('');
  const [sender, setSender] = React.useState('');
  const[imageId,setImageId]=useState();
  
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

  const allPost = () => {
    console.log('back');
    browserHistory.push("/PublicView");
  }

  const nextPost = ()=>{
    console.log('next')
  }

  const prevPost = ()=>{
    console.log('previous')
  }


  const classes = useStyles();

  return (
    <div>
      <button onClick={allPost} className={classes.button} style={{marginTop:'5%', marginLeft:'5%', float:'left'}}>Back</button> 
      <div className = 'split1 center1'>
      <Card className={classes.root}>
        <CardActionArea>
          <img src={imageId} style={{width:"100%"}}/>
            <CardContent>
              <img  src={logo} alt="tarento" style={{marginTop:'1%',marginBottom:'4%', width:'40%'}}/>
              <Typography gutterBottom variant="h6" style={{font: " Bold 20px  Roboto"}} >
                Thank you {recipient}!
              </Typography>
              <Typography variant="body" color="textSecondary" component="p" align="justify" style={{font: " 16px  Roboto", paddingTop:'4%'}}>
                {note}
              </Typography>
              <Typography variant="h6" style={{float:"right", paddingTop: "4%", font: " Italic 18px Roboto " }}>
                - {sender}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card> 

        <div>
        <button onClick={prevPost} className={classes.button} style={{marginTop:'5%', marginLeft:'5%', float:'left'}}>
              {'<<<'}
          </button>
        <button onClick={nextPost} className={classes.button} style={{marginTop:'5%', marginRight:'5%', float:'right'}}>
              {'>>>'}
          </button>
      </div>
    </div>
  </div>
  );
}

export default Publicshare;