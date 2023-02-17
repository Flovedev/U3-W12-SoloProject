import { useEffect } from "react";
import { Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  displayLiked,
  addliked,
  removeLiked,
  addPlaySong,
} from "../redux/actions";

const SingleAlbumComponent = ({ data }) => {
  const liked = useSelector((state) => state.liked.liked);
  const dispatch = useDispatch();

  return (
    <div className="col-lg-4 flex-grow-1 cards-full">
      <div className="card mb-3 cards-omg">
        <div className="row no-gutters">
          <div className="col-4 d-inline-block">
            <img src={data.album.cover} alt="..." />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <h6 className="card-title  m-0">{data.title}</h6>
            <span className="card-title  m-0 mt-2">{data.album.title}</span>
          </div>
          {liked !== data ? (
            <Badge
              variant="info"
              className="badge"
              onClick={() => dispatch(displayLiked(data))}
            >
              Like
            </Badge>
          ) : (
            <Badge
              variant="danger"
              className="badge"
              onClick={() => dispatch(removeLiked(data))}
            >
              Dislike
            </Badge>
          )}
          <Badge
            variant="success"
            className="play-button"
            onClick={() => dispatch(addPlaySong(data))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-play-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default SingleAlbumComponent;
