"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import EditProfileBasicInfo from "../../../components/profile/EditProfileBasicInfo";
import PersonalInfo from "../../../components/profile/PersonalInfo";
import Socials from "../../../components/profile/Socials";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

function EditProfile() {
  // Basic info state
  const [name, setName] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [about, setAbout] = React.useState("");
  // personal info states
  const [occupation, setOccupation] = React.useState("");
  const [location, setLocation] = React.useState("");
  // personal info states
  const [link, setLink] = React.useState("");
  const [linkName, setLinkName] = React.useState("");
  const [instaUsername, setInstaUsername] = React.useState("");
  const [instaLink, setInstaLink] = React.useState("");
  const [twitterUsername, setTwitterUsername] = React.useState("");
  const [twitterLink, setTwitterLink] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  return (
    <Box sx={{ minHeight: "100vh", p: { lg: 4, xs: 2 } }}>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: { xs: "1.8rem", lg: "3rem" },
          }}
        >
          {" "}
          Edit your profile
        </Typography>
      </Box>
      <Box>
        <EditProfileBasicInfo
          name={name}
          setName={setName}
          userName={userName}
          setUserName={setUserName}
          about={about}
          setAbout={setAbout}
        />
        <PersonalInfo
          location={location}
          setLocation={setLocation}
          occupation={occupation}
          setOccupation={setOccupation}
        />
        <Socials
          setLink={setLink}
          setLinkName={setLinkName}
          setInstaUsername={setInstaUsername}
          setInstaLink={setInstaLink}
          setTwitterUsername={setTwitterUsername}
          setTwitterLink={setTwitterLink}
        />
      </Box>
      <LoadingButton
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
          sx={{ ml:{xs:1,lg:3 } ,mt:4}}
        >
           <span>save</span>
        </LoadingButton>
    </Box>
  );
}

export default EditProfile;
