import { useEffect, useState, useRef } from "react";

import Fall from "./Fall";
import Spring from "./spring";
import Snowfall from "./snowFlakes";

const SEASONS = ["spring", "summer", "fall", "winter"];
const TRANSITION_DURATION = 1000;

export default function SeasonalEffect() {
  const [seasonIndex, setSeasonIndex] = useState(0);
  const [prevSeasonIndex, setPrevSeasonIndex] = useState(null);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPrevSeasonIndex(seasonIndex);
      setSeasonIndex((prev) => (prev + 1) % SEASONS.length);

      // Clear previous season after fade-out
      timeoutRef.current = setTimeout(() => {
        setPrevSeasonIndex(null);
      }, TRANSITION_DURATION);
    }, 7000); // 15 seconds per season

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [seasonIndex]);

  const renderSeason = (season, isFading = false) => {
    switch (season) {
      case "spring":
        return <Spring fadeOut={isFading} key={`${season}-${isFading}`} />;
      case "fall":
        return <Fall fadeOut={isFading} key={`${season}-${isFading}`} />;
      case "winter":
        return <Snowfall fadeOut={isFading} key={`${season}-${isFading}`} />;
      default:
        return null;
    }
  };

  return (
    <>
      {prevSeasonIndex !== null && renderSeason(SEASONS[prevSeasonIndex], true)}
      {renderSeason(SEASONS[seasonIndex], false)}
    </>
  );
}
