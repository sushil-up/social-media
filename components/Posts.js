"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// Styled component for the expand button
const ExpandMore = styled(({ expand, ...other }) => <IconButton {...other} />)(
  ({ theme, expand }) => ({
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    transform: expand ? "rotate(180deg)" : "rotate(0deg)",
  })
);

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [postData, setPostData] = React.useState([]);

  React.useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    setPostData(posts.reverse()); // Use reverse to avoid directly mutating `postData`
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function generateRandomColor() {
    const colors = [
      "green",
      "blue",
      "red",
      "yellow",
      "cyan",
      "orange",
      "magenta",
      "purple",
      "pink",
      "teal",
      "lime",
      "brown",
      "navy",
      "gold",
      "silver",
      "violet",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  return (
    <div style={{ height: "100%" }}>
      {postData.map((value, index) => (
        <Card key={index} sx={{ maxWidth: 345, marginBottom: 10 }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: generateRandomColor() }}
                aria-label="recipe"
              >
                {value?.title?.[0]?.toUpperCase() || "?"}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={value?.title || "No Title"}
            subheader={value?.date || "No Date"}
          />
          <CardMedia
            component="img"
            height="194"
            image={
              value?.image?.includes("fakepath") || !value?.image
                ? "/noimage.jpg"
                : value?.image
            }
            alt="Post image"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {value?.description || "No description provided."}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
              <Typography sx={{ marginBottom: 2 }}>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </div>
  );
}
