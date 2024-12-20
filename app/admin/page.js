"use client";
import * as React from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Box, Grid, Link, Typography } from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import ForumIcon from "@mui/icons-material/Forum";

import BasicCard from "@/components/Cards";
import PageTitle from "@/components/PageTitle";

export default function IconBoxes() {
  return (
    <> <div style={{ position: "fixed",left: "592px",top: "74px" }} >
    <PageTitle title="Users Data" />
  </div>
      <Grid container spacing={2} style={{marginTop : "38px"}} className=" text-xl bids-collunms ">
        <Grid item xs={2} md={3}>
          <Link href={""}>
            <Box  
              className="hover:bg-gray-400 bg-sky-600 text-white py-4 px-4 "
              onClick={() => GettingUserValue("Interview")}
            >
              <Typography component="div" className="flex justify-between pb-5">
                <Typography>
                  <ThumbUpAltIcon className="!text-7xl box-icon" />
                </Typography>
                <Typography className="!text-2xl title">
                  LIKES
                  <ArrowDropUpIcon />
                </Typography>
              </Typography>

              <Typography>11.4K </Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={4} md={3}>
          <Link href={""}>
            <Box
              className="hover:bg-gray-400 bg-red-700 text-white py-4 px-4"
              onClick={() => GettingUserValue("Hire")}
            >
              <Typography component="div" className="flex justify-between pb-5">
                <Typography>
                  <SubscriptionsIcon className="!text-7xl box-icon" />
                </Typography>
                <Typography className="!text-2xl title">
                  SUBSCRIBERS
                  <ArrowDropUpIcon />
                </Typography>
              </Typography>

              <Typography>3k</Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={3} md={3}>
          <Link href={""}>
            <Box
              className="hover:bg-gray-400 bg-green-700 text-white  py-4 px-4"
              onClick={() => GettingUserValue("Reject")}
            >
              <Typography component="div" className="flex justify-between pb-5">
                <Typography>
                  <GroupAddIcon className="!text-7xl box-icon" />
                </Typography>
                <Typography className="!text-2xl title">
                  FOLLOWERS
                  <ArrowDropUpIcon />
                </Typography>
              </Typography>

              <Typography>6.8K</Typography>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={4} md={3}>
          <Link href={""}>
            <Box
              className="hover:bg-gray-400 bg-pink-400 text-white py-4 px-4"
              onClick={() => GettingUserValue("New")}
            >
              <Typography
                component="div"
                className="flex justify-between pb-5 "
              >
                <Typography>
                  <ForumIcon className="!text-7xl box-icon" />
                </Typography>
                <Typography className="!text-2xl title">
                  MESSAGES
                  <ArrowDropUpIcon />
                </Typography>
              </Typography>

              <Typography>412</Typography>
            </Box>
          </Link>
        </Grid>
      </Grid>
{/* Card--------------- */}
      <Grid item xs={8} md={8}>
        <Box className="py-10 pe-96">
          <BasicCard />
        </Box>
      </Grid>

{/* Chart---------------- */}
      <Box>
      </Box>
    </>
  );
}
