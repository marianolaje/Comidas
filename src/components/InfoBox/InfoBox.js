import React, {useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import OpinionButton from "../OpinionButton/OpinionButton";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3),
        whiteSpace: 'pre-wrap',
    },
    alignCenter: {
        textAlign: 'center',
        boxShadow: '0px -2px 2px 0px #E5E7EB',
        paddingTop: 10
    },
    spreadButtons: {
        marginRight: 40,
    },
    buttonSize: {
        '& button': {
            maxHeight: 20,
            fontSize: 10,
        }
    },
    images: {
        maxWidth: '300px'
    },
    videos: {
        maxWidth: '315px',
        maxHeight: '560px',
        marginTop: 30
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

const InfoBox = ({data, country}) => {
    const classes = useStyles();

    const [infoState, setInfoState] = useState('')
    const [paragraph, setParagraph] = useState('')
    const [arrayTexts, setArrayTexts] = useState([])
    const [arrayElements, setArrayElements] = useState([])
    const [orderParagraph, setOrderParagraph] = useState([])
    const [hrefOptions, setHrefOptions] = useState([])
    const [linkText, setLinkText] = useState([])
    const [cuantityCounter, setCuantityCounter] = useState([])
    const [boolControl, setBoolControl] = useState(true)

    let location = useLocation()

    useEffect(()=>{
        if(data){
            obtainInfo()
            setParagraph(infoState.info)
            modifyInfo()
            if(boolControl){
                orderInfo()
            }
        }
    }, [data, location, paragraph])

    const obtainInfo = () => {
        const url = location.pathname;
        let positionArrayCountry
        if(country === 'Argentina'){
            positionArrayCountry = 1
        } else if(country === 'Chile'){
            positionArrayCountry = 2
        } else if(country === 'Mexico'){
            positionArrayCountry = 3
        } else {
            positionArrayCountry = 0
        }
        for(let contentInfo of data.information[positionArrayCountry].content){
            if(contentInfo.hrefoption === url){
                setInfoState(contentInfo)
            }
        }
        if(infoState === ''){
            for(let contentInfo of data.information[0].content){
                if(contentInfo.hrefoption === url){
                    setInfoState(contentInfo)
                }
            }
        }
    }

    const modifyInfo = () => {
        if(paragraph){
            let cuantitySymbol = obtainCuantitySymbols()
            let positionLastSimbol = 1
            for(let x = 0; x<20; x++){
                positionLastSimbol = paragraph.indexOf('</a>', positionLastSimbol) + 1
                if(positionLastSimbol === 0) { break }
                cuantitySymbol++
            }

            let modifyText = paragraph
            for(let i = 0; i<cuantitySymbol; i++){
                if(modifyText.includes('</a>')){
                    modifyText = obtainText(modifyText)
                    modifyText = obtainElement(modifyText)
                } else {
                    console.log(modifyText)
                    setArrayTexts(arrayTexts => [...arrayTexts, modifyText])
                    break
                }
            }
        }
    }

    const obtainCuantitySymbols = () => {
        let cuantitySymbol = 0
        let positionLastSimbol = 1
        for(let x = 0; x<20; x++){
            positionLastSimbol = paragraph.indexOf('</a>', positionLastSimbol) + 1
            if(positionLastSimbol === 0) break
            cuantitySymbol++
        }
        return cuantitySymbol
    }

    const obtainText = (modifyText) => {
        let aElementOpen = modifyText.indexOf('<a')
        let onlyText = modifyText.substring(0, aElementOpen)
        setArrayTexts(arrayTexts => [...arrayTexts, onlyText])
        let result = modifyText.replace(`${onlyText}`, '')
        return result
    }

    const obtainElement = (modifyText) => {
        let aElementOpen = modifyText.indexOf('<a')
        let aElementClose = modifyText.indexOf('</a>')
        let aElement = modifyText.substring(aElementOpen, aElementClose) + '</a>'
        setArrayElements(arrayElements => [...arrayElements, aElement])
        let result = modifyText.replace(`${aElement}`, '')
        return result
    }


    useEffect(()=>{
        if(arrayTexts){
            orderInfo()
        }
    },[arrayElements, paragraph, orderParagraph])

    const orderInfo = () => {
        if(paragraph && arrayTexts.length!=0 && boolControl){
            setBoolControl(false)
            let cuantitySymbol = obtainCuantitySymbols()
            for(let i = 0; i<cuantitySymbol; i++){
                setOrderParagraph(orderParagraph => [...orderParagraph, arrayTexts[i]])
                setOrderParagraph(orderParagraph => [...orderParagraph, arrayElements[i]])
                setCuantityCounter(cuantityCounter => [...cuantityCounter, i])
            }
        }

        if(orderParagraph){
            for(let i = 0; i<=orderParagraph.length; i++){
                if(i%2 !== 0){
                    orderParagraph[i] = orderParagraph[i].replace('<a', '')
                    orderParagraph[i] = orderParagraph[i].replace('</a>', '')

                    let textInsideAElement = orderParagraph[i].indexOf('>')
                    textInsideAElement++
                    textInsideAElement++
                    setLinkText( linkText => [...linkText, orderParagraph[i].slice(textInsideAElement)])
                    textInsideAElement--

                    let findEndOfHref = orderParagraph[i].indexOf('rel')
                    findEndOfHref = findEndOfHref - 2
                    setHrefOptions(hrefOptions => [...hrefOptions, orderParagraph[i].substring(7, findEndOfHref)])
                }
            }
        }
    }

    return(
        <ThemeProvider theme={theme}>
            <Typography variant="body1" className={classes.root}>
                {infoState.img1
                    ? (<img src={require(`../../assets/${infoState.img1}`)}
                             width="100%"
                             className={classes.images}
                    />)
                    : null
                }
                {infoState.img2
                    ? (<img src={require(`../../assets/${infoState.img2}`)}
                            width="100%"
                            className={classes.images}
                    />)
                    : null
                }
                {infoState.img3
                    ? (<img src={require(`../../assets/${infoState.img3}`)}
                            width="100%"
                            className={classes.images}
                    />)
                    : null
                }

                <div>
                    {
                        boolControl
                            ? (infoState.info)
                            : (cuantityCounter.map(i => (
                                <p>{arrayTexts[i]}<a href={hrefOptions[i]} rel="noopener noreferrer">{linkText[i]}</a></p>
                            )))
                    }
                    {
                        arrayTexts[(cuantityCounter.length)]
                            ? <p>{arrayTexts[(cuantityCounter.length)]}</p>
                            : null
                    }

                </div>

                {infoState.video1
                    ? (<iframe  width="100%"
                                height="100%"
                                src={infoState.video1}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className={classes.videos}>
                    </iframe>)
                    : null
                }
            </Typography>
            <OpinionButton/>
        </ThemeProvider >

    )
}

export default InfoBox