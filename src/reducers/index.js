import {combineReducers} from 'redux';
import ProjectReducer from './reducer-projects';
import ActiveProjectReducer from './reducer-active-project'

const allReducers = combineReducers({
  projects: ProjectReducer,
  active: ActiveProjectReducer
});

export default allReducers;
