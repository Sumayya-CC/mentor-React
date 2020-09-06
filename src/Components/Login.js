import React, {Component} from 'react';
import './Login.css';
import Tarento from '../Image/tarentologo.png';
import Logo from '../Image/Logo.png';
import { TextField } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import {browserHistory} from 'react-router';




//Adding js styles
const styles = theme => (
  {
  
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
class Login extends Component {    
// constructers
constructor(props){
  super(props);
  this.state = {
  username:'',
  password:'',
  showError1: false,
        showError2: false,
        showError3: false,
        User : [],
}}

handleChange1 = event => {
  this.setState({ username: event.target.value });
  console.log(this.state.username);
}

handleChange2 = event => {
  this.setState({ password: event.target.value });
  console.log(this.state.password);
}  

handleSubmit = event => {
  event.preventDefault();
  var uname = this.state.username;
  var pass =  this.state.password;
  var flag=0;
        this.setState((prevState, props) => {
          return { showError1: false,showError2:false }
        })
  console.log(uname);
  console.log(pass);
  //console.log(errormsg)
  if (!/\S+\.\S+@tarento.com+/.test(uname)) {
        flag=1;
         console.log("Emailerror");
           errormsg2='Invalid Credentials!!!';
           this.setState(() => {
             flag=1;
               return { showError2: true }
             })
         }
         else {

          if(flag===0){
            var uri = 'http://kronos-test.idc.tarento.com/api/v1/user/getUserInfo';
           
            axios.post(uri,JSON.stringify({ "email": this.state.username}) , { headers: {  "Content-Type": "application/json"  }            
          })
          .then(response => (response.data))
            .then((data)=>{
            this.setState({User:data})
            console.log(this.state.User);
            console.log(this.state.User.responseData.email);
            var email=this.state.User.responseData.email
            var fname=this.state.User.responseData.first_name
            var lname=this.state.User.responseData.last_name
            var  name = fname + ' ' + lname
            if(this.state.User.statusCode===200)
        {
          this.setState(() => {
            return { showError3: false }
          })
          browserHistory.push("/Home/" + email + "/" + name)
     }


    else{
      errormsg3="Invalid Credentials!!!";
      this.setState(() => {
          return { showError3: true }
        })

     }        
        })
    
          .catch(error => {
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
           errormsg3='Registration Failed '  + error ;
           this.setState((prevState, props) => {
           
            return { showError3: true }

              })
              
             }); 
     }
      }
      
  }
  
   

    render(){
      const { classes } = this.props;
        return (
            <div>
            <div className="split left">
            <img className="img3" src={Logo} alt="Welcome Message"/>
            <img className='img2' src={Tarento} alt="Tarento"/>
            </div>
            <div className="split right">
            <div>
                {this.state.showError1 && <div className="error-message">{errormsg1}</div>} 
                </div>
            <div>
                {this.state.showError2 && <div className="error-message">{errormsg2}</div>}        
            </div>
            <div>
                {this.state.showError3 && <div className="error-message">{errormsg3}</div>} 
                </div>
            
                <div className='rightcontainer' >
               
                <form onSubmit={this.handleSubmit} >
                  
                    <TextField
                    placeholder="Email"
                    name="username"
                    required
                    variant="outlined"
                    InputLabelProps={{required: false}}  
                    className={classes.textField} 
                    value={this.state.username}
                    onChange={this.handleChange1}
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
                    value={this.state.password}
                    onChange={this.handleChange2}
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
}
export default withStyles(styles)(Login);