import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import MainTitleBoxes from "./components/MainTitleBoxes/MainTitleBoxes.js";
import './App.css';
import mockData from './moks/support_options.json'
import HeaderComp from "./components/HeaderComp/HeaderComp";
import InfoBox from "./components/InfoBox/InfoBox";
import TitleSection from "./components/TitleSection/TitleSection";
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography           from '@material-ui/core/Typography';
import ErrorIcon            from '@material-ui/icons/Error';
import green from '@material-ui/core/colors/green';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import Form from "./components/Form/Form";

const useStyles = makeStyles(theme => createStyles({
    responseContainer: {
        padding: 32,
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        backgroundColor: 'floralwhite',
        margin: '16px 0',
        width: 320
    },
    iconFailure: {
        color: 'red',
        fontSize: 120,
        marginTop: -10
    },
    titleTheme: {
        color: 'black',
        fontWeight: 'normal',
        margin: '10px auto'
    },
    text: {
        color: 'dimgrey',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 24
    },
    loadingContainer: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        background: 'white',
        padding: 16,
        [theme.breakpoints.up(480)]: {
            width: 460
        },
        [theme.breakpoints.up(1024)]: {
            marginTop: 64
        },
    }
}));

function App() {
    const {
        loadingContainer,
        responseContainer,
        iconFailure,
        titleTheme,
        text
    } = useStyles();

    const [data, setData] = useState(null)
    const [infoBool, setInfoBool] = useState(false)
    const [title, setTitle] = useState({})
    const [country, setCountry] = useState('')
    const [error, setError] = useState(false)
    const [errorCode, setErrorCode] = useState(0)
    const [errorMessage, setErrorMessage] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        /*const apiUrl = ``

        fetch(apiUrl)
                .then(async response => {
                    if(response.status === 200) {
                        const dataRes = await response.json();
                        setLoading(false);
                        setData(dataRes);
                        setCountry(?);
                    } else {
                        setLoading(false);
                        setError(true);
                        setErrorCode(response.status);
                        setErrorMessage('Error retrieving data from sources ');
                    }
                })
                .catch(error => {
                    setLoading(false);
                    setError(true);
                    setErrorCode(1);
                    setErrorMessage(error);
                });*/

        setData(mockData)
        setLoading(false)
        setError(false)

        setCountry('Argentina')
    }, [])

    return (
        <Router>
             <HeaderComp setInfoBool={setInfoBool}/>
             <TitleSection
                 title={title}
                 setTitle={setTitle}
                 data={data}
                 country={country}
             />
             <Switch>
                  <Route path="/">
                      {
                          loading && (
                              <Paper data-testid='loading-screen' elevation={0} className={loadingContainer} style={{ marginTop: '50%' }}>
                                  <CircularProgress
                                      style={{ color: green[500], marginTop: 16 }}
                                      thickness={4}
                                      size={60}/>
                              </Paper>
                          )
                      }
                      {
                          error && !loading && (
                              <Paper data-testid='error-screen' elevation={0} className={responseContainer} style={{ width: '80%' }}>
                                  <ErrorIcon className={iconFailure}/>
                                  <Typography variant={'h6'} className={titleTheme}>{`ERROR: ${errorCode}`}</Typography>
                                  <Typography variant={'body2'} className={text}>Algo salio mal, por favor vuelve a intentarlo mas tarde.</Typography>
                                  <Typography variant={'body2'} className={text}>`${errorMessage}`</Typography>
                              </Paper>
                          )
                      }
                      {
                          data && !loading && !error && infoBool && (
                              <InfoBox
                                  data={data}
                                  setInfoBool={setInfoBool}
                                  country={country}
                              />
                          )
                      }
                      {
                          data && !loading && !error && !infoBool && (
                              <MainTitleBoxes
                              data={data}
                              setInfoBool={setInfoBool}
                              setTitle={setTitle}
                              country={country}
                              />
                          )
                      }
                  </Route>
             </Switch>
        </Router>
    );
    /*return(
        <Form/>
    )*/
}

export default App;
