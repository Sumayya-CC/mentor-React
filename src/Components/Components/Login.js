import React, {useState, useContext, useEffect, useRef} from 'react';
import './Login.css';
import Tarento from '../Image/tarentologo.png';
import Logo from '../Image/Logo.png';
import { TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {browserHistory} from 'react-router';
import mail from '../Image/mail.png';
import { UserContext } from './Context';




//Adding js styles
const useStyles = makeStyles({
  
  textField: {      
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: '#FFFFFF',
          },
          '&:hover fieldset': {
            borderColor: '#FFFFFF',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#FFFFFF',
          },
        },
      },
  
  
  });



var errormsg1='';
var errormsg2='';
var errormsg3='';

function Login (props){

const { setLogin,  setName,  setEmail} = useContext(UserContext);
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [user, setUser] = useState({});
const [showError1, setShowError1] = useState(false);
const [showError2, setShowError2] = useState(false);
const [showError3, setShowError3] = useState(false);

const handleChange1 = event => {
  setUsername(event.target.value );
  console.log(username);
}

const handleChange2 = event => {
  setPassword(event.target.value );
}  

const handleSubmit = event => {
  event.preventDefault();
  var uname = username;
  var flag=0;
  var crypto = require( "crypto" );


const key = 'rZAEcRJGMzKI+7QS';
var tobeEncrypted = password;
const iv = 'tZk2ug2ZVVya+Zwj';
const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
 var encryptedInput = (
  cipher.update( tobeEncrypted, "utf8", "base64" ) +
  cipher.final( "base64" )
 );

  console.log(uname);
  
  if (!/\S+\.\S+@tarento.com+/.test(uname)) {
        flag=1;
         console.log("Emailerror");
           errormsg2='Invalid Credentials!!!';
           setShowError2(true);
               return { showError2 }
             
         }
         else {

          if(flag===0){
            var url = 'http://kronos-test.idc.tarento.com/api/v1/user/getUserInfo';
            console.log(encryptedInput);
            console.log(flag);
            console.log(username);
            axios.post(url,JSON.stringify({ "email": username,"password": encryptedInput}) , 
            { headers: {  "Content-Type": "application/json"  }})
          
          .then(response => (response.data))
            .then((data)=>{
            setUser(data);
            console.log(user)
            console.log(data);
            console.log(data.responseData.first_name);
            var emailId=username
            var fname=data.responseData.first_name
            var lname=data.responseData.last_name
            var  usrname = fname + ' ' + lname
            if(data.statusMessage==='Success')
        {
          setShowError3(false);
          setLogin(true);
          setName(usrname);
          setEmail(emailId);
          console.log(emailId)
          browserHistory.push("/Home/" + emailId + "/" + usrname);
            return { showError3 }
          
          
     }


    else{
      errormsg3="Invalid Credentials!!!";
      setShowError3(true);
          return { showError3 }

     }        
        })
    
          .catch(error => {
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
            console.log(user);

           errormsg3='Registration Failed '  + error ;
           setShowError3(true);
          return { showError3 }
              
             }); 
          
     }
      }
      
  }
  
   

        const classes = useStyles();
        return (
            <div>
            <div className="split left">
            <div style={{font: " Bold 18px Roboto ",}} className="img3">
            <img  src={mail} alt="Welcome Message" style={{width: '8%', paddingRight:'2%'}}/>
             Share your memories with your colleagues</div>
            <img className='img2' src={Tarento} alt="Tarento"/>
            </div>
            <div className="split right">
            <div>
                {showError1 && <div className="error-message">{errormsg1}</div>} 
                </div>
            <div>
                {showError2 && <div className="error-message">{errormsg2}</div>}        
            </div>
            <div>
                {showError3 && <div className="error-message">{errormsg3}</div>} 
                </div>
            
                <div className='rightcontainer' >
               
                <form onSubmit={handleSubmit} >
                  
                    <TextField
                    placeholder="Email"
                    name="username"
                    required
                    variant="outlined"
                    InputLabelProps={{required: false}}  
                    className={classes.textField} 
                    value={username}
                    onChange={handleChange1}
                    style={{backgroundColor:"#FFFFFF", width:"90%"}}
                    />
                    <div className="space"></div>
                    <TextField
                    type="password"
                    placeholder="Password"
                    name="password"
                    variant="outlined"
                    required
                    InputLabelProps={{required: false}}  
                    className={classes.textField} 
                    value={password}
                    onChange={handleChange2}
                    style={{backgroundColor:"#FFFFFF", width:"90%"}}
                    />
                    <div className="space"></div>
                    <div className="space1">
                    <Button variant="contained" 
                    type="submit"
                    style={{backgroundColor: "#004040", width:"80%", height: 45,fontSize:'18px',textTransform:'none', color:"#FFFFFF"}} 
                    >
                            LOGIN
                        </Button>
                        </div>
                        </form>
                    </div>
            </div>
            
        </div>
        )
    
}
export default Login;

