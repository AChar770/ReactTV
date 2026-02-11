import { useState } from "react";
import { tvShows } from "../src/shows/data.js";
import ShowDetails from "../src/shows/ShowDetails.jsx";
import ShowSelection from "../src/shows/ShowSelection.jsx";
/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [showList] = useState(tvShows);
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      <header>
        <p>ReactTV</p>
        <ShowSelection shows={showList} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} key={selectedShow?.name} />
      </main>
    </>
  );
}
