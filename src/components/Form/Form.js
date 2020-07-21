import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const problems = [
    {
        value: 'Transferencia no acreditada',
    },{
        value: 'Devolución de dinero Argentina',
    },{
        value: 'Devolución de dinero Chile',
    },{
        value: 'Devolución de dinero Mexico',
    },{
        value: 'Transferencia realizada desde un tercero Argentina',
    },{
        value: 'Transferencia realizada desde un tercero Chile',
    },{
        value: 'Transferencia realizada desde un tercero Mexico',
    },{
        value: 'Transferencia no acreditada Argentina',
    },{
        value: 'Transferencia no acreditada Chile',
    },{
        value: 'Transferencia no acreditada Mexico',
    },{
        value: 'Deuda no descontada Argentina',
    },{
        value: 'Deuda no descontada Chile',
    },{
        value: 'Deuda no descontada Mexico',
    },{
        value: 'Problema con Netflix',
    },{
        value: 'Problema con Verificacion de Correo',
    },{
        value: 'Problema con Registro',
    },
];
const motives = [
    {
        value: '-'
    },{
        value: 'Deuda no descontada'
    },{
        value: 'Devolución'
    },{
        value: 'Devolución Chile'
    },{
        value: 'Problemas con una recarga Argentina'
    },{
        value: 'Problemas con una recarga Chile'
    },{
        value: 'Problemas con verificación de email'
    },{
        value: 'Problemas con registro'
    }
];

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '90%',
            maxWidth: '400px',
        },
    },
}));

const Form = () => {
    const classes = useStyles();

    const [formType, setFormType] = useState('Transferencia no acreditada');
    const [email, setEmail] = useState('')
    const [motive, setMotive] = useState('-')
    const [description, setDescription] = useState('')

    const handleChange = (event) => {
        setFormType(event.target.value);
        setEmail(event.target.value)
        setMotive(event.target.value)
        setDescription(event.target.value)
    };

    return(
        <form
            className={classes.root}
            noValidate autoComplete="off"
            method="post"
            action=""
            enctype="multipart/form-data"
        >
            <h3>Enviar una solicitud</h3>
            <div>
                <TextField
                    id="problem-select"
                    select
                    variant="outlined"
                    label="Elija su problema a continuación"
                    value={formType}
                    onChange={handleChange}
                >
                    {problems.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="email"
                    variant="outlined"
                    label="Correo electrónico"
                    value={email}
                    onChange={handleChange}
                />
                <TextField
                    id="description"
                    multiline
                    rows={4}
                    variant="outlined"
                    label="Descripción"
                    value={description}
                    onChange={handleChange}
                    helperText="Ingrese los detalles de su solicitud. Un integrante de nuestro personal de soporte responderá a la brevedad"
                />
                <TextField
                    id="motive"
                    select
                    variant="outlined"
                    label="Motivo de solicitud"
                    value={motive}
                    onChange={handleChange}
                >
                    {motives.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>


            </div>
        </form>

    )
}
//TODO: poner SUBIR ARCHIVOS! usar pagina https://css-tricks.com/drag-and-drop-file-uploading/

export default Form