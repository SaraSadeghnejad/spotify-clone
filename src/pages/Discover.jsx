import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { genres } from '../assets/constants';
import styles from './styles.module.scss';
import { selectGenreListId } from '../redux/features/playerSlice';
import SongCard from '../components/SongCard';
import { useGetTopChartQuery } from '../redux/services/shazamCore';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Discover = () => {
  const dispatch = useDispatch(); 
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { genreListId } = useSelector((state) => state.player);
  const genreTitle = genres.find((item) => item.value === genreListId)?.title;
  const { data, isFetching, error } = useGetTopChartQuery(genreListId || 'POP');
  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  return (
    <div className={styles.container}>
      <h2 className={styles.genreTitle}>{genreTitle}</h2>
      <div className={styles.selectionContainer}>
        <select
          onChange={(e) => {
            dispatch(selectGenreListId(e.target.value));
          }}
          value={genreListId || 'pop'}
          className={styles.selector}
        >
          {genres.map((item, i) => (
            <option key={i} value={item.value}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.songCardContainer}>
        {data?.tracks?.map((song, i) => (
          <SongCard
            key={i}
            song={song}
            activeSong={activeSong}
            isPlaying={isPlaying}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
