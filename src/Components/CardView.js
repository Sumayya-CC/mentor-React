import React,{useEffect, useState} from 'react';
import logo from '../Image/tarentologo.png';
import '../App.css';
import './Style.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import axios from 'axios';
import * as API from '../constants/Api';
import {browserHistory} from 'react-router';
import Button from '@material-ui/core/Button';
import tarentologo from '../Image/tarentologo.png';
import './Style.css';

const useStyles = makeStyles({
  root: {
    width: '50%',
    marginLeft:'25%',
    marginTop:'1%',
    height:"50%"
   
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

  
function Cardview(props) {
  
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
      <div className = 'split1 center2'>
        <Card  style={{marginTop:"8%", marginBottom:"1%",marginRight:'1%', minHeight:'500px', minWidth:'500px'}} className={classes.root}>
            <img src={tarentologo} width="20%"  style={{marginLeft:'5%', marginTop:'4%'}}/>  
            <div>
                <div class="card-container">
                    <div style={{marginLeft:'4%',}}>
                        <img src={imageId} width="300" minHeight="300" style={{marginTop:'5%'}} />
                        <h2 style={{color:"#004040",marginTop:'2%', float:'left', textAlign:'center', fontFamily:'Roboto'}}>
                            {caption}</h2>
                    </div>
                    <div style={{textAlign:'justify',paddingLeft:'4%', paddingRight:'4%', font:' 17px Roboto',marginTop:'2%' }}>
                        {note}          
                        <div style={{float:'right', fontSize:'30', font:'Bold 19px Roboto', marginTop:'12%'}}>
                            {sender}
                        </div>
                    </div>
                </div>
            </div>                
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
export default Cardview;