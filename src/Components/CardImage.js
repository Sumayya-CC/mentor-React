import React,{Component} from 'react';
import logo from '../Image/tarentologo.png';
import '../App.css';
import './Style.css';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import img from '../Image/image.jpg';
import axios from 'axios';
import * as API from '../constants/Api';

const styles = theme => (
    {root: {
        maxWidth: '20%',
        marginLeft:'40%',
        marginTop:'1%',
        height:"80%"
       
      },
    }
)


class CardImage extends Component{
    constructor(props){
        super(props);
        this.state = {
          sender:'',
          note:'',
          recipient:'',
          imageId:'',
        }
    }

    componentDidMount() {
      axios.get(API.RETRIEVE_WISH,{params:{shareId: this.props.shareId}})
        .then(res => {
      const response = res.data;
      this.setState({sender: response.SENDER, note: response.NOTE, recipient:response.RECIPIENT, imageId:response.IMAGE_ID});
        });
      }


    render(){
        const { classes } = this.props;
      return(
          <div>
              
              <Card className={classes.root} >
      <CardActionArea>
        
         <img src={this.state.imageId} style={{width:"100%"}}/>
       
        <CardContent>
        <img  src={logo} alt="tarento" style={{marginTop:'1%',marginBottom:'2%', width:'35%'}}/>
          <Typography gutterBottom variant="h6" style={{font: " Bold 22px  Roboto"}} >
          Thank you {this.state.recipient}!
          </Typography>
          <Typography variant="body" color="textSecondary" component="p" align="justify" style={{font: " 16px  Roboto"}}>
          {this.state.note}
          </Typography>
          <Typography variant="h6" style={{float:"right", paddingTop: "5%", font: " 20px Roboto ",paddingBottom:'3%' }}>
            {this.state.sender}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> 
          </div>



      );
    }
}

export default withStyles(styles)(CardImage);