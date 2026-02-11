import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({show}) {
  return <div className="show-details"></div>;

  const [selectedEpisode, setSelectedEpisode] = useState();

  if (!show) {
    return <p><strong>"Please choose a show to see more"</strong></p>;
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