import { createSlice } from "@reduxjs/toolkit";

const initialStateValue ="light";
// this component contains the useSlice method that houses the data for each reeducers
export const themeSlice  = createSlice({
    name: "themeMode",
    initialState:{value:initialStateValue},
    reducers: {
        // change colour method
        ChangeThemeMode: (state, action) => {
            state.value = action.payload;
        }
    }
});


export const {ChangeThemeMode}=themeSlice.actions;

export default themeSlice.reducer;
