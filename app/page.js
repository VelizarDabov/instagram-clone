"use client";
import Feed from "@/components/Feed";
import Header from "@/components/Header";
import { auth } from "../components/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "@/components/Login";
import Modal from "@/components/Modal";
export default function Home() {
  const [user] = useAuthState(auth);
  return (
    <main>
      {!user ? (
        <div className="w-full">
 <Login />
        </div>
       
      ) : (
        <>
          <Header />
          <Feed />
          <Modal />
        </>
      )}
      {/* Header */}

      {/* Footer */}
    </main>
  );
}
