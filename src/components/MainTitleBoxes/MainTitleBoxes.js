import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom'
import {SwitchTitles} from '../../helper/SwitchFunctions'
import { makeStyles } from '@material-ui/core/styles';
import MainTitleBox from "../MainTitleBox/MainTitleBox";
import PropTypes from "prop-types";

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
        const url = location.pathname;
        if(data) {
            SwitchTitles({url, setInfo, data, country})
        }
        if(url.indexOf('/') !== url.lastIndexOf('/')) {
            setInfoBool(true)
        } else {
            setInfoBool(false)
        }
    }, [data, location])

    const boxComponent = () => {
        const resultInfo = info ?
            info.map((infoRow) => (
                <MainTitleBox
                    key = {infoRow.id}
                    infoRow = {infoRow}
                    setTitle = {setTitle}
                />
            ))
            : null
        return resultInfo
    }

    return (
        <div className={classes.root}>
            {boxComponent()}
        </div>
    );
}

MainTitleBoxes.propTypes = {
    data: PropTypes.object.isRequired,
    setInfoBool: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
    country: PropTypes.string.isRequired
}

export default MainTitleBoxes