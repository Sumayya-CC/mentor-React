import React,{useState, useContext}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import tarentologo1 from '../Image/tarentologo.png';
import axios from 'axios';
import * as API from '../constants/Api';
import {browserHistory} from 'react-router';
import Button from '@material-ui/core/Button';
import { UserContext } from './Context';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginLeft:"5%",
    //marginRight:"5%"
  },
  button:{  
    //  align: 'center', 
    backgroundColor: "#004040", color:"#FFFFFF", 
    width:'8%', height: '6%', 
    textTransform: 'none',
    // marginTop:'2%',
    // marginBottom:'0.5%',
    // marginRight:'2%'
   },
  gridList: {
    paddingTop:"1%",
    marginLeft:"5%",
    fullWidth : true,
    //width: 1000,
    fullHeight:true,
    wdth:"5%",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));



export default function AllPost(props) {
  const classes = useStyles();
  const [tileData, setTileData] = React.useState([]);
  const {login, name, email} = useContext(UserContext);
  
  const loginClick = () =>{
    console.log('login')
    browserHistory.push("/Login");
  }


  const handleClickPost =(tile)=>{
    console.log(tile);
    browserHistory.push("/Tarento/Inspire/"+tile.SHARE_ID)

  }


  React.useEffect(() => {
    
    
    const fetchData=async()=>{
    const response = await axios.get(API.ALL_POST);
    console.log(response)
    const data= response.data;
    setTileData(data.reverse());
    console.log(tileData);
    
  

  
  };
  fetchData();});

  let button= null;

  if(!login){
    button = (
      <Button style={{float:'right' , marginRight:'3%',}} className={classes.button} onClick={loginClick}>
        Login</Button>
    )
  }else{
    const addPost = () =>{
      console.log('add post')
      console.log(email)
      browserHistory.push("/Home/" + email + "/" + name);
  }
    button=(
    <Button style={{float:'right' , marginRight:'3%',}} className={classes.button} onClick={addPost}>
      Add Post</Button>
    )
  }


  return (
    <div className={classes.root}>
      <GridList  spacing={10} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <img style={{width:"10%", marginTop:'3%', marginBottom:'-4%'}} src={tarentologo1}/>
          <ListSubheader component="div" style={{color:"#004040",fontSize:'250%',textAlign:'center',
          paddingBottom:"1%"}}>Happy Anniversary Tarento!!
          {button}
          </ListSubheader>
          
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile style={{minWidth:'300px',width:'25%',paddingTop:"3%",paddingRight:"3%",minHeight: '300px', flexDirection:'row-reverse' }} key={tile.img}>
            <img src={tile.IMAGE_ID} alt={'Thank you Tarento!'} onClick={()=>handleClickPost(tile)} />
            <GridListTileBar
              title={tile.CAPTION}
              subtitle={<span>by: {tile.SENDER}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
