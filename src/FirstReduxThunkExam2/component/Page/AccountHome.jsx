import React, { Component } from 'react';
import {connect} from 'react-redux'
import toastr from 'toastr';
import { withRouter} from 'react-router-dom'

import * as PostActionCreator from '../../store/actions/EntityAcctionCreator/PostActionCreator'
import * as AccountActionCreator from '../../store/actions/FrameWorkActionCreator/AccountActionCreator'
import * as CustomError from '../../Error/CustomError'
import Pagination from '../common/Pagination'
import PostCardBody from '../common/post/PostCardBody'
import Form from '../common/HtmlForm/Form'
import InputFormField from '../common/HtmlForm/InputFormField'
import InputFormSubmit from '../common/HtmlForm/InputFormSubmit'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import * as utilFunct from '../../Util/func'
import PostDetailModal from '../common/modal/PostDetailModal'


 class AccountHome extends Component {

 constructor(props) {
   super(props)
   this.state={posts: [],querySearchString:'',forceValidate:0,
     pageable: {pageSize:3,RequestPageNumber:0,ResponsePageNumber:0,totalPages:0},
     postModalPayload: {isShow:false, postId:0},

   };
   this.onChangeSetState=this.onChangeSetState.bind(this)
   this.onSubmit=this.onSubmit.bind(this)
   this.confirmDelete=this.confirmDelete.bind(this)
   this.consolidateAfterDeleting=this.consolidateAfterDeleting.bind(this);
   this.hideModalDetail=this.hideModalDetail.bind(this);
 }


 componentDidUpdate(prevProps, prevState) {
   //console.log({prev: prevState.pageable.pageSize})
  // console.log({curent: this.state})

   if (JSON.stringify(prevState.pageable.pageSize) !== JSON.stringify(this.state.pageable.pageSize) ||
   JSON.stringify(prevState.pageable.RequestPageNumber) !== JSON.stringify(this.state.pageable.RequestPageNumber) ||
   JSON.stringify(prevState.pageable.querySearchString) !== JSON.stringify(this.state.pageable.querySearchString) ) {

    if (this.state.querySearchString!='') {
     this.getItems({querySearchString: this.state.querySearchString,
       pageable: this.state.pageable,
     })
   } else {
     this.getItems({ pageable: this.state.pageable
     })
   }

   }


 }

 changeRequestPageNumber(RequestPageNumber) {
  // console.log(RequestPageNumber)

   this.setState(prevState =>{
            const newPageable=Object.assign({},prevState.pageable,{RequestPageNumber: RequestPageNumber })
            return{
              pageable : newPageable}
            });

 }


confirmDelete(postId) {
    confirmAlert({
       title: 'Confirm before submit',
       message: 'Are you sure to delete.',
       buttons: [
         {
           label: 'Yes',
           onClick: () => this.deleteItem({postId})
         },
         {
           label: 'No',
           onClick: null
         }
       ]
     });
}



componentDidMount(){

  this.props.appDispather.clear_redirect_to_home();
  this.getItems({pageable: this.state.pageable})


}

onSubmit(e) {
  e.preventDefault();
  this.setState({forceValidate: 1})
  if (this.validateForm()!==-1) {
      this.getItems({querySearchString: this.state.querySearchString,
        pageable: this.state.pageable,
        })
  }
}


onChangeSetState(e) {
  this.setState({[e.target.name]: e.target.value})
}


validateForm(){

  if (this.onValidate_querySearchString(this.state.querySearchString)===-1 ) {

         return -1;
      }
      return 1;

}


onValidate_querySearchString(text){

  if(Number(text.length)<2) {
    return -1;
  } else {
    return 1
  }

}


showModalDetail(postId){

  this.setState({postModalPayload: {isShow:true, postId:postId} });

}

hideModalDetail(){
console.log("debug")
  this.setState({postModalPayload: {isShow:false, postId:0} });

}

consolidateAfterEditing(payload) {
  console.log(payload);
  let sourceArray=this.state.posts;
  let executeSetState=(newArray) => {this.setState({posts: newArray})};
  let fndFunction = (e) => {return Number(e.postId)===Number(payload.postId)}
  utilFunct.consolidateAfterEditing(sourceArray,fndFunction,executeSetState,payload)

}




deleteItem(payload){
const promise =  this.props.appDispather.deleteItem(this.props.appState.account.user,payload)
promise
.then(response => {const statusCodeIsOk = response.statusCodeIsOk;
   response.data.then( data => {
     if(statusCodeIsOk) {
       //console.log(data.page.totalPages)
       this.consolidateAfterDeleting(payload.postId)
       toastr.success(data.message)

     } else {
       toastr.error(data.errorMsg)
     }


     //console.log(statusCodeIsOk)

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

consolidateAfterDeleting(postId) {

  let sourceArray=this.state.posts;
  let executeSetState=(newArray) => {this.setState({posts: newArray})};
  let fndFunction = (e) => {return Number(e.postId)===Number(postId)}
  utilFunct.consolidateAfterDeleting(sourceArray,fndFunction,executeSetState)

/*
  const fndIndex = sourceArray.findIndex( e => Number(e.postId)===Number(postId) );
  console.log(fndIndex);
  if (Number(fndIndex)>0) {
  let newArray;
  newArray=[...sourceArray.slice(0,fndIndex), ...sourceArray.slice(fndIndex+1)  ]
  executeSetState(newArray)
*/
  //this.setState({posts: newArray})



}





getItems(payload){
const promise =  this.props.appDispather.getItems(this.props.appState.account.user,payload)
promise
.then(response => {

const statusCodeIsOk = response.statusCodeIsOk;
   response.data.then( data => {
     if(statusCodeIsOk) {
       //console.log(data.page.totalPages)
       this.setState({posts: data._embedded.posts})
       this.setState(prevState =>{
                const newPageable=Object.assign({},prevState.pageable,{totalPages:data.page.totalPages },{ResponsePageNumber:data.page.number })
                return{
                  pageable : newPageable}
                })

     } else {
       toastr.error('There is some error')
     }


     //console.log(statusCodeIsOk)

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

         This is account home page<button onClick={() => {this.consolidateAfterDeleting(19)}}>consolidateAfterDeleting</button>

         <div className="container">
           <div className="row space-top">
             <div className="col-md-12">
               <h1>Welcome to Furniture System</h1>
               <p>Select furniture from the catalog to view details.</p>
              <Form className='form-inline my-2 my-lg-0' onSubmit={this.onSubmit}>
                <InputFormField
                  label=''  id='querySearchString'  name='querySearchString'   type='text'

                  value={this.state.querySearchString}
                  onChangeSetState={this.onChangeSetState}
                  isForceToValidate={this.state.forceValidate}
                  onValidate={() => this.onValidate_querySearchString(this.state.querySearchString)}
                  onValidatePositiveFeedBackText="This input value is valid"
                  onValidateNegativeFeedBackText="Please fill this input"
                  />

                  <InputFormSubmit
                      label='Search'

                      />

              </Form>




             </div>
           </div>
           <div className="row space-top">

             {this.state.posts.map( (el) =>  {
               //console.log(Number(el.author.id))
               return <div key={el.postId} className="col-md-4">
               <div className="card text-white bg-primary">
                 <PostCardBody  payload={el} onDetailClick={this.showModalDetail.bind(this)} onDeleteClick={this.confirmDelete} isDeleteable={Number(this.props.appState.account.user.UserId) === Number(el.author.id) ? 'true' : 'false' } />
               </div>
             </div>})

           }

           </div>
           <div className="row space-top">
             <div className="col-md-12">
               <Pagination onChangeRequestPageNumber={this.changeRequestPageNumber.bind(this)} pageable={this.state.pageable} maxForwardPage='2'/>
             </div>
           </div>
         </div>

<PostDetailModal payload={this.state.postModalPayload} handleConsolideAfterEditing={this.consolidateAfterEditing.bind(this)}  handlerHideModal={this.hideModalDetail} />


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
deleteItem: (auth,paylaod) => {
  return dispatch(PostActionCreator.deleteItem(auth,paylaod))
},
clear_redirect_to_home: () => {
  return dispatch(AccountActionCreator.clear_redirect_to_home())
}

      }


  }
}





export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AccountHome));
