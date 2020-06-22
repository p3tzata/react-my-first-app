import React, { Component } from 'react';
import {connect} from 'react-redux'


import * as PostActionCreator from '../../store/actions/EntityAcctionCreator/PostActionCreator'
import * as AccountActionCreator from '../../store/actions/FrameWorkActionCreator/AccountActionCreator'
import * as CustomError from '../../Error/CustomError'
import toastr from 'toastr';
import { withRouter} from 'react-router-dom'



 class AccountHome extends Component {


componentDidMount(){

  this.props.appDispather.clear_redirect_to_home();

}



getItems(){
const promise =  this.props.appDispather.getItems(this.props.appState.account.user,{})
promise
.then(response => {


   response.data.then( data => {
     console.log(data)

   }) })
.catch ((error) => {

if (error instanceof CustomError.TokenExpired) {
    toastr.error(error)
    this.props.history.push('/login')
} else {
  toastr.error('Error in action: ' + error)
}
} )


}

   render() {
       return <div>

         This is account home page<button onClick={this.getItems.bind(this)}>getItem</button>
         <div className="container">
           <div className="row space-top">
             <div className="col-md-12">
               <h1>Welcome to Furniture System</h1>
               <p>Select furniture from the catalog to view details.</p>
               <form className="form-inline my-2 my-lg-0">
                 <input
                   className="form-control mr-sm-2"
                   placeholder="Search"
                   type="text"
                 />
                 <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                   Search
                 </button>
               </form>
             </div>
           </div>
           <div className="row space-top">
             <div className="col-md-4">
               <div className="card text-white bg-primary">
                 <div className="card-body">
                   <blockquote className="card-blockquote">
                     <img alt="t" src="img/sofa.jpg" />
                     <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                       posuere erat a ante.
                     </p>
                     <footer>
                       Someone famous in
                       <cite title="Source Title">Source Title</cite>
                     </footer>
                     <div className="pull-right">
                       <a href="details.html" className="btn btn-info">
                         Details
                       </a>
                       <a href="/#" className="btn btn-danger">Delete Item</a>
                     </div>
                   </blockquote>
                 </div>
               </div>
             </div>
             <div className="col-md-4">
               <div className="card text-white bg-primary">
                 <div className="card-body">
                   <blockquote className="card-blockquote">
                     <img alt="t" src="img/sofa.jpg" />
                     <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                       posuere erat a ante.
                     </p>
                     <footer>
                       Someone famous in
                       <cite title="Source Title">Source Title</cite>
                     </footer>
                     <div className="pull-right">
                       <a href="details.html" className="btn btn-info">
                         Details
                       </a>
                       <a href="/#" className="btn btn-danger">Delete Item</a>
                     </div>
                   </blockquote>
                 </div>
               </div>
             </div>
             <div className="col-md-4">
               <div className="card text-white bg-primary">
                 <div className="card-body">
                   <blockquote className="card-blockquote">
                     <img alt="t" src="img/sofa.jpg" />
                     <p>
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                       posuere erat a ante.
                     </p>
                     <footer>
                       Someone famous in
                       <cite title="Source Title">Source Title</cite>
                     </footer>
                     <div className="pull-right">
                       <a href="details.html" className="btn btn-info">
                         Details
                       </a>
                       <a href="/#" className="btn btn-danger">Delete Item</a>
                     </div>
                   </blockquote>
                 </div>
               </div>
             </div>
           </div>
           <div className="row space-top">
             <div className="col-md-12">
               <ul className="pagination">
                 <li className="page-item disabled">
                   <a className="page-link" href="/#">
                     «
                   </a>
                 </li>
                 <li className="page-item active">
                   <a className="page-link" href="/#">
                     1
                   </a>
                 </li>
                 <li className="page-item">
                   <a className="page-link" href="/#">
                     2
                   </a>
                 </li>
                 <li className="page-item">
                   <a className="page-link" href="/#">
                     3
                   </a>
                 </li>
                 <li className="page-item">
                   <a className="page-link" href="/#">
                     4
                   </a>
                 </li>
                 <li className="page-item">
                   <a className="page-link" href="/#">
                     5
                   </a>
                 </li>
                 <li className="page-item">
                   <a className="page-link" href="/#">
                     »
                   </a>
                 </li>
               </ul>
             </div>
           </div>
         </div>;




      </div>



}


}

function mapStateToProps(state) {
  return {
    appState: state
  }

}


function mapDispatchToProps(dispatch,ownProps) {
  return {appDispather: {
   getItems: (auth,paylaod) => {

  return  dispatch(PostActionCreator.getItems(auth,paylaod))
},
clear_redirect_to_home: () => {
  return dispatch(AccountActionCreator.clear_redirect_to_home())
}

      }


  }
}





export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AccountHome));
