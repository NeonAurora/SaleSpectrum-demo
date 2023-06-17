import { useState } from "react";

const useFetchAudio = () => {
  const [audioData, setAudioData] = useState(null);

  const fetchAudio = async (transactionId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/client/customTrades/${transactionId}/audio`
      );
      if (!response.ok) {
        throw new Error("Error fetching audio");
      }
      const data = await response.json();
      setAudioData(data);
      return data;
    } catch (error) {
      console.error("Error fetching audio:", error);
      return null;
    }
  };

  return { audioData, fetchAudio };
};

export default useFetchAudio;
