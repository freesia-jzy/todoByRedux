/**
 * Created by grace on 16-12-18.
 */
'use strict';
import * as types from './const';

export const addTodo=(con)=>{
  return{
    type:types.ADD_TODO,
    con
  }
};

export const deleteTodo=(index)=>{
  console.log(1)
  return{
    type:types.DELETE_TODO,
    index
  }
};

export const deleteAll=()=>{
  return{
    type:types.DELETE_ALL
  }
};
