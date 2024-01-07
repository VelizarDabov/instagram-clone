import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";

const Feed = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/* Section */}
      <section className="col-span-2">
        {/* stories */}
        <Stories />
        {/* posts */}
        <Posts />
      </section>

      {/* section */}
      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed ">
 {/* mini profite */}
 <MiniProfile />
        {/* suggestions */}
        <Suggestions />
        </div>
       
      </section>
    </div>
  );
};

export default Feed;
