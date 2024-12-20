"use client";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useSession } from "next-auth/react";
import RecipeReviewCard from "@/components/Posts";
import Header from "@/components/Header";
import BasicModal from "@/components/PopUp";
import PageTitle from "@/components/PageTitle";

export default function Home() {
  const { data: session } = useSession();
  const [adminCheck, setAdminCheck] = React.useState(false);
 

  React.useEffect(() => {
    if (session?.user?.email) {
      setAdminCheck(session.user.email === "pk@yopmail.com");
    }
  }, [session]);


  return (
    <Box sx={styles.container}>
      <Header />
      {!adminCheck ? <BasicModal  /> : ""}
      {!adminCheck ? (<>
         <div style={{ position: "fixed",left: "44px",top: "74px" }} >
         <PageTitle title="All Posts" />
       </div>
        <Box sx={styles.linkBox}>
      
          <div
            style={{
              justifyContent: "center",
              marginTop: "10px",
              height : "100%",
            }}
          >
            <RecipeReviewCard />
          </div>
          <br />
        </Box></>
      ) : (
        <Box sx={styles.linkBox}>
          <Box sx={styles.firstbox}>
            <Link href="/userposts">
              <span style={styles.link}>
                <Typography variant="h5" sx={styles.linkText}>
                  Users Post
                </Typography>
              </span>
            </Link>
          </Box>
          <Box sx={styles.secondbox}>
            <Link href="/admin">
              <span style={styles.link}>
                <Typography variant="h5" sx={styles.linkText}>
                  Admin Tool
                </Typography>
              </span>
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
}

// Inline CSS styles :)
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    Top : "20%"
  },
  linkBox: {
    height: "250px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",    
  },
  firstbox: {
    height: "250px",
    width: "250px",
    textAlign: "center",
    alignContent: "center",
    gap: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  secondbox: {
    height: "250px",
    width: "250px",
    alignContent: "center",
    textAlign: "center",
    gap: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  link: {
    textDecoration: "none",
  },
  linkText: {
    color: "#1976d2",
    "&:hover": {
      color: "#0d47a1",
    },
  },
};
