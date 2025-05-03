import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-3 px-5 shadow-sm">
      <Link to="/">
        <div>
          <img src="/icons/logo.svg" alt="logo" />
        </div>
      </Link>
      <div>
        <Button>Sign in</Button>
      </div>
    </header>
  );
};

export default Header;
