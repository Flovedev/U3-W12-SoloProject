const BottomBarComponent = () => {
  return (
    <div className="d-flex justify-content-between pb-0" id="bottom-bar">
      <div className="d-flex ml-3 align-items-center">
        <img
          id="album-cover-mini"
          src="data:image/png;base64,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"
          alt=""
        />
        <div className="pl-3" id="player-info">
          <p id="song-name-bottom" className="mb-0 text-truncate"></p>
          <span className="mb-0" id="artist-name-bottom"></span>
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
      <div id="player-displayer" className="mt-4">
        <audio
          controls
          autoPlay=""
          src=""
          id="audio-player"
          className="w-100"
        ></audio>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <i className="bi bi-list"></i>
        <i className="bi bi-pc-display ml-5"></i>
        <i className="bi bi-arrows-angle-expand mx-5"></i>
      </div>
    </div>
  );
};

export default BottomBarComponent;
