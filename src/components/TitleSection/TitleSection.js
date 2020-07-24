import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {SwitchCountry} from "../../helper/SwitchFunctions";
import Pagos from '../../assets/pagos.png'
import Recarga from '../../assets/recarga-saldo.png'
import Sobre from '../../assets/sobre-pago46.png'
import Socio from '../../assets/socio.png'
import Tienda from '../../assets/tienda.png'
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    imageIcon: {
        width: '100%',
        maxWidth: 30,
        backgroundColor: theme.palette.background.paper,
        display: 'inline',
        marginLeft: '20px'
    },
    textTitle: {
        marginLeft: '10px',
        display: 'inline-block',
    },
    containerDiv: {
        [theme.breakpoints.down(580)]: {
            paddingLeft: 10
        },
        [theme.breakpoints.up(580)]: {
            textAlign: 'center',
        },
    }
}));

const TitleSection = ({title, setTitle, data, country}) => {
    const classes = useStyles();

    let location = useLocation()

    const [imageIconUse, setImageIconUse] = useState(null)

    const url = location.pathname

    useEffect(()=>{
        const nameImage = title.imageIcon
        switch(nameImage){
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
    }, [title, location])

    useEffect(()=>{
        knowTitle()
    }, [data, location])

    const knowTitle = () => {
        let positionArrayCountry = SwitchCountry(country)

        if(data && url === '/' && country){
            setTitle({title: `Atención al cliente ${country}`})
        }

        if(data && url.indexOf('/') === url.lastIndexOf('/') && url != '/') {
            (setTitle((data.categories.filter(info => info.hrefoption === url)[0])))
        }

        if(data && url.indexOf('/') !== url.lastIndexOf('/')){
            (setTitle(data.information[positionArrayCountry].content.filter( info => info.hrefoption === url)[0]))
        }

    }

    return(
        <div className={classes.containerDiv}>
            {imageIconUse
                ? <img src={imageIconUse} alt="img" className={classes.imageIcon}/>
                : null
            }
            <div className={classes.textTitle}><h2>{title.title}</h2></div>
        </div>

    )
}

TitleSection.propTypes = {
    title: PropTypes.object.isRequired,
    setTitle: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    country: PropTypes.string.isRequired
}

export default TitleSection