import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="project">
        This project's purpose is to create a binary classification model that
        can predict whether a Spotify song will be a hit or a flop. There will
        be a web interface that allows users to search for songs, and then we
        will extract the features of those songs and use them for classification
        using the Spotify API. The model should correctly predict the class, and
        we will train our classification model using the Billboard Hot 100 as a
        benchmark.
      </div>
      <div className="creators">
        <span>Created by -</span>
        <div className="creator">Satyabrat Ojha</div>
        <div className="creator">Dev Kudawla</div>
        <div className="creator">Himanshu Sharma</div>
      </div>
    </div>
  );
};

export default About;
