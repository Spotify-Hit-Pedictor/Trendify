import "./help.scss";

const Help = () => {
  return (
    <div className="help">
      <div className="container">
        <h1>Tutorial</h1>
        <div className="docs">
          <span>
            Docs:
            <a href="https://www.youtube.com/watch?v=QX4d2uG4SRI">
              Website
            </a>,{" "}
            <a href="https://www.youtube.com/watch?v=QX4d2uG4SRI">ML model</a>
          </span>
        </div>
        <p>Following is an easy implementation of Trendify.</p>
        <div className="video">WILL BE ADDED SOON</div>
      </div>
      <div className="container">
        <h1>Contact us</h1>
        <div className="mail">
          <p>
            For any help, contributions and developments feel free to mail us
            <a href="http://mailto@satyabratojha04@gmail.com">
              satyabratojha04@gmail.com
            </a>
          </p>
        </div>
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.3760221131747!2d78.17195011422213!3d26.249456894647633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c6e5d32a4d53%3A0xf834069adc0c9b89!2sAtal%20Bihari%20Vajpayee%20Indian%20Institute%20of%20Information%20Technology%20and%20Management%20Gwalior!5e0!3m2!1sen!2sin!4v1678586559634!5m2!1sen!2sin"
            width="400"
            height="250rem"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Help;
