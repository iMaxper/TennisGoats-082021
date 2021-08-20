import React from 'react';
import './DataView.css';

function DataView(props) {
  return(
    <div className="view">
      <div className="view-column">
        <div className="player">
          <h1 className="player-text">{props.player.PLAYER_NAME}</h1>
        </div>
      </div>
      <div className="view-column">
        <div className="data-view">
          <div className="data-view-column left right">
            <div className="text">
              <h3 className="text-header">Grand Slams</h3>
            </div>
            <div className="text">
              <h2 className="text-data">{props.player.AUST_SLAMS}</h2>
              <h3 className="text-label">Australian Open</h3>
            </div>
            <div className="text">
              <h2 className="text-data">{props.player.FRENCH_SLAMS}</h2>
              <h3 className="text-label">French Open</h3>
            </div>
            <div className="text">
              <h2 className="text-data">{props.player.WIMBLEDON_SLAMS}</h2>
              <h3 className="text-label">Wimbledon</h3>
            </div>
            <div className="text">
              <h2 className="text-data">{props.player.USOPEN_SLAMS}</h2>
              <h3 className="text-label">US Open</h3>
            </div>
          </div>
          <div className="data-view-column right">
            <div className="text">
              <h3 className="text-header">Career Wins</h3>
            </div>
            <div className="text">
              <h2 className="text-data">{props.player.CAREER_TITLES}</h2>
              <h3 className="text-label">Career Titles</h3>
            </div>
            <div className="text">
              <h2 className="text-data">{props.player.TOTAL_SLAMS}</h2>
              <h3 className="text-label">Career Slams</h3>
            </div>
            <div className="text">
              <h2 className="text-data">{props.player.SLAMS_TO_TITLES_PCT}%</h2>
              <h3 className="text-label">Slams to Titles Pct</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataView;
