import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import Pagos from '../../assets/pagos.png'
import Recarga from '../../assets/recarga-saldo.png'
import Sobre from '../../assets/sobre-pago46.png'
import Socio from '../../assets/socio.png'
import Tienda from '../../assets/tienda.png'
import {makeStyles} from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    imageIcon: {
        width: '100%',
        maxWidth: 35,
        backgroundColor: theme.palette.background.paper,
    },
    color: {
        color: '#011238',
    },
    noSpaces: {
        margin: 0,
        padding: 0,
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
});

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const MainTitleBox = ({infoRow, setTitle}) => {
    const classes = useStyles();

    const [imageIconUse, setImageIconUse] = useState(null)

    const history = useHistory()
    console.log(history)

    const setTitleToView = () => {
        setTitle(infoRow)
    }

    const changeUrl = () => {
        history.push(infoRow.hrefoption)
    }

    useEffect(() => {
        const nameImage = infoRow.imageIcon
        switch (nameImage) {
            case 'Pagos':
                setImageIconUse(Pagos)
                break;
            case 'Recarga':
                setImageIconUse(Recarga)
                break;
            case 'Sobre':
                setImageIconUse(Sobre)
                break;
            case 'Socio':
                setImageIconUse(Socio)
                break;
            case 'Tienda':
                setImageIconUse(Tienda)
                break;
            default:
                setImageIconUse(null)
                break;
        }

    }, [infoRow])

    return (
        <ThemeProvider theme={theme}>
            <List component="nav" aria-label="main mailbox folders" className={classes.noSpaces}>
                <ListItemLink
                    onClick={changeUrl}
                    className={classes.color}
                >
                    {imageIconUse &&
                    (<ListItemIcon>
                        <img
                            src={imageIconUse}
                            className={classes.imageIcon}
                            alt="iconos"
                        />
                    </ListItemIcon>)
                    }
                    <Typography>
                        <ListItemText
                            onClick={setTitleToView}
                            primary={infoRow.title}
                        />
                    </Typography>
                </ListItemLink>
                <Divider/>
            </List>
        </ThemeProvider>
    );
}

MainTitleBox.propTypes = {
    setTitle: PropTypes.func.isRequired,
    infoRow: PropTypes.object.isRequired,
}

export default MainTitleBox