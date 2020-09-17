import React,{useState, useContext} from 'react';
import './Style.css';
import ImageGridList from './Image';
import Note from './Note';
import {browserHistory} from 'react-router';
import './Style.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { UserContext } from './Context';


const useStyles = makeStyles({
    
    button:{  
      //  align: 'center', 
      backgroundColor: "#004040", color:"#FFFFFF", 
      width:'12%', height: '6%', 
      textTransform: 'none',
      marginTop:'4%',
      marginBottom:'0.5%',
      marginRight:'4%'
     },
    });

export default function Home (props){
    
    const {login, setLogin, name, email} = useContext(UserContext);
    const [image,setImage] = useState("/static/media/image.87dcdccf.jpg");

      const  updateImage = (tile) => {
           setImage(tile.img);
        }

        const classes = useStyles();

      const  onClicklogout = () => {
            browserHistory.push("/PublicView");
            localStorage. clear();
            sessionStorage.clear();
            setLogin(false); 
             };

             const allPost = () =>{
                console.log('all post')
                console.log(email)
                console.log(name)
              browserHistory.push("/PublicView");
            }

             let home= null;

        if(!login){
            browserHistory.push("/Login");
            console.log('pls login');

        }else {
            home= (
                <div>
                  <div className="split1 left1"> 
                    <Button name='sign-out'  className={classes.button} style={{float:'right',}} onClick = {allPost}>All Post View</Button>
                    <ImageGridList onPassImage = {updateImage}/> </div>
                  <div className="split1 right1" style={{backgroundColor:'#007070'}}> 
                    <Button name='sign-out'  className={classes.button} style={{float:'right',}} onClick = {onClicklogout}>Log out </Button>   
                    <Note image={image} email={email} name={name}/></div>
                </div>
            )
        }

           
        return(
      
        <div>
        {home}
       
       </div>  
        )
    }

