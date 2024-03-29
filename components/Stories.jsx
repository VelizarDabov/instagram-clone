"use client";
import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
const Stories = () => {
  const user = useAuthState(auth);

  const [users, setUser] = useState([]);
  useEffect(() => {
    const createRandoUser = () => {
      return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        // email: faker.internet.email(),
        avatar: faker.image.avatar(),
        // password: faker.internet.password(),
        // birthdate: faker.date.birthdate(),
        // registeredAt: faker.date.past(),
      };
    };
    const users = faker.helpers.multiple(createRandoUser, {
      count: 20,
    });
    setUser(users);
  }, []);
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm  overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {user && (
        <Story
          key={user.displayName}
          img={user[0].photoURL}
          userName={user[0].displayName}
        />
      )}
      {users.map((user) => (
        <Story key={user.userId} img={user.avatar} userName={user.username} />
      ))}
    </div>
  );
};

export default Stories;
