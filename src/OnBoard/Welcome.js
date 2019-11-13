import React ,{ useState }from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Address from './address.js';
import UserIndentity from './UserIdentityInfo.js';
import Thankyou from './ThankYou.js';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [{label:"Banking",key:"banking",img:"../banking.jpg"},{label:"Brokerage",key:'brokerage',img:'../brokerageaccount.jpeg'},{label:"Crypto Currency Wallet",key:"crypto",img:"../cryptocurrencywallet.png"}];

export default function Welcome() {
  const classes = useStyles();

  const [activeCip, setActiveCip] = useState("");
  const [accType, setAccType] = useState("");

  const showCustomerAddress=()=>{
  
     setActiveCip("address");

  }

  const showCustomerTax=()=>{
  
     setActiveCip("tax");

  }

  const showComplete =()=>{
    setActiveCip("complete");
  }

  const loadAccountType=(accType)=>{
   setAccType(accType);
  }

  const renderCustomerInformationProcess=()=>{

    if(activeCip===""){
     return (  <Grid container spacing={2} justify="center">
              <Grid item>
                  <Button variant="contained" color="primary" onClick={()=>setAccType("")}>
                    Back
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={()=>showCustomerAddress()}>
                    Authenticate CIP
                  </Button>
                </Grid>
              </Grid>)
    }
  

     if(activeCip==="address"){
         return (<Address next={showCustomerTax} prev={showCustomerAddress}/>)
     }

     if(activeCip==="tax"){
        return (<UserIndentity next={showComplete} prev={showCustomerAddress}/>)
     }

     if(activeCip==="complete"){
        return (<Thankyou/>)
     }

  }

  const renderAccType=(accType)=>{
  

  if(accType==='banking'){
  return (

         <main>
         <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
             Banking Account
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
             This is info Abbout banking account
            </Typography>
          </Container>
          

             <div className={classes.heroButtons}>

            
              <Grid container spacing={2} justify="center">

             {
              activeCip && (<Grid item xs={12} md={12} sm={12}>
               {renderCustomerInformationProcess()}
            </Grid>)
             } 

             <Grid>
            <Grid item>
                  <Button variant="contained" color="primary" onClick={()=>setAccType("")}>
                    Back
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={()=>showCustomerAddress()}>
                    Authenticate CIP
                  </Button>
                </Grid>
              </Grid>
              </Grid>
            </div>

         </main>
          )
  }

  if(accType==='brokerage'){
  return (

         <main>
         <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
             Brokerage Account
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
             This is info About brokerage account
            </Typography>
          </Container>
          

             <div className={classes.heroButtons}>

            
              <Grid container spacing={2} justify="center">

              <Grid item xs={12} md={12} sm={12}>
            {renderCustomerInformationProcess()}
          </Grid>
          </Grid>
            </div>

         </main>
          )
  }


  if(accType==='crypto'){
  return (

         <main>
         <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
             Crypto Currency Wallet Account
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
             This is info Abbout banking account
            </Typography>
          </Container>
          

             <div className={classes.heroButtons}>

            
              <Grid container spacing={2} justify="center">

              <Grid item xs={12} md={12} sm={12}>
            {renderCustomerInformationProcess()}
            </Grid>
              <Grid item>
                  <Button variant="contained" color="primary" onClick={()=>setAccType("")}>
                    Back
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={()=>showCustomerAddress()}>
                    Authenticate CIP
                  </Button>
                </Grid>
              </Grid>
            </div>

         </main>
          )
  }

  }

  return (
    <React.Fragment>
      <CssBaseline />
        { !accType && (<main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
             Welcome Alex
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
          </Container>
        </div>
       <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
           <Typography variant="h5" component="h3" className="acc-header">
        Please select type of the account you would like to open
      </Typography>
          
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card} onClick={()=>{loadAccountType(card.key)}}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     {card.label}
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>)}

        {
          renderAccType(accType)
        }
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}