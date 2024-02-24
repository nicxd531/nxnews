"use client"
import React from "react"
  const useThemeHooks =()=>{
    const [themeMode, setThemeMode] = React.useState(false)
    return{themeMode,setThemeMode}
}
export default useThemeHooks;