import { useSelector } from "react-redux";
import ReactAudioPlayer from "react-audio-player";

const BottomBarComponent = () => {
  const play = useSelector((state) => state.play.play);

  return play.album !== undefined ? (
    <div className="d-flex justify-content-between pb-0" id="bottom-bar">
      <div className="d-flex ml-3 align-items-center">
        <img id="album-cover-mini" src={play.album.cover} alt="" />
        <div className="pl-3" id="player-info">
          <p id="song-name-bottom" className="mb-0 text-truncate">
            {play.title}
          </p>
          <span className="mb-0" id="artist-name-bottom">
            {play.artist.name}
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-heart mx-3"
          viewBox="0 0 16 16"
        >
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-window-desktop"
          viewBox="0 0 16 16"
        >
          <path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-9Z" />
          <path d="M2.375 1A2.366 2.366 0 0 0 0 3.357v9.286A2.366 2.366 0 0 0 2.375 15h11.25A2.366 2.366 0 0 0 16 12.643V3.357A2.366 2.366 0 0 0 13.625 1H2.375ZM1 3.357C1 2.612 1.611 2 2.375 2h11.25C14.389 2 15 2.612 15 3.357V4H1v-.643ZM1 5h14v7.643c0 .745-.611 1.357-1.375 1.357H2.375A1.366 1.366 0 0 1 1 12.643V5Z" />
        </svg>
      </div>
      <div id="player-displayer" className="mt-3">
        <ReactAudioPlayer id="player" src={play.preview} autoPlay controls />
      </div>
      <div className="d-flex justify-content-center mt-4">
        <i className="bi bi-list"></i>
        <i className="bi bi-pc-display ml-5"></i>
        <i className="bi bi-arrows-angle-expand mx-5"></i>
      </div>
    </div>
  ) : (
    ""
  );
};

export default BottomBarComponent;
