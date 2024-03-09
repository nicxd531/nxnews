"use client";
import React from "react";
import { Alert, Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import { CreatePost } from "../../../../client/request";
import CreateMainHeader from "../../../components/profile/CreateMainHeader";
import HeadingsTemplate from "../../../components/profile/HeadingsTemplate";
import ConclusionInput from "../../../components/profile/ConclusionInput";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function CreateNews() {
  // create newws component
  const router = useRouter();
  // haedings  (P=paragraph,H=haeding,C= conclusion)
  const [mainH, setMainH] = React.useState("");
  const [categories, setCategories] = React.useState("");
  const [pH1, setPH1] = React.useState("");
  const [pH2, setPH2] = React.useState("");
  const [pH3, setPH3] = React.useState("");
  const [cH, setCH] = React.useState("");
  // paragraphs (P=paragraph,H=haeding,C= conclusion)
  const [p1, setP1] = React.useState("");
  const [p2, setP2] = React.useState("");
  const [p3, setP3] = React.useState("");
  const [cP, setCP] = React.useState("");
  // posting and add paragraphs
  const [posting, setPosting] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [showP1, setShowP1] = React.useState(false);
  const [showP2, setShowP2] = React.useState(false);
  const [showP3, setShowP3] = React.useState(false);
  // image inputs
  const [mainImage, setMainImage] = React.useState(null);
  const [imageP1, setImageP1] = React.useState(null);
  const [imageP2, setImageP2] = React.useState(null);
  const [imageP3, setImageP3] = React.useState(null);
  const handleFormSubmit = async (e) => {
    setError(false);
    setPosting(true);
    // getting session and user id and also arranging payload
    const session = await getSession();
    const userId = session.user.id;
    const payload = {
      mainHeading: mainH,
      categories: categories,
      mainImage: mainImage,
      pH1: pH1,
      p1: p1,
      imageP1: imageP1,
      pH2: pH2,
      p2: p2,
      imageP2: imageP2,
      pH3: pH3,
      p3: p3,
      imageP3: imageP3,
      cH: cH,
      cP: cP,
      user: userId,
    };
    // response reciver
    const result = await CreatePost(payload);
    // error handler
    if (result.hasError) {
      if (result.errorMessage.error.code) {
        setError("failed to connect to server . try again");
      } else {
        console.log(result.errorMessage.error,"nicx")
        if (result.errorMessage.error == "mainHeading required") {
          setError(" Main heading required");
        } else if (result.errorMessage.error == "categories required") {
          setError(" categoory required");
        } else if (result.errorMessage.error == "cP required") {
          setError(" conclsion paragraph required");
        }
        setPosting(result);
      }
    } else {
      setError("post sucessful")
      router.replace("/");
    }
    setPosting(false);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}
      >
        CREATE POST
        {error && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Alert
              severity={error == "post sucessful" ? "success" : "error"}
              sx={{
                width: "80%",
                fontSize: {
                  xs: "12px",
                  lg: "16px",
                  textTransform: "capitalize",
                },
                mt: 1,
              }}
            >
              {" "}
              {error}
            </Alert>
          </Box>
        )}
      </Typography>
      <form
        style={{ width: "100%" }}
        onSubmit={handleFormSubmit}
        encType="multipart/form-data"
      >
        <CreateMainHeader
          setMainH={setMainH}
          mainH={mainH}
          setMainImage={setMainImage}
          mainImage={mainImage}
          categories={categories}
          setCategories={setCategories}
        />
        <Box>
          <FormControlLabel
            control={
              <Switch value={showP1} onChange={() => setShowP1(!showP1)} />
            }
            label="Add Paragraph 1"
          />

          {showP1 && (
            <HeadingsTemplate
              p={"1"}
              setP={setP1}
              pData={p1}
              H={pH1}
              setH={setPH1}
              image={imageP1}
              setImage={setImageP1}
            />
          )}
        </Box>
        <Box>
          <FormControlLabel
            control={
              <Switch value={showP2} onChange={() => setShowP2(!showP2)} />
            }
            label="Add Paragraph 2"
          />
          {showP2 && (
            <HeadingsTemplate
              p={"2"}
              setP={setP2}
              pData={p2}
              H={pH2}
              setH={setPH2}
              image={imageP2}
              setImage={setImageP2}
            />
          )}
        </Box>
        <Box>
          <FormControlLabel
            control={
              <Switch value={showP3} onChange={() => setShowP3(!showP3)} />
            }
            label="Add Paragraph 3"
          />
          {showP3 && (
            <HeadingsTemplate
              p={"3"}
              setP={setP3}
              pData={p3}
              H={pH3}
              setH={setPH3}
              image={imageP3}
              setImage={setImageP3}
            />
          )}
        </Box>
        <ConclusionInput cH={cH} setCH={setCH} cP={cP} setCP={setCP} />
        <LoadingButton
          onClick={() => handleFormSubmit()}
          endIcon={<SendIcon />}
          loading={posting}
          loadingPosition="end"
          variant="contained"
          sx={{ ml: 2 }}
        >
          <span>Post Article</span>
        </LoadingButton>
      </form>
    </Box>
  );
}

export default CreateNews;
