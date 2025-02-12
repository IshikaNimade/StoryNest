import React from "react";
import LoginButton from "../components/LoginButton";
import { IconButton, Box, Typography, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import "../styles/Home.css";
import blog from "../assets/blogBackground.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <Box className="content-box">
        <Stack
          direction={"row"}
          spacing={20}
          alignItems={"center"}
          justifyContent={"center"}
          paddingBottom={"4rem"}
        >
          <Typography
            variant="h6"
            fontWeight={"2rem"}
            fontFamily={"revert-layer"}
          >
            BIO
          </Typography>
          <Typography
            variant="h6"
            fontWeight={"2rem"}
            fontFamily={"revert-layer"}
          >
            PORTFOLIO
          </Typography>
          <Typography
            variant="h6"
            fontWeight={"2rem"}
            fontFamily={"revert-layer"}
          >
            PODCAST
          </Typography>
          <Typography
            variant="h6"
            fontWeight={"2rem"}
            fontFamily={"revert-layer"}
          >
            BLOG
          </Typography>
        </Stack>
        <Stack container spacing={2}>
          <Stack
            direction={"row"}
            alignItems={"flex-start"}
            justifyContent={"center"}
          >
            <Stack alignItems={"flex-start"} padding={"20px"}>
              <Typography variant="h2" fontFamily={"revert-layer"}>
                StoryNest
              </Typography>
              <Typography
                variant="h6"
                fontFamily={"revert"}
                sx={{ textAlign: "left" }}
              >
                StoryNest is a powerful blogging platform built for storytellers
                and writers. With an intuitive editor, seamless publishing, and
                SEO-friendly features, it helps you craft and share your stories
                effortlessly. Whether you're a seasoned blogger or just starting
                out, StoryNest connects your voice to the world. 🚀
              </Typography>
              <LoginButton />
            </Stack>
            <Stack className="image-container">
              <img src={blog} alt="StoryNest" className="image" />
            </Stack>
          </Stack>
        </Stack>
        <Stack alignItems={"flex-start"} paddingTop={"50px"}>
          <Typography fontWeight={"2rem"}>@IshikaNimade</Typography>
          <Stack direction={"row"}>
            <IconButton
              href="https://www.linkedin.com/in/ishikanimade/"
              target="_blank"
              rel="noopener noreferrer"
              color="black"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href="https://github.com/IshikaNimade"
              target="_blank"
              rel="noopener noreferrer"
              color="black"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href="https://ishikanimade.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              color="black"
            >
              <LanguageOutlinedIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default Home;
