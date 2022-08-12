import {
  Box,
  ImageList,
  Stack,
  Typography,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React from "react";

function Imglist() {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];

  return (
    <Stack spacing={4}>
      <Typography variant="h4">Image List</Typography>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => {
          return (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          );
        })}
      </ImageList>

      {/* Woven image ist */}

      <ImageList variant="woven" sx={{ width: 500, height: 450 }} cols={3} gap={8}>
        {itemData.map((item) => {
          return (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar title={item.title}/>
            </ImageListItem>
          );
        })}
      </ImageList>

        {/* Masonry image list */}

       <Box sx={{ width: 500, height: 450,  overflowY:'scroll'}}>
        <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => {
          return (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
      </Box>   

    </Stack>
  );
}

export default Imglist;
