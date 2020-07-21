import React, {useEffect} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Arrow from '../../assets/arrow.png'
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '20px',
        boxShadow: '0px 2px #E5E7EB',
        '& > *': {
            margin: theme.spacing(1.3),
            width: theme.spacing(4),
            height: theme.spacing(4),
        },
    },
}));

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            '"Lato"',
            '"Roboto"',
            'sans-serif'
        ].join(','),
    },
});

const HeaderComp = ({setInfoBool}) => {
    const classes = useStyles();

    const history = useHistory()
    let location = useLocation()

    const goBackButton = () => {
        history.go(-1)
    }

    useEffect(()=>{
        setInfoBool(false)
    }, [location])

    return(
        <ThemeProvider theme={theme}>
            <header>
                <Paper elevation={2}
                       className={classes.root}
                       onClick={goBackButton}
                >
                    <img src={Arrow}/>
                    <Typography variant="h6">
                        Ayuda
                    </Typography>
                </Paper>

            </header>
        </ThemeProvider>
    )
}

export default HeaderComp