import "./create.scss";
import { useState } from "react";
import axios from "axios";

const Create = () => {
  const [verdict, setVerdict] = useState("HIT");

  // features with their initial values
  const [danceability, setDanceability] = useState(0.58);
  const [energy, setEnergy] = useState(0.75);
  const [loudness, setLoudness] = useState(-7);
  const [mode, setMode] = useState(0);
  const [speechiness, setSpeechiness] = useState(0.03);
  const [acousticness, setAcousticness] = useState(0.6);
  const [instrumentalness, setInstrumentalness] = useState(0.01);
  const [liveness, setLiveness] = useState(0.18);
  const [valence, setValence] = useState(0.26);
  const [tempo, setTempo] = useState(131);
  const [duration_ms, setDurationMs] = useState(308000);
  const [duration, setDuration] = useState(308);
  const [time_signature, setTime_Signature] = useState(4);
  const [sections, setSections] = useState(13);
  const [decade, setDecade] = useState(2000);
  const [odecade, setOdecade] = useState(2000);

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
    setDurationMs(parseFloat(event.target.value) * 1000);
  };
  const changeTime_Signature = (event) => {
    setTime_Signature(parseInt(event.target.value));
  };
  const changeSections = (event) => {
    setSections(parseInt(event.target.value));
  };
  const changeOdecade = (event) => {
    setOdecade(parseInt(event.target.value));
    setDecade(parseInt(event.target.value));
    if (decade === 2020) setDecade(2010);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      danceability,
      energy,
      loudness,
      mode,
      speechiness,
      acousticness,
      instrumentalness,
      liveness,
      valence,
      tempo,
      duration_ms,
      time_signature,
      sections,
      decade,
    };

    try {
      const response = await axios.post("http://localhost:5000/predict", data);
      console.log(response.data.verdict);
      if (response.data.verdict === "Hit") setVerdict("HIT");
      else setVerdict("FLOP");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="create">
      <div className="container">
        <h1>PARAMETERS</h1>
        <div className="allFeatures">
          <div className="features">
            <div className="feature">
              <p>Danceability : {danceability}</p>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={danceability}
                onChange={changeDanceability}
              />
            </div>
            <div className="feature">
              <p>Energy : {energy}</p>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={energy}
                onChange={changeEnergy}
              />
            </div>
            <div className="feature">
              <p>Loudness : {loudness}</p>
              <input
                type="range"
                min={-60}
                max={4}
                step={1}
                value={loudness}
                onChange={changeLoudness}
              />
            </div>
            <div className="feature">
              <p>Mode : {mode}</p>
              <input
                type="range"
                min={0}
                max={1}
                step={1}
                value={mode}
                onChange={changeMode}
              />
            </div>
          </div>
          <div className="features">
            <div className="feature">
              <p>Speechiness : {speechiness}</p>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={speechiness}
                onChange={changeSpeechiness}
              />
            </div>
            <div className="feature">
              <p>Acousticness : {acousticness}</p>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={acousticness}
                onChange={changeAcousticness}
              />
            </div>
            <div className="feature">
              <p>Instrumentalness : {instrumentalness}</p>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={instrumentalness}
                onChange={changeInstrumentalness}
              />
            </div>
            <div className="feature">
              <p>Liveness : {liveness}</p>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={liveness}
                onChange={changeLiveness}
              />
            </div>
          </div>
          <div className="features">
            <div className="feature">
              <p>Valence : {valence}</p>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={valence}
                onChange={changeValence}
              />
            </div>
            <div className="feature">
              <p>Tempo : {tempo}</p>
              <input
                type="range"
                min={0}
                max={250}
                step={1}
                value={tempo}
                onChange={changeTempo}
              />
            </div>
            <div className="feature">
              <p>Time_Signature : {time_signature}</p>
              <input
                type="range"
                min={0}
                max={5}
                step={1}
                value={time_signature}
                onChange={changeTime_Signature}
              />
            </div>
            <div className="feature">
              <p>Decade : {odecade}</p>
              <input
                type="range"
                min={1960}
                max={2020}
                step={10}
                value={odecade}
                onChange={changeOdecade}
              />
            </div>
          </div>
          <div className="numbers">
            <div className="feature">
              <p>Duration</p>
              <input type="number" value={duration} onChange={changeDuration} />
            </div>
            <div className="feature">
              <p>Sections</p>
              <input type="number" value={sections} onChange={changeSections} />
            </div>
          </div>
        </div>
        <div className="submit">
          <button onClick={handleSubmit}>SUBMIT</button>
          <p>
            verdict: <span className={verdict}>{verdict}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Create;
