import * as ActionTypes from './ActionTypes';

export const campsites = (state = {
  isLoading: true,
  errMess: null,
  campsites: []
}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CAMPSITES:
      return { ...state, isLoading: false, errMess: null, campsites: action.payload };

    case ActionTypes.CAMPSITES_LOADING:
      return { ...state, isLoading: true, errMess: null, campsites: [] }

    case ActionTypes.CAMPSITES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};

/**
 *this module imports all the Action Types then it exports the campsites reducer, which takes the campsite section of the state, and intializet it with default function parameter syntax, if it already hasnot been intiialized.
 Thene it takes the action dispatched to it, depending onthe action, it creates and returns a new state. or if none of the actions matched, then it just returns the previous state without doing anything to it.
all of the reducer files work in this same way.
 *
 */