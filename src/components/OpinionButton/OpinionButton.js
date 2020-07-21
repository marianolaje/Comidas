import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3),
        whiteSpace: 'pre-wrap',
    },
    alignCenter: {
        textAlign: 'center',
        boxShadow: '0px -2px 2px 0px #E5E7EB',
        paddingTop: 10,
        marginBottom: 20
    },
    spreadButtons: {
        marginRight: 40,
    },
    marginTop: {
        marginTop: 10
    },
    buttonSize: {
        marginTop: 10,
        '& button': {
            maxHeight: 20,
            fontSize: 10,
        }
    }
}));

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            '"Lato"',
            '"Roboto"',
            'sans-serif'
        ].join(','),
    },
    palette: {
        primary: {
            main: '#28C339'
        }
    },
});



const OpinionButton = () => {
    const classes = useStyles();

    const changeBoolButtons = (buttonId, otherButtonId) => {
        const button = document.getElementById(buttonId).style
        const otherButton = document.getElementById(otherButtonId).style

        if(button.color === 'white'){
            button.color = '#28C339'
            button.backgroundColor = 'transparent'
        } else {
            button.color = 'white'
            button.backgroundColor = '#28C339'
        }
        if(otherButton.color === 'white'){
            button.color = '#28C339'
            button.backgroundColor = 'transparent'
        }
    }

    return(
            <div className={classes.alignCenter}>
                <Typography variant="body2" className={classes.marginTop}>
                    ¿Fue útil este artículo?
                </Typography>

                <Typography variant="body2" className={classes.marginTop}>
                    <div className={classes.buttonSize}>
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.spreadButtons}
                            id='buttonYes'
                            onClick={()=>changeBoolButtons('buttonYes', 'buttonNo')}
                        >Si
                        </Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            id='buttonNo'
                            onClick={()=>changeBoolButtons('buttonNo', 'buttonYes')}
                        >No
                        </Button>
                    </div>
                </Typography>

                <Typography variant="body2" className={classes.marginTop}>
                    ¡Muchas gracias!
                </Typography>
            </div>

    )
}

export default OpinionButton