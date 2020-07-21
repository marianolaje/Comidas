import React, {useState} from 'react'

const Formulario = ({setBusquedaLetra}) => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })
    const [error, setError] = useState(false)

    //destructuring del State para colocarlo en los Values
    const {artista, cancion} = busqueda

    //funcion a cada input para leer su contenido
    const actualizarState = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    //consultar las APIS
    const buscarInformacion = e => {
        e.preventDefault()

        if(artista.trim()===''||cancion.trim()===''){
            setError(true)
            return
        }
        setError(false)

        //pasar al componente principal
        setBusquedaLetra(busqueda)
    }

    return(
        <div className="bg-info">
            {error ? <p className="alert alert-danger text-center p-2">Fill every label</p> : null}
            <div className="container">
                <div className="row">
                    <form
                        onSubmit={buscarInformacion}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Lyrics Song Search</legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artista"
                                            placeholder="Artist name"
                                            onChange={actualizarState}
                                            value={artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Song</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cancion"
                                            placeholder="Song name"
                                            onChange={actualizarState}
                                            value={cancion}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary float-right"
                            >Search
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario