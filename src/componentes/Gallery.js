import React, { useState, useEffect } from 'react';
import Profile from './Profile';

export default function Gallery() {
    return (
      <section>
        <h1>Grande compositores clássicos</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }