/**
 * Created by grace on 16-12-18.
 */
'use strict';

import {ADD_TODO,DELETE_TODO,DELETE_ALL} from '../actions/const';
import {combineReducers} from 'redux';

const initalState=['lalala','lalalala'];

function todos(state=initalState,action) {
  let index=action.index;
  switch (action.type){
    case ADD_TODO:
      return [action.con,...state];
    case DELETE_TODO:
      return [...state.slice(0,index),...state.slice(index+1)]
    case DELETE_ALL:
      return [];
    default:
      return state;
  }
}
const todoApp=combineReducers({
  todos
});

export default todoApp;
