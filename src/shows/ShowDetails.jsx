import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({show, setSelectedShow}) {
  const [selectedEpisode, setSelectedEpisode] = useState();

  if (!show) {
    return <p><strong>"Start: please choose a show"</strong></p>;
}

return (
  <div className="show-details">
    <EpisodeList
    name={show.name}
    episodes={show.episodes}
    selectedEpisode={selectedEpisode}
    setSelectedEpisode={setSelectedEpisode}
  />
  <EpisodeDetails episode={selectedEpisode} />
    </div>
);
}