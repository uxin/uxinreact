import { combineReducers } from 'redux-immutable'      //将最外层转成Map对象
import indexReducer from "@/components/mian/router1/reducer";
import juReducer from "@/components/mian/router2/reducer";


export default combineReducers({
    indexReducer,
    juReducer,
})