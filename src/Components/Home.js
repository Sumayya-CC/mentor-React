import React,{useState} from 'react';
import './Style.css';
import logo from '../Image/tarentologo.png'
import ImageGridList from './Image';
import Note from './Note';


export default function Home (props){
    
    
    const [image,setImage] = useState("/static/media/image.87dcdccf.jpg");

      const  updateImage = (tile) => {
           setImage(tile.img);
        }
        return(
      
        <div>
        <div className="split1 left1"> <ImageGridList onPassImage = {updateImage}/> </div>
      
        <div className="split1 right1"> 
        
        <div> <Note image={image} emailId={props.params.emailId} name={props.params.name}/></div>
       </div>  
    </div>  
        )
    }

