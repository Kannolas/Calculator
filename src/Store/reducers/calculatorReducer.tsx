import { createSlice } from "@reduxjs/toolkit";
import { CalculatorState } from "../../types/types";
import { log } from "console";

const initialState:CalculatorState={
    value:'0',
    history: ['', '', null],
}

const calculatorSlice= createSlice({
    name:'calculator',
    initialState,
    reducers:{
        equalAction: (state)=>{
            if(state.history[1]){
                if(state.history[2]){
                    state.history[0] = state.value
                    state.value = eval(`${state.value}${state.history[1]}${state.history[2]}`)
                }else{
                    state.history[2] = state.value
                    state.value = eval(`${state.history[0]}${state.history[1]}${state.history[2]}`)
                }
        }},


        updateValueWithNumber: (state, action:{payload:string})=>{
            if(state.history[2] == null)
            if(action.payload === '.'){
                if(!state.value.includes('.')){
                     state.value = `${state.value}${action.payload}`
                }
             }
             else{
                if(state.value==='0' && !action.payload.includes('.')){
                    state.value = `${action.payload}`
                }
                else{
                state.value = `${state.value}${action.payload}`}
            }

        },

        historyPush: (state, action:{payload:string})=>{
            if(!(state.history[0]===''))
            {
                if(state.history[2]!==null){
                    state.history[0]=state.value
                }else{
                state.history[0] = eval(`${state.history[0]}${state.history[1]}${state.value}`)
                }
                state.history[2] = null
                state.history[1] = action.payload
            }
            else{
            state.history[0] = state.value
            state.history[1] = action.payload
            console.log(state.history[2])
            if(state.history[2]!==null){
                state.history[2]= null
            }
        }
        },

        clearValue: (state)=>{
            state.value = '0'
        },

        clearAll: (state)=>{
            state.value = '0'
            state.history = ['', '', null]
        },

        changePrefix: (state)=>{
            if(state.value!=='0'){
                state.value = (state.value[0]==='-')?state.value.substring(1):`-${state.value}`
            }
        },

        updateValueActionDelX: (state)=>{
            state.value = eval(`1/${state.value}`)
            state.history = ['', '', null]
        },

        powerValue: (state)=>{
            state.value = eval(`${state.value}*${state.value}`)
            state.history = ['', '', null]
        },
        sqrtValue: (state)=>{
            state.value = Math.sqrt(parseFloat(state.value)).toString()
            state.history = ['', '', null]
        },
        removeLastSymbol: (state)=>{
            if(state.history[2] == null){
                state.value = state.value.substring(0, state.value.length - 1) 
            }
        }

    }
})
export const {equalAction, updateValueWithNumber, historyPush, clearValue, clearAll, changePrefix, updateValueActionDelX, powerValue, sqrtValue, removeLastSymbol}=calculatorSlice.actions
export default calculatorSlice.reducer