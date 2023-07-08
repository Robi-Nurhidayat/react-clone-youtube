import React, { useEffect, useState } from "react";
import { fetchApi } from "../../utils/fetchApi";
import Sidebar from "./Sidebar";
import Videos from "./Videos";

const Feed = () => {
  const [selectcategory, setSelectCategory] = useState("Coding");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchApi(`search?part=snippet,id&q=${selectcategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectcategory]);

  return (
    <div className="flex flex-col sm:flex-row">
      <div className=" py-2 flex overflow-auto sm:flex-col sm:basis-3/12 sm:justify-start ">
        <Sidebar
          selectcategory={selectcategory}
          setSelectCategory={setSelectCategory}
          setVideos={setVideos}
        />
      </div>
      <div className="bg-gray-200 sm:basis-9/12">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
