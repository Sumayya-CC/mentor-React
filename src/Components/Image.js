import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import image from '../Image/image.jpg';
import imagea from '../Image/imagea.jpg';
import imageb from '../Image/imageb.jpg';
import imagec from '../Image/imagec.jpg';
import imaged from '../Image/imaged.jpg';
import imagee from '../Image/imagee.jpg';
import imagef from '../Image/imagef.jpg';
import imageg from '../Image/imageg.jpg';
import imageh from '../Image/imageh.jpg';
import { Typography, Button } from '@material-ui/core';
import mail from '../Image/mail.png';
import Upload from './Upload';
import './Style.css';
import logo from '../Image/tarentologo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft:"10%",
    marginRight:"10%",
    marginTop:"3%",
    backgroundColor: theme.palette.background.paper,
  },
  
  gridList:{
    width:"100%",
  },
  gridListTile: {
    marginLeft:"1%",
    marginRight:"1%",
    
    marginBottom:"1%",
    marginTop:"1%",

  
  },
  header:{
    marginTop:"8%",marginLeft:"11%",
  },
  title:{
    marginLeft:"11%",
    marginTop:"3%",
    marginBottom:"-2%",
    font: " 12px  Roboto",
  },

  icon:{
    width:"4%",
 
  },
}));


export default function ImageGridList(props) {

  const classes = useStyles();
  const tileData = [{img:image}, {img:imagea},{img:imageb}, {img:imagec},{img:imaged}, {img:imagee},{img:imagef}, {img:imageg},
     ];


     const onImageClick = (tile) => {
        console.log(tile);
        props.onPassImage(tile);
    };

 console.log(tileData);

  return (
    <div>
      
    <div className={classes.header}>
    <img  src={logo} alt="Tarento" style={{width:'18%', marginTop:'-5%', marginBottom:'2%'}}/>
    <br/>
           <img src={mail} className={classes.icon} style={{marginBottom:'-0.7%'}}/>
           <span style={{marginLeft:"1%",font: " Bold 18px Roboto "}}> Share your memories with your colleagues</span> </div>
      <Typography variant='body1' className={classes.title}> Choose a photo or upload your photo, write your message. Post!</Typography>
    <div className={classes.root}>
      <GridList cellHeight={150}className={classes.gridList} cols={4}>
      <GridListTile  className={classes.gridListTile} cols={1}>
          <Button style={{backgroundColor: "#004040", color:"#FFFFFF",textTransform: 'none',height:'100%'}}
          fullWidth='true'>
          <Upload onUploadImage={props.onUploadImage}/>
          </Button>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile  className={classes.gridListTile} cols={1}>
            <img src={tile.img} onClick={() =>onImageClick(tile)}  />
          </GridListTile>
        ))}
        
      </GridList>
    </div>
    </div>
  );
}
