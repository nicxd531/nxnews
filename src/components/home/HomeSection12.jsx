import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function HomeSection12() {
    // home section 12 
    return (
        <Box sx={{p: {xs:2,lg:6}}}>
            <Box sx={{px:{xs:5,lg:30},textAlign:"center",color:"white", bgcolor: "grey", borderRadius: "10px",height:{xs:"300px",lg:"400px"},width:"100%",display:"flex",justifyContent:"center",alignItem:"center", flexDirection:"column"}}>
                <Typography variant='h3' sx={{fontSize:{xs:"1.5rem",lg:"4rem"}}}> Get The latest notifications and info from us </Typography>
                <Typography className="text-muted" sx={{mt:{xs:2,lg:4},fontSize:{xs:"0.8rem",lg:"1rem"}}}>Lorem ipsum dolor sit amet consectetur adipiscing, elit inceptos condimentum blandit dis, in neque praesent penatibus massa. Egestas rutrum ac per sociosqu tempor augue a neque, velit sagittis magnis nibh odio torquent quisque interdum nullam, mauris ad viverra curabitur morbi metus felis</Typography>
               <Link href={"/subscribe"}><Button variant='contained' sx={{borderRadius:"5px",width:"fit-content",bgcolor:"white",color:"black",mx:"auto",mt:{xs:2,lg:4}}}>Subscribe Now</Button></Link> 
            </Box>
        </Box>
    )
}

export default HomeSection12