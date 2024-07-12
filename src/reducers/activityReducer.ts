import { Activity } from "../types"

export type ActivityAcitions ={

}

export type ActivityState ={
    activities : Activity[]
}


export const initialState : ActivityState={
    activities:[]

}

export const activityReducer = (
    state:ActivityState =initialState,
    action:ActivityAcitions
)=>{

}