"use client";
import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { getUserData, updateUserProfile } from "../../../../client/request";
import { errorhandler } from "../../../../utils/common";
import AlertError from "../../../components/reuseable/AlertError";
import { AnimatePresence, motion } from "framer-motion";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AlertSuccess from "../../../components/reuseable/AlertSuccess";
import Loading from "../../../components/reuseable/Loading";
import EditProfile from "../../../components/profile/EditProfile";

function EditProfileMain() {
  // edit profile data main page
  // user data state
  const [userData, setUserData] = React.useState(null);
  // avatar section
  const [avatarImage, setAvatarImage] = React.useState("");
  const [err, setErr] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState("");
  // Basic info state
  const [name, setName] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [about, setAbout] = React.useState("");
  // personal info states
  const [occupation, setOccupation] = React.useState("");
  const [location, setLocation] = React.useState("");
  // personal info states
  const [email, setEmail] = React.useState("");
  const [linkUrl, setLinkUrl] = React.useState("");
  const [linkName, setLinkName] = React.useState("");
  const [instaUsername, setInstaUsername] = React.useState("");
  const [instaLink, setInstaLink] = React.useState("");
  const [twitterUsername, setTwitterUsername] = React.useState("");
  const [twitterLink, setTwitterLink] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const route = useRouter();
  const handleProfileUpdate = async () => {
    // new user data
    const data = {
      avatarImage,
      name,
      userName,
      about,
      occupation,
      location,
      email,
      linkUrl,
      linkName,
      instaUsername,
      instaLink,
      twitterUsername,
      twitterLink,
    };
    // handling request,setmessage to nothing ,set loading to tru ,get session ,if it failes route to home
    try {
      setMessage("");
      setLoading(true);
      const session = await getSession();
      if (!session) {
        route.replace("/");
      }
      // if session exist get id from session ,updat user and get result,set error to true and set message to update successful,the loading false
      const userId = await session.user.id;
      const result = await updateUserProfile({ data, userId });
      setError(true);
      setMessage("update successful");
      setLoading(false);
    } catch (errT) {
      // if error occurs handle it and set error to error and message to update failed
      const errorT = errorhandler(errT);
      setError(errorT);
      setMessage("update failed !!!");
    }
  };
  // use effect hook for getting  user data using id from session
  useEffect(() => {
    const get = async () => {
      const session = await getSession();
      if (!session) {
        route.replace("/");
      }
      const userId = await session.user.id;
      try {
        const result = await getUserData(userId);
        if (result.hasError) {
          setError(true);
          setMessage("failed to fetch user data");
        } else if (!result.hasError) {
          // states to dynamically add the main user data to the inputs
          setError(false);
          setUserData(result);
          setAvatarImage(result?.body?.avatarImage);
          setName(result?.body?.name);
          setUserName(result?.body?.userName);
          setAbout(result?.body?.name);
          setOccupation(result?.body?.occupation);
          setLocation(result?.body?.location);
          setLinkUrl(result?.body?.linkUrl);
          setLinkName(result?.body?.linkName);
          setInstaUsername(result?.body?.instaUsername);
          setInstaLink(result?.body?.instaLink);
          setTwitterUsername(result?.body?.twitterUsername);
          setTwitterLink(result?.body?.twitterLink);
          setEmail(result?.body?.email);
        }
      } catch (err) {
        setError(true);
        setMessage("failed to get user data");
      }
    };
    get();
  }, []);
  return (
    <>
      {userData ? (
        <Box sx={{ minHeight: "100vh", p: { lg: 4, xs: 2 } }}>
          <AnimatePresence>
            {error && (
              <motion.div
                exit={{ scale: 0.0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
              >
                {message == "update successful" ? (
                  <AlertSuccess message={message} />
                ) : (
                  <AlertError message={message} />
                )}
              </motion.div>
            )}
          </AnimatePresence>
          <EditProfile
            setAvatarImage={setAvatarImage}
            setErr={setErr}
            avatarImage={avatarImage}
            err={err}
            setName={setName}
            name={name}
            setUserName={setUserName}
            userName={userName}
            setAbout={setAbout}
            about={about}
            userData={userData}
            location={location}
            setLocation={setLocation}
            occupation={occupation}
            setOccupation={setOccupation}
            setLinkUrl={setLinkUrl}
            setLinkName={setLinkName}
            setInstaUsername={setInstaUsername}
            setInstaLink={setInstaLink}
            setTwitterUsername={setTwitterUsername}
            setTwitterLink={setTwitterLink}
            linkUrl={linkUrl}
            linkName={linkName}
            instaUsername={instaUsername}
            instaLink={instaLink}
            twitterUsername={twitterUsername}
            twitterLink={twitterLink}
            email={email}
            setEmail={setEmail}
          />
          <LoadingButton
            onClick={handleProfileUpdate}
            endIcon={<SendIcon />}
            loading={loading}
            loadingPosition="end"
            variant="contained"
            sx={{ ml: { xs: 2, lg: 7 }, mt: 4 }}
          >
            <span>save</span>
          </LoadingButton>
        </Box>
      ) : (
        <Box
          sx={{ height: "100vh", width: "100%", textAlign: "center", pt: 14 }}
        >
          {error ? <AlertError message={message} /> : <Loading />}
        </Box>
      )}
    </>
  );
}

export default EditProfileMain;
