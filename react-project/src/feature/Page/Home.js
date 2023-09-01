import React, { useState } from "react";
import PhotoSlide from "../Component/PhotoSlide";
import NovelMain from "../Component/NovelMain";
import OptionMain from "../Component/OptionMain";
import Navbar from "../Component/Navbar";
import useFetch from "../Hook/useFetch";

function Home({data,searchResults}) {

  return (
    <>
      
      <PhotoSlide />
      <OptionMain />
      {data && data.length > 0 ? (
        <NovelMain data={searchResults.length > 0 ? searchResults : data} />
      ) : (
        <div className="load">Loading Novels....</div>
      )}
    </>
  );
}

export default Home;
