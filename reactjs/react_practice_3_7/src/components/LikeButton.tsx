import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div>
      <div className="flex items-center gap-2">
        <AiFillLike
          className={`${isLiked ? "text-red-500" : "text-black"}`}
          onClick={() => setIsLiked(!isLiked)}
        />
        <span className="text-sm">
          {isLiked
            ? "You liked this post"
            : "Click like if this post is useful to you !"}
        </span>
      </div>
    </div>
  );
};

export default LikeButton;
