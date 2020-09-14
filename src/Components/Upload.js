//import axios from 'axios'; 

import React,{Component} from 'react';
import {DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
button:{  
    //  align: 'center', 
    backgroundColor: "#004040", color:"#FFFFFF", 
    width:'20%', height: '20%', 
    textTransform: 'none',
    // marginTop:'0.5%',
    // marginBottom:'0.5%',
    // marginLeft:'2%'
   },
});

class Upload extends Component { 


  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
        open: false,
        files: []
    };
}
	 
//	onFileChange = event => { 
	
	//this.setState({ selectedFile: event.target.files[0] }); 
	
	//}; 
	

	//onFileUpload = () => { 

	//const formData = new FormData(); 
	

	//formData.append( 
		//"myFile", 
	//	this.state.selectedFile, 
	//	this.state.selectedFile.name 
	//); 
	
	//console.log(this.state.selectedFile); 
	
	// Request made to the backend api 
	// Send formData object 
	//axios.post("api/uploadfile", formData); 
  //}; 
  handleClose() {
        this.setState({
            open: false
        });
        
    }
 
    handleSave(files) {
        //Saving files to state for further use and closing Modal.
        this.setState({
            files: files,
            open: false
            
        });
        console.log(files);
    }
    
	
    handleOpen() {
      this.setState({
          open: true,
      });
  }
	
  render() {
    const { classes } = this.props;
    return (
        <div>
            <Button onClick={this.handleOpen.bind(this)} className={classes.button} style={{alignItems:'center', marginLeft:'20%', marginTop:'30%'}}>
              + Image
            </Button>
            <DropzoneDialog
                open={this.state.open}
                onSave={this.handleSave.bind(this)}
                
                acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                showPreviews={true}
                maxFileSize={5000000}
                onClose={this.handleClose.bind(this)}
            />
        </div>
    );
}
}

export default withStyles(styles)(Upload);

// //import axios from 'axios'; 

// import React,{Component} from 'react'; 

// import {DropzoneDialog} from 'material-ui-dropzone'
// import Button from '@material-ui/core/Button';

// export default function Upload (props) { 

//     const [selectedFile, setSelectedFile] = React.useState([]);
//     const [open, setOpen] = React.useState(false);
//     const [files, setFiles] = React.useState([]);
//     // ({path:"/static/media/image.87dcdccf.jpg",name:'image.87dcdccf.jpgs'});

// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       selectedFile: null,
// //         open: false,
// //         files: [{'path':'"/static/media/image.87dcdccf.jpg"','name':'image.87dcdccf.jpgs'}]
// //     };
// // }
	 
// //	onFileChange = event => { 
	
// 	//this.setState({ selectedFile: event.target.files[0] }); 
	
// 	//}; 
	

// 	//onFileUpload = () => { 

// 	//const formData = new FormData(); 
	

// 	//formData.append( 
// 		//"myFile", 
// 	//	this.state.selectedFile, 
// 	//	this.state.selectedFile.name 
// 	//); 
	
// 	//console.log(this.state.selectedFile); 
	
// 	// Request made to the backend api 
// 	// Send formData object 
// 	//axios.post("api/uploadfile", formData); 
//   //}; 
//  const handleClose=() =>{
//         setOpen(false);
        
//     };
 
//  const   handleSave=(files) => {
//         //Saving files to state for further use and closing Modal.
//         setFiles(files);
//         setOpen(false);
//         console.log(files);
//         // setFiles(selectedFile.map(file => Object.assign(file, {
//         //     view: URL.createObjectURL(file)
//         //   })));
//         //   console.log(files.view);
//     }; 
    
	
//   const  handleOpen=()=> {
//       setOpen(true);
//   };
    
// //   React.useEffect(() => () => {
// //     // Make sure to revoke the data uris to avoid memory leaks
// //     files.forEach(file => URL.revokeObjectURL(file.view));
// //   }, [files]);
 
//     return (
//         <div>
//             <Button onClick={handleOpen}>
              
//             </Button>
//             <DropzoneDialog
//                 open={open}
//                 onSave={() =>handleSave.bind}
                
//                 acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
//                 showPreviews={true}
//                 maxFileSize={5000000}
//                 onClose={handleClose}
//             />
//             {/* <img src={files.view}/> */}
//         </div>
//     );

// }
