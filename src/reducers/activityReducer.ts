import { Activity } from "../types"

export type ActivityAcitions =
    {type:'save-activity', payload:{newActivity:Activity}}

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
    if(action.type==='save-activity'){
        
    }
}