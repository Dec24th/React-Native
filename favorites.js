import * as ActionTypes from './ActionTypes';

export const favorites = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_FAVORITE:
      if (state.includes(action.payload)) {
        return state;
      }
      return state.concat(action.payload);

    case ActionTypes.DELETE_FAVORITE:
      return state.filter(favorite => favorite !== action.payload); //payload is campsite id, removing the campsites array is the campsite id. it creates a new [] with

    default:
      return state;
  }
};


/**
 * first import all actiontypes.
 * then setup the reducer function as an exported constant, named favorites, and into it's parameter list, were going to pass the state for the favorites, and initilize it into an empty array if it doesn't exist yet.
 * Also pass in the action.
 * Then inside the function body, set up a switch statement, and check for the action type.
 * if the action type is add favorite, then...well lets pause and think about what we want to do;
 * what we want to do here is store the IDs of the each favorited campsite in the state as an array.
 * then if a user tries to add a new favorite, well receive the id of the campsite that is being added as the payload of this add favorite action.
 * so, check if that campsite id already exists in the states array.
 * we can do that with the array methods includes.
 * the includes method takes a single argument in this case the action payload, and checks to see if it matches any of the items in the array.
 * if so, then it will return with a boolean value or true; otherwise, it will return false.
 * so here if the campsite id already exists in the array, then we are going to return the previous state since nothing needs to change.
 * Then if the campsite id doesnt already exists in the array, return a new state with the new favorite campsite id concatenated to the end of it.
 * remember concat array mathod.
 * concat makes a copyo fthe array that is acting upon, adds a new item to the end of it, then returns the new array without mutating the prevous array.
 * then set a default case, which returns the previous state.
 */