import { Box, Button, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import React from 'react'
import { deletePost } from '../../../client/request';
import Link from 'next/link';
import { DateTime } from 'luxon';

function UsersPosts({ data, revalidate, setRevalidate }) {
    // component for getting users specific post 
    // function for cutting down paragraph lenght
    function truncateText(text, maxLength) {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }
    // Parse the MongoDB date string into a DateTime object
    const dateTime = DateTime.fromISO(data?.createdAt);
    // Format the date as desired (e.g., 'May 1, 2022')
    const formattedDate = dateTime.toFormat('MMMM d, yyyy');
    // constant for likes length, long text,truncated text
    const longText = data.cP
    const truncatedText = truncateText(longText, 100); // Truncate to 100 characters
    // conditional statement for picking categories diaplay colours 
    const colour = data.categories
    let bgColor
    if (colour == "Sport") {
        bgColor = "#ffde37"
    } else if (colour == "Health") {
        bgColor = "#b64aef"
    } else if (colour == "Political") {
        bgColor = "#d83c3c"
    } else if (colour == "Business") {
        bgColor = "#54e0e2"
    } else if (colour == "Finance") {
        bgColor = "#df7c20"
    } else if (colour == "Life") {
        bgColor = "#28d01a"
    } else if (colour == "Entertainment") {
        bgColor = "#814de5"
    }
    // handler for deleting post 
    const HandleDelate = (id) => {
        deletePost(id)
        setRevalidate(revalidate + 1)

    }
    // constant for converting date
    const date = new Date(data?.createdAt).toLocaleDateString()
    return (
        <Box sx={{ width: { xs: "100%", lg: "32%" }, mt: 4, height: "100%" }}>
            <Box sx={{ position: "relative" }}>
                <Box sx={{ position: "relative", width: "100%", height: "170px", objectFit: 'cover' }}>
                    <Box sx={{ overFlow: "hidden", width: "100%", height: "100%" }}>
                        <img src={data.mainImage ? data.mainImage : "/images/no image.avif"} alt="post image" style={{ objectFit: 'cover', width: "100%", height: "100%", overFlow: "hidden" }} />
                    </Box>
                    {data.categories && <Box sx={{ height: "25px", backgroundColor: bgColor, position: "absolute", top: 0, right: 0, mr: 1, mt: 1, p: 1, color: "whitesmoke", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", px: 2 }}><Typography sx={{ textTransform: "capitalize", fontSize: { xs: "1rem", lg: "1rem" } }}> {data.categories}</Typography></Box>}
                    <Typography sx={{ position: "absolute", bottom: 0, mb: 1, ml: 1, fontSize: { xs: "0.9rem", lg: "1rem" }, color: "whitesmoke" }}>Ukraine, {formattedDate}</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                    {data.mainHeading && <Typography variant='h5' sx={{ fontWeight: "bold", width: "100%" }}> {data.mainHeading}</Typography>}
                    <Typography sx={{ fontSize: { xs: "0.9rem" }, textAlign: "justify", mt: 1 }}>{truncatedText}</Typography>
                    <Box className="d-flex" sx={{ mt: 2, justifyContent: "space-between", alignItems: "center" }}>
                        <Button variant='contained' sx={{ backgroundColor: "#000000", color: "whitesmoke", fontSize: { xs: "0.7rem" }, p: 1 }}> <Link href={`/post/${data?._id}/${data?.slug}`}>read more <ArrowOutwardIcon /></Link> </Button>
                        <Typography className="text-muted" sx={{ fontSize: "1rem" }}>likes {data.likes.length ? data.likes.length : 0}</Typography>
                        <IconButton aria-label="delete" onClick={() => HandleDelate(data._id)}>
                            <DeleteIcon className="deleteIcon" />
                        </IconButton>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default UsersPosts