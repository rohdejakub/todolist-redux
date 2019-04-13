import {createStore } from 'redux'
import rootReducer from './reducers/root'
import {composeWithDevTools} from  'redux-devtools-extension'

export default function configureStore() {
 
const enhancers = []
const composedEnhancers = composeWithDevTools(...enhancers)

  return createStore(rootReducer, {} , composedEnhancers)
}