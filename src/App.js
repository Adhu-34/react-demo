import React from "react";
import { Route, Routes } from 'react-router-dom'

import FavoritesPage from "./Pages/Favorites";
import NewMeetupPage from "./Pages/NewMeetup";
import AllMeetupsPage from "./Pages/AllMeetups";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="new-meetup" element={<NewMeetupPage />} />
        <Route path="favorites" element={<FavoritesPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
