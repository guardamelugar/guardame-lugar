import React from 'react'
import ReservasPageContainer from '../components/ReservasPageContainer'

class ReservasPage extends React.Component {

  state = {
    ...this.state,
  }

  render() {
    //garage_id viene de garagecomponent como this.props.location.state.garage_id
    const garage_id=this.props.location.state !== undefined ? this.props.location.state.garage_id : undefined;
    
    return <ReservasPageContainer garage_id={garage_id}/>;
  }
}

export default ReservasPage