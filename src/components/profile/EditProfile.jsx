import React from 'react'
import { Box } from '@mui/material'
import AvatarMain from "./AvatarMain"
import EditProfileBasicInfo from "./EditProfileBasicInfo"
import PersonalInfo from "./PersonalInfo"
import Socials from "./Socials"

function EditProfile({
    setAvatarImage,
    setErr,
    avatarImage,
    err,
    setName,
    setUserName,
    setAbout,
    userData,
    location,
    setLocation,
    occupation,
    setOccupation,
    setLinkUrl,
    setLinkName,
    setInstaUsername,
    setInstaLink,
    setTwitterUsername,
    setTwitterLink,
    name,
    userName,
    about,
    linkUrl,
    linkName,
    instaUsername,
    instaLink,
    twitterUsername,
    twitterLink,
    email,
    setEmail

}) {
    // middle component for edit profile data page 
    return (
        <Box sx={{ px: { xs: 2, lg: 4 }, pt: 2 }}>
            <AvatarMain
                setAvatarImage={setAvatarImage}
                setErr={setErr}
                avatarImage={avatarImage}
                err={err}
            />
            <EditProfileBasicInfo
                setName={setName}
                setUserName={setUserName}
                setAbout={setAbout}
                userData={userData}
                name={name}
                userName={userName}
                about={about}
            />
            <PersonalInfo
                location={location}
                setLocation={setLocation}
                occupation={occupation}
                setOccupation={setOccupation}
                userData={userData}
            />
            <Socials
                setLinkUrl={setLinkUrl}
                setLinkName={setLinkName}
                setInstaUsername={setInstaUsername}
                setInstaLink={setInstaLink}
                setTwitterUsername={setTwitterUsername}
                setTwitterLink={setTwitterLink}
                userData={userData}
                linkUrl={linkUrl}
                linkName={linkName}
                instaUsername={instaUsername}
                instaLink={instaLink}
                twitterUsername={twitterUsername}
                twitterLink={twitterLink}
                email={email}
                setEmail={setEmail}
            />
        </Box>
    )
}

export default EditProfile