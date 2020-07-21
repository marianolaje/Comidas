import React, {useState, useEffect, Fragment} from 'react'
import {useLocation} from 'react-router-dom'
import Pagos from '../../assets/pagos.png'
import Recarga from '../../assets/recarga-saldo.png'
import Sobre from '../../assets/sobre-pago46.png'
import Socio from '../../assets/socio.png'
import Tienda from '../../assets/tienda.png'
import {makeStyles} from "@material-ui/core/styles";

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
    }
}));

const TitleSection = ({title, setTitle, data, country}) => {
    const classes = useStyles();

    let location = useLocation()

    const [imageIconUse, setImageIconUse] = useState('')

    useEffect(()=>{
        if(location.pathname === '/' && country){
            setTitle({title: `Atencion al cliente ${country}`})
        }
    }, [location, country])

    useEffect(()=>{
        knowTitle()

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

    const knowTitle = () => {

        if(data){
            if(location.pathname.indexOf('/') === location.pathname.lastIndexOf('/')){
                data.categories.forEach(info=>{
                    if(info.hrefoption === location.pathname){
                        setTitle(info)
                    }
                })
            }
            else if(location.pathname.indexOf('/') !== location.pathname.lastIndexOf('/')){
                for(let pais of data.information){
                    if(pais.country === country){
                        for(let contentInfo of pais.content){
                            if(contentInfo.hrefoption === location.pathname){
                                setTitle(contentInfo)
                            }
                        }
                    } else {
                        for(let contentInfo of pais.content){
                            if(contentInfo.hrefoption === location.pathname){
                                setTitle(contentInfo)
                            }
                        }
                    }
                }
            }
        }
    }
    knowTitle()



    return(
        <Fragment>
            {imageIconUse
                ? <img src={imageIconUse} className={classes.imageIcon}/>
                : null
            }
            <div className={classes.textTitle}><h2>{title.title}</h2></div>
        </Fragment>

    )
}

export default TitleSection