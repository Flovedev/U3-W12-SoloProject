import { useEffect } from "react";
import { Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { displayLiked, removeLiked } from "../redux/actions";

const SingleAlbumComponent = ({ data }) => {
  const liked = useSelector((state) => state.liked.liked);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(liked);
  }, [liked]);

  return (
    <div className="col-lg-4 flex-grow-1">
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
              variant="success"
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
        </div>
      </div>
    </div>
  );
};

export default SingleAlbumComponent;
