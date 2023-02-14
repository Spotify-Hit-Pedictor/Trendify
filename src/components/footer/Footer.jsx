import "./footer.scss";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className="left">
        CopyRight © {year} Trendify. All rights reserved.
      </div>
      <div className="right">Made with ❤️ by Satya, Dev & Himanshu</div>
    </footer>
  );
};

export default Footer;
