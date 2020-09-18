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
    width: '60%',
    marginLeft:'20%',
    marginTop:'10%',
    minHeight:"65%"
   
  },
  button:{  
    //  align: 'center', 
  backgroundColor: "#004040", color:"#FFFFFF", 
  width:'6%', 
  height: '30%', 
  textTransform: 'none',
  marginTop:'0.5%',
  marginBottom:'0.5%',
  marginLeft:'2%',
  '&:hover': {
    backgroundColor: '#004040',
    borderColor: '#0062cc',
    },
    '&:active': {
    boxShadow: 'none',
    backgroundColor: '#004040',
    borderColor: '#005cbf',
    
    },
    '&:focus': {
    boxShadow: '#004040',
    },
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
      <u onClick={allPost} style={{color:'#004040' ,marginTop:'3%', marginLeft:'3%', float:'left'}}>View All Post</u> 
      <img src={imageId} alt='img' style={{width:'80%', opacity:'0.8'}}/>
      <div className = 'split1 center1'>
      <div>
        <Button onClick={prevPost} className={classes.button} style={{marginTop:'60%', marginLeft:'5%', float:'left', height:'20%'}}>
              {'<'}
          </Button>
        <Button onClick={nextPost} className={classes.button} style={{marginTop:'60%', marginRight:'5%', float:'right'}}>
              {'>'}
          </Button>
      </div>
      <Card className={classes.root} style={{marginTop:"10%", marginBottom:"2%",marginRight:'2%', minHeight:'300px', minWidth:'300px'}}>
        <CardActionArea style={{marginTop:'8%', marginLeft:'10%', marginBottom:'5%',marginRight:'10%',}}>
        <img  src={logo} alt="tarento" style={{width:'35%'}}/>
              <Typography gutterBottom variant="h6" style={{marginTop:'4%',marginRight:'20%',font: " Bold 20px  Roboto"}} >
                {caption}
              </Typography>
          <img src={imageId} style={{marginTop:'4%',width:"80%"}} alt="No content!"/>
            <CardContent>
              
              <Typography variant="body"  component="p" align="justify" style={{ marginRight:'16%', marginLeft:'-5%', font: " 16px  Roboto",}}>
                {note}
              </Typography>
              <Typography variant="h6" style={{float:"right", font: " Italic Bold 20px Roboto ", marginTop:'4%', marginBottom:'4%',marginRight:'16%', marginLeft:'-5%' }}>
                - {sender}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card> 

        
    </div>
  </div>
  );
}

export default Publicshare;