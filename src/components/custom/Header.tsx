import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { handleSignInWithGoogle, handleSignOut } from "../../service/auth";
import { useLocalUser } from "../../hooks/useLocalUser";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const user = useLocalUser();

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 px-5 py-3 shadow-sm md:flex-nowrap">
      <Link to="/" className="flex-shrink-0">
        <img src="/icons/logo.svg" alt="logo" className="h-9 md:h-10" />
      </Link>

      <div className="flex flex-wrap items-center gap-3">
        {user ? (
          <>
            {/* Avatar */}
            {user.user_metadata?.avatar_url ? (
              <img
                src={user.user_metadata.avatar_url}
                alt="avatar"
                className="h-9 w-9 rounded-full border object-cover"
              />
            ) : (
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-300 text-sm font-semibold text-white">
                {user.email?.[0]?.toUpperCase()}
              </div>
            )}

            {/* My Trips Button */}
            <Link to="/my-trip">
              <Button variant="outline" className="rounded-full px-4 text-sm">
                My Trips
              </Button>
            </Link>

            {/* Create Trip */}
            <Link to="/create-trip">
              <Button variant="outline" className="rounded-full px-4 text-sm">
                + Create Trip
              </Button>
            </Link>

            {/* Sign Out */}
            <Button
              variant="destructive"
              onClick={handleSignOut}
              className="flex items-center gap-2 px-4 text-sm"
            >
              <FaSignOutAlt />
              Sign Out
            </Button>
          </>
        ) : (
          <Button onClick={handleSignInWithGoogle}>Sign In</Button>
        )}
      </div>
    </header>
  );
};

export default Header;
