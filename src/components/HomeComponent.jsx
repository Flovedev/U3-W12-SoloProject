import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAlbums } from "../redux/actions";
import SingleAlbumComponent from "./SingleSongComponent";

const HomeComponent = () => {
  const display = useSelector((state) => state.display);
  const search = useSelector((state) => state.search);
  const isLoading = useSelector((state) => state.display.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbums("iron maiden"));
    console.log(display);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getAlbums(search.result));
    console.log(search.result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return isLoading === true ? (
    "Loading"
  ) : (
    <div className="flex-grow-1" id="main">
      <div className="container-fluid" id="first-container">
        <h2 id="artist-name" className="text-white p-3">
          {display.songs.data[0].artist.name}:
        </h2>
        <h3 className="text-white">Songs</h3>
        <Container
          id="album-card-container"
          className="row justify-content-center"
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
