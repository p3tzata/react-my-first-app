import React, { Component } from 'react';


export default class Pagination extends Component {





render()  {

const items = []
var i;
var fromPageNumber=Math.max(this.props.pageable.ResponsePageNumber-1,0);
var toPageNumber=Math.min(Number(this.props.pageable.ResponsePageNumber) + Number(this.props.maxForwardPage),
Number(this.props.pageable.totalPages)-1);
//console.log('fromPageNumber: '+fromPageNumber)
//console.log('toPageNumber: '+ toPageNumber)
for ( i = fromPageNumber; i <= toPageNumber; i++) {
//  console.log(i)
let c = i;
    items.push(<li key={i} className={Number(this.props.pageable.ResponsePageNumber)===i ? "page-item active":"page-item" }  >

                            <a className="page-link" href="/#" onClick={() => {this.props.onChangeRequestPageNumber(c)} } >{i}</a>
                        </li>)
  }

return (
  <ul className="pagination">
    <li className={Number(this.props.pageable.ResponsePageNumber)===0 ? "page-item disabled":"page-item" }  >
      <a className="page-link" href="/#" onClick={() => {this.props.onChangeRequestPageNumber(this.props.pageable.ResponsePageNumber-1)} }>
        «
      </a>
    </li>

    {items}

    <li className={(Number(this.props.pageable.totalPages)-1) ===Number(this.props.pageable.ResponsePageNumber) ? "page-item disabled":"page-item" }>
      <a className="page-link" href="/#" onClick={() => {this.props.onChangeRequestPageNumber(this.props.pageable.ResponsePageNumber+1)}}>
        »
      </a>
    </li>
  </ul>


)
}


}


function mapStateToProps(state) {
  return {
    appState: state
  }

}


function mapDispatchToProps(dispatch) {
  return {appDispather: {

    }


  }
}
