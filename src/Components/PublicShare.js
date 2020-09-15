import React,{useEffect, useState} from 'react';
import logo from '../Image/tarentologo.png';
import '../App.css';
import './Style.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import * as API from '../constants/Api';
import {browserHistory} from 'react-router';
import Button from '@material-ui/core/Button';

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
  width:'6%', height: '30%', 
  textTransform: 'none',
  marginTop:'0.5%',
  marginBottom:'0.5%',
  marginLeft:'2%'
   },
},
);

  
function Publicshare(props) {
  
  const [caption, setCaption] = React.useState('');
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
    setCaption(response.data.CAPTION);
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
      <Button onClick={allPost} className={classes.button} style={{marginTop:'3%', marginLeft:'3%', float:'left'}}>Back</Button> 
      <div className = 'split1 center1'>
      <Card className={classes.root}>
        <CardActionArea>
          <img src={imageId} style={{width:"100%"}} alt="No content!"/>
            <CardContent>
              <img  src={logo} alt="tarento" style={{marginTop:'1%',marginBottom:'4%', width:'40%'}}/>
              <Typography gutterBottom variant="h6" style={{font: " Bold 20px  Roboto"}} >
                {caption}
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
        <Button onClick={prevPost} className={classes.button} style={{marginTop:'5%', marginLeft:'5%', float:'left'}}>
              {'<<<'}
          </Button>
        <Button onClick={nextPost} className={classes.button} style={{marginTop:'5%', marginRight:'5%', float:'right'}}>
              {'>>>'}
          </Button>
      </div>
    </div>
  </div>
  );
}

export default Publicshare;