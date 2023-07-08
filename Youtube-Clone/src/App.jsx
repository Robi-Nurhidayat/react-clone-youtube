import React from "react";
import { Routes, Route } from "react-router-dom";
import Feed from "./assets/components/Feed";
import SearchFeed from "./assets/components/SearchFeed";
import VideoDetails from "./assets/components/VideoDetails";
import Navbar from "./navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/search/:inputSearch" element={<SearchFeed />} />
      </Routes>
    </>
  );
};

export default App;
