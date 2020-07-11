import {combineReducers} from 'redux'
import {setTitle} from './custom'

const allReducers = combineReducers({
    title: setTitle
})

export default allReducers