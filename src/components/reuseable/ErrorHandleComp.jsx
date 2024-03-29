import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import AlertError from "./AlertError";
import AlertSuccess from "./AlertSuccess";

function ErrorHandleComp({ error }) {
    // error handling component
    return (
        <>
            {error && (
                <AnimatePresence>
                    {error && (
                        <motion.div
                            exit={{ scale: 0.0 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                            style={{marginTop:"20px"}}
                        >
                            {error == "Log in sucessful" ? (
                                <AlertSuccess message={error} />
                            ) : (
                                <AlertError message={error} />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </>
    )
}

export default ErrorHandleComp