import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import ErrorHandleComp from '../reuseable/ErrorHandleComp';
import Loading from '../reuseable/Loading';
import Like from './Like';

function SinglePost({ post, error,loading }) {
    // single post component for diplaying single post 
    return (
        error ? <ErrorHandleComp error={error} /> :
            <Box sx={{minHeight:"70vh"}}>
               {loading ? <Loading/>:
               (<><Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        width: "100%",
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: { xs: "1rem", lg: "1.7rem" },
                            mb: { xs: 1, lg: 3 },
                            width: "100%",
                            justifyContent: "center",
                            mt: { xs: 2, lg: 4 },
                        }}
                    >
                        <Box
                            component="span"
                            sx={{
                                height: { xs: "10px", lg: "15px" },
                                width: { xs: "10px", lg: "15px" },
                                backgroundColor: "black",
                                borderRadius: "50%",
                                marginRight: "6px",
                            }}
                        ></Box>
                        Hot Topic
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: "1.3rem", lg: "2.5rem" },
                            fontWeight: "bold",
                            textAlign: "center",
                            width: { xs: "90%", lg: "50%" },
                        }}
                    >
                        {post?.mainHeading && post?.mainHeading}
                    </Typography>
                    <Box
                        sx={{
                            width: "100%",
                            mt: 3,
                            objectFit: "cover",
                            overflow: "hidden",
                            mb: { xs: 2 },
                        }}
                    >
                        <img
                            style={{ width: "100%", height: "400px", objectFit: "cover" }}
                            src={post?.mainImage ? post?.mainImage : post?.mainImage}
                            alt="post image"
                        />
                    </Box>
                         <Box> <Like post={post}/></Box> 
                    <Container maxWidth="md" sx={{ mt: { xs: 2, lg: 4 } }}>
                        {post?.pH1 && <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: { xs: "1.5rem", lg: "2rem" },
                                textAlign: "justify",
                            }}
                        >
                            {post?.pH1}
                        </Typography>}
                        {post?.p1 && <Typography
                            sx={{
                                fontWeight: "regular",
                                mt: { xs: 1, lg: 2 },
                                textAlign: "justify",
                            }}
                        >
                            {post?.p1}
                        </Typography>}
                        {post?.pH1 && (
                            <Box
                                sx={{
                                    width: "100%",
                                    mt: 3,
                                    objectFit: "cover",
                                    overflow: "hidden",
                                    mb: { xs: 2 },
                                }}
                            >
                                <img
                                    style={{ width: "100%", height: "400px", objectFit: "cover" }}
                                    src={post?.imageP1 && p1t ? post?.imageP1 : post?.mainImage}
                                    alt="post image"
                                />
                            </Box>
                        )}
                        {post?.pH2 && <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: { xs: "1.5rem", lg: "2rem" },
                                textAlign: "justify",
                            }}
                        >
                            {post?.pH2}
                        </Typography>}
                        {post?.p2 && <Typography
                            sx={{
                                fontWeight: "regular",
                                mt: { xs: 1, lg: 2 },
                                textAlign: "justify",
                            }}
                        >
                            {post?.p2}
                        </Typography>}
                        {post?.pH2 && (
                            <Box
                                sx={{
                                    width: "100%",
                                    mt: 3,
                                    objectFit: "cover",
                                    overflow: "hidden",
                                    mb: { xs: 2 },
                                }}
                            >
                                <img
                                    style={{ width: "100%", height: "400px", objectFit: "cover" }}
                                    src={post?.imageP1 && p2t ? post?.imageP1 : post?.mainImage}
                                    alt="post image"
                                />
                            </Box>
                        )}
                        {post?.pH3 && <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: { xs: "1.5rem", lg: "2rem" },
                                textAlign: "justify",
                            }}
                        >
                            {post?.pH3}
                        </Typography>}
                        {post?.p3 && <Typography
                            sx={{
                                fontWeight: "regular",
                                mt: { xs: 1, lg: 2 },
                                textAlign: "justify",
                            }}
                        >
                            {post?.p3}
                        </Typography>}
                        {post?.cH && (
                            <Box
                                sx={{
                                    width: "100%",
                                    mt: 3,
                                    objectFit: "cover",
                                    overflow: "hidden",
                                    mb: { xs: 2 },
                                }}
                            >
                                <img
                                    style={{ width: "100%", height: "400px", objectFit: "cover" }}
                                    src={post?.imageP1 && p3t ? post?.imageP1 : post?.mainImage}
                                    alt="post image"
                                />
                            </Box>
                        )}
                        {post?.cH && <Typography
                            sx={{
                                fontWeight: "bold",
                                fontSize: { xs: "1.5rem", lg: "2rem" },
                                textAlign: "justify",
                            }}
                        >
                            {post?.cH}
                        </Typography>}
                        {post?.cP && <Typography
                            sx={{
                                fontWeight: "regular",
                                mt: { xs: 1, lg: 3 },
                                textAlign: "justify",
                                mb: { xs: 2, lg: 4 },
                            }}
                        >
                            {post?.cP}
                        </Typography>}
                    </Container>
                </Box>
                </>)}
            </Box>
    )
}

export default SinglePost