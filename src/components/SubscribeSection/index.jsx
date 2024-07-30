"use client";
import React, { useEffect, useState } from "react";
// import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";

const SubscribeSection = () => {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const channelID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
  const apiURL = process.env.NEXT_PUBLIC_YOUTUBE_API_URL;

  const [youtubeVideos, setYoutubeVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await fetch(
          `${apiURL}?key=${apiKey}&channelId=${channelID}&order=date&part=snippet`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        const videoList = data.items.map((video) => ({
          id: video.id.videoId,
          title: video.snippet.title,
          description: video.snippet.description,
          image: video.snippet.thumbnails.medium.url,
          url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
        }));
        setYoutubeVideos(videoList);
      } catch (error) {
        console.error("An error occurred while fetching videos", error);
      }
    };

    getVideos();
  }, [apiURL, apiKey, channelID]);

  return (
    <div className="container mx-auto my-10 px-10 lg:px-0">
      <div className="text-4xl lg:text-5xl font-bold text-center lg:text-left mb-12 lg:ml-10">
        Our Youtube Videos
      </div>
      <div className="lg:ml-24 min-h-[300px]">
        {youtubeVideos.length > 0 ? (
          <ImageCarousel slides={youtubeVideos} />
        ) : (
          <p>No videos found</p>
        )}
      </div>
    </div>
  );
};

export default SubscribeSection;
