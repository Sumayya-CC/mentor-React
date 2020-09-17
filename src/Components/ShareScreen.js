import React,{useEffect, useContext} from 'react';
import logo from '../Image/tarentologo.png';
import '../App.css';
import './Style.css';
import {InlineShareButtons} from 'sharethis-reactjs';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import * as API from '../constants/Api';
import  { useRef, useState } from 'react';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from "react-component-export-image";
import {browserHistory} from 'react-router';
import { UserContext } from './Context'; 

const useStyles = makeStyles({
    root: {
        width: '60%',
        marginLeft:'20%',
        marginRight:'20%',
        marginTop:'10%',
        minHeight:"65%"
       
      },
    button:{  
      //  align: 'center', 
      backgroundColor: "#004040", color:"#FFFFFF", 
      width:'25%', height: '20%', 
      textTransform: 'none',
      marginTop:'0.5%',
      marginBottom:'0.5%',
      marginLeft:'2%'
     },
     textField: {
      width: '60%',
      paddingTop: "0.5%",
      marginTop: "0.5%",
      marginLeft:'12.5%',
      color: "black",
      backgroundColor:'white',
      height:"3%",
      '& label.Mui-focused': {
          color: 'black',
          },
  },
  });

  
function ShareScreen(props) {
  
  
  const [caption, setCaption] = useState('');
  const [note, setNote] = useState('');
  const [sender, setSender] = useState('');
  const[imageId,setImageId]=useState();  
  const cardIm = useRef();
  const {login, setLogin, name, email} = useContext(UserContext);

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

  const deletePost = () => {
    console.log('deleting'+ props.params.shareId);
    axios.delete(API.DELETE_POST,{params:{shareId: props.params.shareId}});
    browserHistory.push("/Home/" + email + "/" + name)

  }

  const Home = () => {
    console.log('back');
    browserHistory.push("/Home/" + email + "/" + name);
  }

  const allPost = () => {
    console.log('back');
    browserHistory.push("/PublicView");
  }

  const  onClicklogout = () => {
    
    localStorage.clear();
    sessionStorage.clear(); 
    setLogin(false);
    console.log(login);
    browserHistory.push("/PublicView");
            
  };

  const classes = useStyles();

  let share= null;

  if(!login){
    browserHistory.push('http://localhost:3000/Tarento/Inspire/'+props.params.shareId);
    console.log('pls login');
  }else{
    share= (
      <div>
       
      <Button onClick={allPost} className={classes.button} style={{marginTop:'2%', marginLeft:'2%', float:'left', width:'6%'}}>View All Post</Button> 
      <Button name='sign-out'  className={classes.button} style={{float:'right',marginTop:'2%', marginRight:'2%', width:'6%'}} onClick = {onClicklogout}>Log out </Button>
      <div className = 'split1 center1'>
          
      
        <div style={{marginLeft:'11%', paddingTop:'3%'}}>
        <Button className={classes.button} onClick={deletePost}>Delete</Button>
          <Button className={classes.button} onClick={() => exportComponentAsJPEG(cardIm)}>Download</Button>
          <Button onClick={() =>  navigator.clipboard.writeText('http://localhost:3000/Tarento/Inspire/'+props.params.shareId)} className={classes.button}>Copy</Button> 
          {/* {copySuccess} */}
        </div>
      
      <Card className={classes.root} ref={cardIm}
      style={{marginTop:"5%", marginBottom:"2%",marginRight:'5%', minHeight:'300px', minWidth:'300px'}} >
        <CardActionArea style={{marginTop:'8%', marginLeft:'10%', marginBottom:'5%',marginRight:'10%',}}>
        <img  src={logo} alt="tarento" style={{width:'30%'}}/>
              <Typography gutterBottom variant="h6" align='justify' style={{marginTop:'4%',marginRight:'20%',marginTop:'4%',font: " Bold 18px  Roboto"}} >
                {caption}
              </Typography>
          <img src={imageId} style={{marginTop:'4%',width:"80%"}} alt="No content!"/>
            <CardContent>
              
              <Typography variant="body"  component="p" align="justify" style={{ marginRight:'16%', marginLeft:'-5%', font: " 14px  Roboto",}}>
                {note}
              </Typography>
              <Typography variant="h6" style={{float:"right", font: " Italic 16px Roboto ", marginTop:'4%', marginBottom:'4%',marginRight:'16%', marginLeft:'-5%' }}>
                - {sender}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card> 

        
    


    <div style={{paddingTop:'1.5%'}}></div>
    <InlineShareButtons
      config={{
        alignment: 'center',  // alignment of buttons (left, center, right)
        color: 'social',      // set the color of buttons (social, white)
        enabled: true,        // show/hide buttons (true, false)
        font_size: 16,        // font size for the buttons
        labels: 'cta',        // button labels (cta, counts, null)
        language: 'en',       // which language to use (see LANGUAGES)
        networks: [           // which networks to include (see SHARING NETWORKS)
          'whatsapp',
          'facebook',
          'linkedin',
          'twitter'
          
        ],
        padding: 10,          // padding within buttons (INTEGER)
        radius: 4,            // the corner radius on each button (INTEGER)
        show_total: false,
        size: 30,             // the size of each button (INTEGER)

        // OPTIONAL PARAMETERS
        url: 'https://www.tarento.com', // (defaults to current url)
        image: 'https://bit.ly/2CMhCMC',  // (defaults to og:image or twitter:image)
        description: 'custom text',       // (defaults to og:description or twitter:description)
        title: 'custom title',            // (defaults to og:title or twitter:title)
        message: 'custom email text',     // (only for email sharing)
        subject: 'custom email subject',  // (only for email sharing)
        username: 'custom twitter handle' // (only for twitter sharing)
      }}
    />
    
    
    </div>
    <Button onClick={Home} className={classes.button} style={{marginTop:'2%', marginLeft:'2%', float:'left', width:'6%', float:'right'}}>Add post</Button>
  </div>
    )
  }

  return (
    <div>
      {share}
    </div>
  );
}

export default ShareScreen;