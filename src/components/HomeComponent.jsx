import { useEffect } from "react";
import { Container, Alert, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAlbums } from "../redux/actions";
import SingleAlbumComponent from "./SingleSongComponent";

const HomeComponent = () => {
  const display = useSelector((state) => state.display);
  const search = useSelector((state) => state.search);
  const isLoading = useSelector((state) => state.display.isLoading);
  const isError = useSelector((state) => state.display.isError);
  //   const liked = useSelector((state) => state.liked.liked);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbums("iron maiden"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getAlbums(search.result));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  isError && (
    <Alert variant="danger" className="mr-2">
      We got an error, yare yare daze...
    </Alert>
  );

  return isLoading === true ? (
    <Spinner className="mr-2" animation="border" variant="success" />
  ) : (
    <div className="flex-grow-1" id="main">
      <div className="container-fluid" id="first-container">
        <h2 id="artist-name" className="text-white p-3">
          {display.songs.data[0].artist.name}:
        </h2>
        <h3 className="text-white">Songs</h3>
        <Container
          id="album-card-container"
          className="row justify-content-center pr-0"
        >
          {display.songs.data.map((song) => (
            <SingleAlbumComponent data={song} key={song.id} />
          ))}
        </Container>
      </div>
    </div>
  );
};

export default HomeComponent;
