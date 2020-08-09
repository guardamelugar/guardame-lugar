import React from 'react'
import GETLocalidades from '../DB Connection/GETLocalidades'

class ListadoLocalidades extends React.Component {

  state = {
    "localidades": null,
  }

  async componentDidMount() {

    /* busca la lista de localidades. si la prop filtrado es "filtrado" retorna solo las localidades
     en las cuales hay espacio para estacionar*/

    if (this.state.localidades === null || this.state.localidades === undefined) {
      const localidades = await GETLocalidades(this.props.filtrado);
      this.setState({
        ...this.state, "localidades": localidades
      });
    }
  }

  render() {

    if (this.state.localidades !== undefined && this.state.localidades !== null) {
      const localidades = this.state.localidades;
      return (
        <>
          <option value="">Elija una localidad...</option>
          {
            localidades.map((localidad) => {

              if (localidad.localidad_id !== parseInt(this.props.selected, 10)) {
                return (<option value={localidad.localidad_id}
                  key={localidad.localidad_id}>{localidad.nombre_localidad}</option>)
              }
              else return (<option selected value={localidad.localidad_id}
                key={localidad.localidad_id}>{localidad.nombre_localidad}</option>)
            }
            )
          }
        </>
      )
    } else {
      return (null);
    }
  }
}

export default ListadoLocalidades;