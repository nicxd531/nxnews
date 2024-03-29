import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { Box, Paper, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

function Movies({ movie }) {
    return (
        <Box sx={{ position: "absolute", top: {xs:180,lg:450}, height:{ xs:"150px",lg:"220px"}, width: "100%" }}>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >{movie.map((data, index) => {
                return (

                    <SwiperSlide key={index} style={{ width: "120px", borderRadius: "5px",position:"relative" }}>
                        <img style={{ height: "100%", width: "100%", borderRadius: "5px" }} src={data?.image} />
                        <Paper className="bg" sx={{pb:{lg:1},color:"white",position:"absolute",top:160,width:"100%",height:"20%%",display:"flex",justifyContent:"",alignItems:"center",flexDirection:"column"}}>
                            <Typography>{data.title}</Typography>
                            <Typography>Genres: {data.genres}</Typography>
                            <Rating value={data.ratings} readOnly />
                        </Paper>
                    </SwiperSlide>

                )
            })
                }

            </Swiper>
        </Box>
    )
}

export default Movies