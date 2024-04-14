import ThemeRegistry from "../components/reuseable/ThemeRegistry";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBar from "../components/appbar/AppBar";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import Footer from "../components/appbar/Footer";
import { StoreProvider } from "../../client/context";
import "@uploadthing/react/styles.css";
import { Box } from "@mui/material";

export const metadata = {
  title: "Nxnews",
  description: "News website created by Ola Olasukanmi to deliver updated news for users"
};


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <ThemeRegistry>
        <body suppressHydrationWarning={true} style={{width:"100vw"}}>
          <ScopedCssBaseline>
            <StoreProvider>
              <AppBar />
              <Box sx={{pt:{xs:5,lg:5}}}>
                 {children}
              </Box>
              <Footer />
            </StoreProvider>
          </ScopedCssBaseline>
        </body>
      </ThemeRegistry>
    </html>
  );
}
