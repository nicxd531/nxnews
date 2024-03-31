import * as React from 'react';
import List from '@mui/material/List';
import { Paper ,Box, IconButton,Typography} from '@mui/material';
import Loading2 from "./Loading2"
import CloseIcon from '@mui/icons-material/Close';
import ErrorHandleComp from './ErrorHandleComp';
import Link from 'next/link';

export default function SearchResult({data,loading,error,setSearching ,width}) {
    // search bar for showing search results
    return (
        <Paper sx={{position:"absolute", width:{xs:"90%",lg:width.width,minHeight:"300px"},zIndex:"1800",left:{xs:20,lg:width.left},botom:-10}}>
            <Box sx={{width:"100%",display:"flex"}}>
                <IconButton onClick={()=>setSearching(false)}sx={{ml:"auto",mr:{xs:1,lg:2}}}>
                    <CloseIcon sx={{width:"24px",height:"24px"}}/>
                </IconButton>
            </Box>
           {loading ? <Box sx={{width:"100%",height:"100%"}}><Loading2/></Box>:
            error ? <ErrorHandleComp error={error}/>:
            (<List
                sx={{
                    width: '100%',
                    px:4,
                    maxWidth: {xs:360,lg:"100%"},
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': { padding: 0 },
                    pt:{xs:2}
                }}
                subheader={<li />}
            >
                
                <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", mt: { xs: 1, lg: 3 } }}>
                        {data?.map((data, index) => {
                            return (
                                <Box key={index} sx={{ width: { xs: "100%"}, height: { xs: "100px", lg: "100px" }, mb: 1, display: "flex" }}>
                                    <Link  href={`/post/${data?._id}/${data?.slug}`}>
                                        <IconButton sx={{textAlign:"start",color:"inherit",p:0,borderRadius:0,height:"100%",width:"100%"}}>
                                            <Box sx={{ width: "30%", height: "100%", objectFit: "cover" }}>
                                                <img src={data?.mainImage} alt='post image' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                            </Box>
                                            <Box sx={{ ml: 2, width: "69%" }} >
                                                <Typography variant="h5" sx={{ fontSize: { xs: "0.9rem", lg: "1.3rem" }, fontWeight: "bold", mb: {xs:1,lg:3} }}>{data?.mainHeading}</Typography>
                                                <Typography sx={{ fontWeight: "bold", fontSize: { xs: "0.7rem", lg: "1rem" } }}>{data?.createdAt}<span className='text-muted'>- 15 minutes ago</span></Typography>
                                            </Box>
                                        </IconButton>
                                    </Link>
                                </Box>
                            )
                        })

                        }
                    </Box>
            </List>)}
        </Paper>
    );
}