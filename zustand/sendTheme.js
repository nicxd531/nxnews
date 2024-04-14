import {create} from "zustand"

const sendTheme = create((set)=>({
    selectedTheme:"light",
    selectTheme:(selectedTheme)=>set({selectedTheme})
}))

export default sendTheme