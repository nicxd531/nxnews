"use client"
import React, { useEffect } from 'react'
import { Box, createTheme } from '@mui/material'
import MiniAppBar from './MiniAppBar'
import MaxAppBar from './MaxAppBar'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import themeReducer from "../../app/redux/ThemeMode"
import { useStore } from '../../../client/context'
import { getValue } from '../../../utils/common'
import { getSession } from 'next-auth/react'
import { authConstant } from '../../../client/context/constant'



export const Store = configureStore({
    reducer: {
        theme: themeReducer
    }
})

function AppBar() {
    // main app bar component 
    const [state, dispatch] = useStore();
    // use effect for confirming authenticated
    React.useEffect(() => {
        const authenticated = getValue(state, ["user", "authenticated"], false);
        const check = async () => {
            if (!authenticated) {
                console.log("layou=>", authenticated)
                dispatch({ type: authConstant.LOGIN_REQUEST });

                const session = await getSession();
                if (session) {
                    dispatch({
                        type: authConstant.LOGIN_SUCCESS,
                        payload: session
                    })
                } else {
                    dispatch({
                        type: authConstant.LOGIN_FAILURE,
                        payload: session
                    })
                }
            }
        }
        check()
    },[])

    return (
        <Provider store={Store}>
            <Box sx={{ mt: 0 ,zIndex:1300,position:"fixed",width:"100%",top:0}}>
                <MiniAppBar />
                <MaxAppBar />
            </Box>
        </Provider>
    )
}

export default AppBar
