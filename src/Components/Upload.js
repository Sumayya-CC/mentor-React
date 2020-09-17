import React,{Component} from 'react';
import {DropzoneDialog} from 'material-ui-dropzone'
import { Typography } from '@material-ui/core';
import S3 from "react-aws-s3";




export default class Upload extends Component { 


  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
        open: false,
        files: []
    };
}
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
        console.log(files[0].name);
        let file = files[0];
    let newFileName = files[0].name;
    const config = {
      bucketName: "kronos-thankyou",
      dirName: "directory" /* optional */,
      region: "ap-south-1",
      accessKeyId: "AKIAUAXLRTC3N3RDBJA2",
      secretAccessKey: "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"
    };
    const ReactS3Client = new S3(config);
    ReactS3Client.uploadFile(file, newFileName).then(data => {
      console.log(data);
      if (data.status === 204) {
        console.log("success");
      } else {
        console.log("fail");
      }
    });

    }
    
	
    handleOpen() {
      this.setState({
          open: true,
      });
  }
	
  render() {
    return (
        <div>
            <Typography onClick={this.handleOpen.bind(this)} style={{alignItems:'center'}}>
              + Image
            </Typography>
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

