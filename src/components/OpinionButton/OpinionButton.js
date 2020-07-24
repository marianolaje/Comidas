import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
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
    answerButton: {
        margin: "0 20px",
        maxHeight: 20,
        fontSize: 10,
    },
    selectedButton: {
        color: "white",
        backgroundColor: "#28C339",
        "&:active, &:hover":{
            backgroundColor: "#28C339",
        }
    },
    buttonContainer: {
        margin: "10px 0",
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

const ANSWERS = {
    YES: "YES",
    NO: "NO",
}

const noop = () => false;

const OpinionButton = ({ onSelect = noop }) => {
    const classes = useStyles();
    const [selected, setSelected] = useState(null);

    const onClickButton = answer => () => {
        if(selected && selected !== answer) return;

        const finalAnswer = selected === answer ? null : answer;
        onSelect(finalAnswer);
        setSelected(finalAnswer)
    }

    const selectedClassName = `${classes.answerButton} ${classes.selectedButton}`
    return (
        <div className={classes.alignCenter}>
            <Typography variant="body2" className={classes.marginTop} theme={theme}>
                ¿Fue útil este artículo?
            </Typography>

            <div className={classes.buttonContainer}>
                <Button
                    color="primary"
                    className={selected === ANSWERS.YES ? selectedClassName : classes.answerButton}
                    variant="outlined"
                    onClick={onClickButton(ANSWERS.YES)}
                > Si
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    className={selected === ANSWERS.NO ? selectedClassName : classes.answerButton}
                    onClick={onClickButton(ANSWERS.NO)}
                >No
                </Button>
            </div>

            <Typography variant="body2" className={classes.marginTop} theme={theme}>
                ¡Muchas gracias!
            </Typography>
        </div>

    )
}


export default OpinionButton