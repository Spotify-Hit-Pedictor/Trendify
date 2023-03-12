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
      <h2>Created by -</h2>
      <div className="creators">
        <div className="creator">
          <span>Satyabrat Ojha</span>
          <p>Specialist @Codeforces, MERN Stack developer, ML Engineer</p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/satyabratojha/">linkedin</a>
            <a href="https://github.com/Satyabrat-Ojha">github</a>
          </div>
        </div>
        <div className="creator">
          <span>Dev Kudawla</span>
          <p>Competitive programmer, Android/Web developer, ML Engineer</p>
          <div className="socials">
            <a href="#">linkedin</a>
            <a href="https://github.com/devkudawla">github</a>
          </div>
        </div>
        <div className="creator">
          <span>Himanshu Sharma</span>
          <p>Specialist @Codeforces, 4-star @Codechef, ML Engineer</p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/himanshu-sharma-0130b2253/">
              linkedin
            </a>
            <a href="https://github.com/Himanshu-0502">github</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
