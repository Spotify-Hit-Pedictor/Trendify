import "./create.scss";
import { useState } from "react";

const Create = () => {
  // features with their initial values
  const [Danceability, setDanceability] = useState(0.5);
  const [Energy, setEnergy] = useState(0.5);
  const [Loudness, setLoudness] = useState(0.5);
  const [Mode, setMode] = useState(0.5);
  const [Speechiness, setSpeechiness] = useState(0.5);
  const [Acousticness, setAcousticness] = useState(0.5);
  const [Instrumentalness, setInstrumentalness] = useState(0.5);
  const [Liveness, setLiveness] = useState(0.5);
  const [Valence, setValence] = useState(0.5);
  const [Tempo, setTempo] = useState(0.5);
  const [Duration, setDuration] = useState(0.5);
  const [Time_Signature, setTime_Signature] = useState(0.5);
  const [Sections, setSections] = useState(0.5);
  const [Decade, setDecade] = useState(0.5);

  const changeDanceability = (event) => {
    setDanceability(parseFloat(event.target.value));
  };
  const changeEnergy = (event) => {
    setEnergy(parseFloat(event.target.value));
  };
  const changeLoudness = (event) => {
    setLoudness(parseFloat(event.target.value));
  };
  const changeMode = (event) => {
    setMode(parseInt(event.target.value));
  };
  const changeSpeechiness = (event) => {
    setSpeechiness(parseFloat(event.target.value));
  };
  const changeAcousticness = (event) => {
    setAcousticness(parseFloat(event.target.value));
  };
  const changeInstrumentalness = (event) => {
    setInstrumentalness(parseFloat(event.target.value));
  };
  const changeLiveness = (event) => {
    setLiveness(parseFloat(event.target.value));
  };
  const changeValence = (event) => {
    setValence(parseFloat(event.target.value));
  };
  const changeTempo = (event) => {
    setTempo(parseFloat(event.target.value));
  };
  const changeDuration = (event) => {
    setDuration(parseFloat(event.target.value));
  };
  const changeTime_Signature = (event) => {
    setTime_Signature(parseInt(event.target.value));
  };
  const changeSections = (event) => {
    setSections(parseInt(event.target.value));
  };
  const changeDecade = (event) => {
    setDecade(parseInt(event.target.value));
  };

  return (
    <div className="create">
      <div className="container">
        <div className="feature">
          <p>Danceability : {Danceability}</p>
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={Danceability}
            onChange={changeDanceability}
          />
        </div>
        <div className="feature">
          <p>Energy : {Energy}</p>
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={Energy}
            onChange={changeEnergy}
          />
        </div>
        <div className="feature">
          <p>Loudness : {Loudness}</p>
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={Loudness}
            onChange={changeLoudness}
          />
        </div>
        <div className="feature">
          <p>Mode : {Mode}</p>
          <input
            type="range"
            min={0}
            max={1}
            step={1}
            value={Mode}
            onChange={changeMode}
          />
        </div>
        <div className="feature">
          <p>Speechiness : {Speechiness}</p>
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={Speechiness}
            onChange={changeSpeechiness}
          />
        </div>
        <div className="feature">
          <p>Acousticness : {Acousticness}</p>
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={Acousticness}
            onChange={changeAcousticness}
          />
        </div>
        <div className="feature">
          <p>Instrumentalness : {Instrumentalness}</p>
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={Instrumentalness}
            onChange={changeInstrumentalness}
          />
        </div>
        <div className="feature">
          <p>Liveness : {Liveness}</p>
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={Liveness}
            onChange={changeLiveness}
          />
        </div>
        <div className="feature">
          <p>Valence : {Valence}</p>
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={Valence}
            onChange={changeValence}
          />
        </div>
        <div className="feature">
          <p>Tempo : {Tempo}</p>
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={Tempo}
            onChange={changeTempo}
          />
        </div>
        <div className="feature">
          <p>Duration : {Duration}</p>
          <input
            type="range"
            min={0}
            max={1}
            step={0.1}
            value={Duration}
            onChange={changeDuration}
          />
        </div>
        <div className="feature">
          <p>Time_Signature : {Time_Signature}</p>
          <input
            type="range"
            min={0}
            max={1}
            step={1}
            value={Time_Signature}
            onChange={changeTime_Signature}
          />
        </div>
        <div className="feature">
          <p>Sections : {Sections}</p>
          <input
            type="range"
            min={0}
            max={1}
            step={1}
            value={Sections}
            onChange={changeSections}
          />
        </div>
        <div className="feature">
          <p>Decade : {Decade}</p>
          <input
            type="range"
            min={0}
            max={1}
            step={1}
            value={Decade}
            onChange={changeDecade}
          />
        </div>
      </div>
    </div>
  );
};

export default Create;
