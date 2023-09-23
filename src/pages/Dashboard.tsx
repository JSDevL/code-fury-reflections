import {useState} from "react";
import {useAuthState, useSignOut} from "react-firebase-hooks/auth";
import {auth} from "../firebase/app.ts";
import {Link, useNavigate} from "react-router-dom";
import {User} from "firebase/auth";
import {Logo} from "../components/Logo.tsx";

// Profile Dropdown
const ProfileDropDown = (props: { class: string; user: User }) => {
  const [signOut] = useSignOut(auth);

  const [state, setState] = useState(false);

  return (
    <div className={`relative ${props.class}`}>
      <div className="flex items-center space-x-4">
        <button
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
          onClick={() => setState(!state)}
        >
          <img
            src={
              props.user.photoURL ||
              `https://ui-avatars.com/api/?name=${
                props.user.displayName || props.user.email
              }`
            }
            className="w-full h-full rounded-full"
          />
        </button>
        <div className="lg:hidden">
          <span className="block">{props.user.displayName}</span>
          <span className="block text-sm text-gray-500">
            {props.user.email}
          </span>
        </div>
      </div>
      <ul
        className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        <li>
          <a
            className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
            onClick={signOut}
          >
            Log out
          </a>
        </li>
      </ul>
    </div>
  );
};

export const Dashboard = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
  }

  const [menuState, setMenuState] = useState(false);

  if (!user) {
    return <></>;
  }

  return (
    <nav className="bg-white border-b">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
        <div className="flex-none lg:flex-initial" style={{ width: "180px" }}>
          <Logo />
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div
            className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
              menuState ? "" : "hidden"
            }`}
          >
            <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              <li className="text-gray-600 hover:text-gray-900">
                <Link to={""}>Customers</Link>
              </li>
            </ul>
            <ProfileDropDown class="mt-5 pt-5 border-t lg:hidden" user={user} />
          </div>
          <div className="p-2 flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <ProfileDropDown class="hidden lg:block" user={user} />
            <button
              className="outline-none text-gray-400 block lg:hidden"
              onClick={() => setMenuState(!menuState)}
            >
              {menuState ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
