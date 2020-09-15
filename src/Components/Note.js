import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Style.css';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import * as API from '../constants/Api';
import {browserHistory} from 'react-router';

//Adding js styles
const useStyles = makeStyles((theme) => ({
        textField: {
            // marginRight: theme.spacing.unit,
            // // width: 350,
            // paddingTop: "1%",
            // // paddingLeft:'1%',
            marginTop: "-1.5%",
            paddingBottom:'2%',
            // marginLeft:'0%',
            color: "black",
            // minHeight: '40%', 
            background:'White',
            
            '& label.Mui-focused': {
            color: 'black',
            },
            '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
            },
            '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
            },
            
            '&.Mui-focused fieldset': {
            borderColor: 'white',
            },
            '&& .MuiInput-root:hover::before': {
            borderColor: 'white',
            } 
            },

            button:{align: 'center',
             backgroundColor: "#004040",
             color:"#FFFFFF", 
            //  width:'25%',
              height: '6%', 
              textTransform: 'none', 
              // float:'right'
            },
}));

function Note(props) {

    const [caption, setCaption] = useState('');
    const [note, setNote] = useState('');
    const [sender, setSender] = useState('');
    const[shareId,setShareId]=useState();  
    const classes = useStyles();

    const handleChange1 = (event) => {
        setCaption(event.target.value);
        console.log(caption);
        console.log(props.email)
      };

    const handleChange2 = (event) => {
        setNote(event.target.value);
        console.log(note);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(note);
        console.log(sender);
        axios.post(API.INSERT_WISH,JSON.stringify({
                  "emailID":props.email,
                  "sender":props.name,
                  "caption":caption,
                  "note":note,
                  "imageId":props.image,
              }),{headers:{"Content-Type":"application/json"}})
              .then(res => {
                setShareId(res.data);
                console.log(res.data);
                browserHistory.push("/Share/" + res.data)
                setNote('');
                setSender('');
                setCaption('');
             
              })
              
          };
     
  
    return (
      <div style={{paddingTop:'5%'}} className = "Align-text" >
        <div className="note">
          <form onSubmit={handleSubmit} >
            <TextField 
              id="Caption"
              label="Write your caption"
              name="Caption"
              onChange={handleChange1}
              className={classes.textField}
              fullWidth = "true"/>

            <img src={props.image} style = {{width:'100%'}}/>

            <TextField style = {{height: '150px',}}
              id="Message"
              label=" Write your message (Max 300 letters)"
              name="Text"
              required
              align='justify'
              onChange={handleChange2}
              InputLabelProps={{required: false,}}
              inputProps={{maxLength:300}}
              multiline = "true"
              className={classes.textField}
              rowsMax={7}
              fullWidth = "true"/>

            <div className="Space">
              <Button variant="contained" 
                className ={classes.button}
                type="submit" fullWidth = "true"
                style={{marginTop:'1%'}}>
                  Post
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default Note;