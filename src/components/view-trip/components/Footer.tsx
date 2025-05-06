import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 text-center text-xl font-semibold text-gray-400">
      <h2>
        Created by Ansari Rashid &nbsp;
        <Link
          to="https://github.com/Rashid004/Ai-Trip-Planner"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline"
        >
          AI Trip Planer
        </Link>
      </h2>
    </footer>
  );
};

export default Footer;
