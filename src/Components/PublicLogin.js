import React, {useState,useEffect, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import tarentologo from '../Image/tarentologo.png';
import imgaec from '../Image/imagec.jpg';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import * as API from '../constants/Api';
import {browserHistory} from 'react-router';
import { UserContext } from './Context';

const useStyles = makeStyles((theme) => ({
  root: {
    
    width:500,
    height:350,
    marginLeft:5,
    marginBottom:5
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  card:{
    height:100,
    width:200,
  },
}));

export default function PublicLogin() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [tileData, setTileData] = React.useState([]);
  const {login, name, email} = useContext(UserContext);
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const fetchData=async()=>{
    const response = await axios.get(API.ALL_POST);
    console.log(response)
    const data= response.data;
    setTileData(data.reverse());
    console.log(tileData);
  };
  fetchData();});


  return (
    <div>
      <img src={tarentologo}/>

      {/* {tileData.slice(0, 2).map((tile) => (
          {tileData.slice(2, ).map((tile) => ( */}

          
          <Grid container spacing={12}>
      <Grid>
      <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imgaec}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         Tagline
        </Typography>
        <Typography>Name</Typography>
      </CardContent>
    </Card>
      </Grid>
      <Grid><Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imgaec}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         Tagline
        </Typography>
        <Typography>Name</Typography>
      </CardContent>
    </Card></Grid>
    <Grid><Card className={classes.root}>
      <CardContent style={{backgroundColor:"#209192"}}>
      <form className={classes.root} noValidate autoComplete="off" style={{marginLeft:'10%',marginTop:'10%'}}  >
        <div><TextField id="standard-basic" label="Username" style={{width:'70%',color:"#ffffff",backgroundColor:"#ffffff"}}/></div>
      <div><TextField varient="contained" id="standard-basic" label="Password" style={{width:'70%',marginTop:'5%',backgroundColor:"#ffffff"}}/></div>
      <div>
      <Button variant="contained" 
                    type="submit"
                    style={{backgroundColor: "#004040", width:"70%", height: 35,fontSize:'18px',textTransform:'none', color:"#FFFFFF",marginTop:'10%'}}>
                            Login
                        </Button>
      </div>
    </form>
      </CardContent>
    </Card></Grid>
    
    </Grid>
    <Grid container spacing={12}>
      <Grid>
      <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imgaec}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         Tagline
        </Typography>
        <Typography>Name</Typography>
      </CardContent>
    </Card>
      </Grid>
      <Grid>
      <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imgaec}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         Tagline
        </Typography>
        <Typography>Name</Typography>
      </CardContent>
    </Card>
      </Grid>
      <Grid>
      <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={imgaec}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         Tagline
        </Typography>
        <Typography>Name</Typography>
      </CardContent>
    </Card>
      </Grid>
    </Grid>
    </div>
  );
}