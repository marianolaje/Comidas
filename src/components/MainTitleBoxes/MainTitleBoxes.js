import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom'
import {SwitchTitles} from '../../helper/SwitchFunctions'
import { makeStyles } from '@material-ui/core/styles';
import MainTitleBox from "../MainTitleBox/MainTitleBox";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: theme.palette.background.paper,
    },
}));

const MainTitleBoxes = ({data, setInfoBool, setTitle, country}) => {
    const classes = useStyles();
    const [info, setInfo] = useState([])

    let location = useLocation()

    useEffect(()=>{
        if(data){
            const url = location.pathname;
            SwitchTitles({url, setInfo, data, country})
        }
        if(location.pathname === '/'){
            setInfoBool(false)
        }
        if(location.pathname.indexOf('/') !== location.pathname.lastIndexOf('/')){
            setInfoBool(true)
        }else{
            setInfoBool(false)
        }
    }, [data, location])

    return (
        <div className={classes.root}>
            {info && info.map(infoRow => (
                <MainTitleBox
                    key = {infoRow.id}
                    infoRow = {infoRow}
                    setTitle = {setTitle}
                />
            ))}
        </div>
    );
}

export default MainTitleBoxes