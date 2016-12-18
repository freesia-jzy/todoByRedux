/**
 * Created by grace on 16-12-18.
 */
import AppComponent from '../components/Main';
import { connect }  from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodo,deleteTodo,deleteAll} from '../actions';

const mapStateToProps=(state)=>{
  return{
    todos:state.todos
  }
};
const mapDispatchToProps=(dispatch)=>{
  const actions={
    addTodo,
    deleteTodo,
    deleteAll
  };
  const actionMap={actions:bindActionCreators(actions,dispatch)};

  return actionMap;
};
export default connect(mapStateToProps,mapDispatchToProps)(AppComponent)
