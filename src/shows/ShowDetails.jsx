import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({show}) {
  return <div className="show-details"></div>;

  const [selectedEpisode, setSelectedEpisode] = useState();

  if (!show) {
    return <p><strong>"Please choose a show to see more"</strong></p>;
}

return 