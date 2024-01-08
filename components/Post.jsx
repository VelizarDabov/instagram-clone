"use client";
import React, { useEffect, useState } from "react";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import Moment from "react-moment";
const Post = ({ img, username, id, userImg, caption }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(
    () =>
      setHasLiked(likes.findIndex((like) => like.id === user[0]?.uid) !== -1),
    [likes]
  );

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      )[(db, id)]
  );

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", user[0].uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", user[0].uid), {
        username: user[0].displayName,
      });
    }
  };
  const user = useAuthState(auth);
  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: user[0].displayName,
      userImage: user[0].photoURL,
      timestamp: serverTimestamp(),
    });
  };
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db]
  );
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* header */}
      <div className="flex items-center p-5 ">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold ">{username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>
      {/* ímage */}
      <img src={img} alt="post img" className="object-cover w-full" />
      {/* buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          {hasLiked ? (
            <HeartIconFilled onClick={likePost} className="btn text-red-400" />
          ) : (
            <HeartIcon onClick={likePost} className="btn" />
          )}
          <HeartIcon onClick={likePost} className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* caption */}
      <div>
        <p className="p-5 truncate">
          {likes.length > 0 && (<p className="font-bold mb-1">{likes.length} likes</p>)}
          <span className="font-bold mr-1">{username}</span>
          {caption}
        </p>
      </div>
      {/* comments */}
      {comments.length > 0 && (
        <div className=" ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-center space-x-2 mb-3">
              <img
                src={comment.data().userImage}
                alt="comment img"
                className="h-7 rounded-full"
              />
              <p className="text-sm flex-1 ">
                <span className="font-bold">{comment.data().username}</span>{" "}
                {comment.data().comment}
              </p>
              <Moment className="pr-5 text-xs" fromNow>
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
      {user && (
        <form className="flex items-center p-4 ">
          <EmojiHappyIcon className="btn" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="border-none flex-1 outline-none"
          />
          <button
            type="submit"
            disabled={!comment}
            onClick={sendComment}
            className="font-semibold text-blue-400 cursor-pointer"
          >
            Post
          </button>
        </form>
      )}

      {/* input box */}
    </div>
  );
};

export default Post;
