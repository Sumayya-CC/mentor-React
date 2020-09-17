import React,{useState, useContext} from 'react';
import './Style.css';
import ImageGridList from './Image';
import Note from './Note';
import {browserHistory} from 'react-router';
import './Style.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { UserContext } from './Context';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


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
    const options = [
      'Post View',
      'Logout',
    ];
    
    const ITEM_HEIGHT = 48;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
                    <ImageGridList onPassImage = {updateImage}/> </div>
                  <div className="split1 right1" style={{backgroundColor:'#007070'}}> 
                    <IconButton style={{color:"#FFFFFF", float:'right', marginRight:'2%', marginTop:'2%'}}
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={handleClick}>
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: '20ch',},
                          }}>
                        <MenuList style={{backgroundColor:"#FFFFFF"}}>
                          <MenuItem onClick={allPost}>Post View</MenuItem>
                          <MenuItem onClick={onClicklogout}>Logout</MenuItem>
                        </MenuList>
                    </Menu>   
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

