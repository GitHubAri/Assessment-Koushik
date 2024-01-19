import { createStore, combineReducers } from 'redux';
import registrationReducer from './reducers/registrationReducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
