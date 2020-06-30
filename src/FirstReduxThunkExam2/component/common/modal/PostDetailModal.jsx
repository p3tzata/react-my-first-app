import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';
import { withRouter} from 'react-router-dom'
import toastr from 'toastr';

import * as CustomError from '../../../Error/CustomError'
import * as PostActionCreator from '../../../store/actions/EntityAcctionCreator/PostActionCreator'
import Form from '../../common/HtmlForm/Form'
import InputFormField from '../../common/HtmlForm/InputFormField'
import InputFormSubmit from '../../common/HtmlForm/InputFormSubmit'

class PostDetailModal extends Component {

constructor(props) {


super(props)
this.state = {
      postId: 0,
      description: '',
    };


  var subtitle;
  //const [modalIsOpen,setIsOpen] = React.useState(false);
  ReactModal.setAppElement('#root')

this.onChangeSetState=this.onChangeSetState.bind(this)
this.onSubmit=this.onSubmit.bind(this)
this.handleCloseModal=this.handleCloseModal.bind(this)
}

onChangeSetState(e) {
  this.setState({[e.target.name]: e.target.value})
}





componentDidUpdate(prevProps, prevState){

  if ((Number(this.props.payload.postId) !== Number(this.state.postId)) && Number(this.props.payload.postId)>0 ) {
    console.log(this.props.payload.postId)
    this.setState({postId: this.props.payload.postId})


    this.getItem();
  }








}

getItem() {
  const promise =  this.props.appDispather.getItem(this.props.appState.account.user,{postId: Number(this.props.payload.postId)})
  promise
  .then(response => {const statusCodeIsOk = response.statusCodeIsOk;
     response.data.then( data => {
       if(statusCodeIsOk) {
        // console.log(data.description);
         this.setState({description: data.description})


        // toastr.success(data)

       } else {
         //toastr.error(data)
         console.log(data)
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


editItem() {
const  payload = {
  postId: Number(this.props.payload.postId),
  description: this.state.description,
  title: 'Title ' + this.state.description,
  url: 'testUrl'
  }

  const promise =  this.props.appDispather.editItem(this.props.appState.account.user,payload)
  promise
  .then(response => {const statusCodeIsOk = response.statusCodeIsOk;
     response.data.then( data => {
       if(statusCodeIsOk) {
        // console.log(data.description);
this.props.handlerHideModal();
this.handleCloseModal();
this.props.handleConsolideAfterEditing(data)

         //toastr.success(data)


       } else {
         toastr.error(data)
         console.log(data)
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




 handleCloseModal () {
   this.props.handlerHideModal();
   this.setState({ postId:0 });

 }

 onSubmit(e) {
   e.preventDefault();
   this.editItem();
 }





render() {
  const customStyles = {
    content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
    },
    overlay: {zIndex: 5}
  };

  return (
     <div>
       <button onClick={this.handleOpenModal}>Open Modal</button>

       <ReactModal

         isOpen={this.props.payload.isShow}
         style={customStyles}
         contentLabel="Example Modal"
       >

         <button onClick={this.handleCloseModal}>close</button>

         <Form className='form-inline my-2 my-lg-0' onSubmit={this.onSubmit}>
           <InputFormField
             label=''  id='description'  name='description'   type='text'

             value={this.state.description}
             onChangeSetState={this.onChangeSetState}
             />

             <InputFormSubmit
                 label='Edit'

                 />

         </Form>
       </ReactModal>
     </div>
   );


}


}


function mapStateToProps(state) {
  return {
    appState: state
  }

}


function mapDispatchToProps(dispatch) {
  return {appDispather: {
    getItem: (auth,paylaod) => {

    return  dispatch(PostActionCreator.getItem(auth,paylaod))
  },
  editItem: (auth,paylaod) => {
  return  dispatch(PostActionCreator.editItem(auth,paylaod))
  }
    }


  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PostDetailModal));
