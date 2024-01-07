import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";

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
      <section>
        {/* mini profite */}
        <MiniProfile />
        {/* suggestions */}
      </section>
    </div>
  );
};

export default Feed;
