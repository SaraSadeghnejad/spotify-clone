import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.artistCardContainer}
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img
        alt="song_img"
        src={track?.images?.coverart}
        className={styles.artistImg}
      />
      <p className={styles.artistTitle}>
        {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
