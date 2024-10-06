"use client";
import React, { useState } from 'react';
import Header from '../dashboard/_component/header';
import { UserInputContext } from '@/app/_context/UserInputContext';

function CreateCourseLayout({ children }) {
  const [userCourseInput, setUserCourseInput] = useState({}); // State initialized as an object

  return (
    <div>
      <UserInputContext.Provider value={{ userCourseInput, setUserCourseInput }}>
        <Header />
        {children}
      </UserInputContext.Provider>
    </div>
  );
}

export default CreateCourseLayout;
