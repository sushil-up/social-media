"use client";
import React from "react";
import RecipeReviewCard from "@/components/Posts";
import PageTitle from "@/components/PageTitle";

function Page() {
  return ( <>    <div style={{ position: "fixed",left: "240px",top: "74px" }} >
    <PageTitle title="Current Posts" />
  </div>
    <div
      style={{
        height: "250px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
        <RecipeReviewCard />
      </div>
    </div></>

  );
}

export default Page;
