import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Style.css';
import image from '../Image/imageg.jpg'
import logo from '../Image/tarentologo.png';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import * as API from '../constants/Api';
import {browserHistory} from 'react-router';

//Adding js styles
const useStyles = makeStyles((theme) => ({
        textField: {
            marginRight: theme.spacing.unit,
            // width: 350,
            paddingTop: "1%",
            // paddingLeft:'1%',
            marginTop: "1%",
            marginLeft:'0%',
            color: "black",
            // minHeight: '40%', 
            background:'#F2F2F2',
            
            '& label.Mui-focused': {
            color: 'black',
            },
            '& .MuiInput-underline:after': {
            borderBottomColor: '#F2F2F2',
            },
            '& .MuiInput-underline:before': {
            borderBottomColor: '#F2F2F2',
            },
            
            '&.Mui-focused fieldset': {
            borderColor: '#F2F2F2',
            },
            '&& .MuiInput-root:hover::before': {
            borderColor: '#F2F2F2',
            } 
            },

            button:{align: 'center',
             backgroundColor: "#004040",
             color:"#FFFFFF", width:'25%',
              height: 38, textTransform: 'none', 
              float:'right'},
}));

function Note(props) {

    const [recipient, setRecipient] = React.useState('');
    const [note, setNote] = React.useState('');
    const [sender, setSender] = React.useState('');
    const[shareId,setShareId]=useState();  
    const classes = useStyles();

    const handleChange1 = (event) => {
        setRecipient(event.target.value);
        console.log(recipient);
        console.log(props.emailId)
      };

    const handleChange2 = (event) => {
        setNote(event.target.value);
        console.log(note);
      };

    // const handleChange3 = (event) => {
    //     setSender(props.name);
    //     console.log(sender);
    //   };
    

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(note);
        console.log(sender);
        axios.post(API.INSERT_WISH,JSON.stringify({
                  "emailID":props.emailId,
                  "sender":props.name,
                  "recipient":recipient,
                  "note":note,
                  "imageId":props.image,
              }),{headers:{"Content-Type":"application/json"}})
              .then(res => {
                setShareId(res.data);
                console.log(res.data);
                browserHistory.push("/Share/" + res.data)
                setNote('');
                setSender('');
                setRecipient('');
             
              })
              
          };
     
  
    return (
      <div className = "Space" className = "Align-text">
          <img  src={logo} alt="cur" className="center"/>
          <div className = "Space"></div>
        <form onSubmit={handleSubmit} >
        <img src={props.image} className="pic"
      />

          <TextField 
            id="Caption"
            label="Write your caption"
            name="Caption"
            onChange={handleChange1}
            // value={this.state.text}
            
            // variant="outlined"
            className={classes.textField}
            fullWidth = "true"/>


            <TextField style = {{height: '150px',}}
            id="Message"
            label=" Write your message"
            name="Text"
            required
            align='justify'
            onChange={handleChange2}
            InputLabelProps={{required: false}}
            // value={this.state.text}
            // onChange={this.handleChange}
            multiline = "true"
            // variant="filled"
            className={classes.textField}
            rowsMax={8}
            fullWidth = "true"/>

        <TextField 
            id="Name"
            label="Your Name"
            name="Name"
            required
            InputLabelProps={{required: false}}
            // onChange={handleChange3}
            value={props.name}
            className={classes.textField}
            fullWidth = "true"/>

          <div className="Space">
            <Button variant="contained" 
              className ={classes.button}
              type="submit">
                Post
            </Button>
          </div>
        </form>
      </div>
    );
  }
  
  export default Note;