import { Activity } from "../types";

export type ActivityAcitions =
  | { type: "save-activity"; payload: { newActivity: Activity } }
  | { type: "set-activiteId"; payload: { id: Activity["id"] } };

export type ActivityState = {
  activities: Activity[];
  activeId: Activity["id"];
};

export const initialState: ActivityState = {
  activities: [],
  activeId: "",
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityAcitions
) => {
  if (action.type === "save-activity") {
    console.log(action.payload.newActivity);

    return {
      ...state,
      activities: [...state.activities, action.payload.newActivity],
    };
  }

  if (action.type === "set-activiteId") {
    return {
      ...state,
      activeId: action.payload.id,
    };
  }
  return state;
};
