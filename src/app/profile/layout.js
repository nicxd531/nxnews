"use client";
import React from "react";
import ProfileDrawerSm from "../../components/profile/ProfileDrawerSm";
import ProfilePanel from "../../components/profile/ProfilePanel";
import { Box, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";

function ProfilLayout({ children }) {
  // main layout page for Profile page
  const router = useRouter();
  // verify user signed it or redirectand then invoke
  const verify = async () => {
    const session = await getSession();
    if (!session) {
      router.replace("/");
    }
  };
  verify();
  return (
    <Box>
      <Divider
        sx={{
          mt: { xs: 2, lg: 6 },
          display: { xs: "none", lg: "block" },
          bgcolor: "grey",
        }}
      />
      <Box sx={{ display: { lg: "none" } }}>
        <ProfileDrawerSm />
      </Box>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "fit-content",
        }}
      >
        <ProfilePanel />
        <Divider
          orientation="vertical"
          variant="inset"
          sx={{
            minHeight: "160vh",
            display: { xs: "none", lg: "inline" },
            ml: 0,
            bgcolor: "grey",
          }}
        />
        <Box sx={{ width: { xs: "100%", lg: "80%" } }}>{children}</Box>
      </Box>
    </Box>
  );
}

export default ProfilLayout;
