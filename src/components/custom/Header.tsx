import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { handleSignInWithGoogle, handleSignOut } from "../../service/auth";
import { useLocalUser } from "../../hooks/useLocalUser";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const user = useLocalUser();
  return (
    <header className="flex items-center justify-between p-3 px-5 shadow-sm">
      <Link to="/">
        <div>
          <img src="/icons/logo.svg" alt="logo" />
        </div>
      </Link>
      <div className="flex items-center gap-4">
        {user ? (
          <div className="flex items-center gap-3">
            {user.user_metadata?.avatar_url && (
              <img
                src={user.user_metadata.avatar_url}
                alt="avatar"
                className="h-8 w-8 rounded-full border"
              />
            )}
            <span className="text-sm font-medium">
              {user.user_metadata?.full_name || user.email}
            </span>
            <Button
              variant={"destructive"}
              onClick={handleSignOut}
              className="flex items-center gap-1.5"
            >
              <FaSignOutAlt />
              Sign Out
            </Button>
          </div>
        ) : (
          <Button onClick={handleSignInWithGoogle}>Sign In</Button>
        )}
      </div>
    </header>
  );
};

export default Header;
