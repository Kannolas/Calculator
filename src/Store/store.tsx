import {configureStore} from '@reduxjs/toolkit' 
import calculatorReducer from './reducers/calculatorReducer'
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    calculatorReducer,
})
export const setupStore =()=>{
    return configureStore({
        reducer: rootReducer
    })
}

export type RootStore = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']