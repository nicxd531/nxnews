import { Alert, Box } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'

function AlertSuccess({ message }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
      }}
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{delay:0.2,type:"spring",stiffness:120}}
        style={{width:"100%",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}
        
      >
        <Alert
          severity={"success"}
          sx={{
            width: "80%",
            fontSize: { xs: "12px", lg: "16px", textTransform: "capitalize" },
            mt: 1,
          }}
        >
          {message}
        </Alert>
      </motion.div>
    </Box>
  )
}

export default AlertSuccess