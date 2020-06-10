import React from 'react';
import {connect} from 'react-redux'

const Preloader = ({loading}) => {
console.log('echooo')
    if (!loading) return null;
    return (<div className="preloader">
            {loading && <p>Loading, please wait &hellip;</p>}
          </div>)

}
function mapStateToProps(state) {
  return {
    loading: state.ajaxTask.queries > 0
  }

}

export default connect(mapStateToProps)(Preloader)
