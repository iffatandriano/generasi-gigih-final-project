import React from "react";
// react router
import { Link } from "react-router-dom";
// material icons
import { PlusCircleIcon, HomeIcon } from "@heroicons/react/outline";
// prop-types
import PropTypes from "prop-types";

function Sidebar({ sidebarClickHandle, createPlaylist, list_playlist }) {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen">
      <div className="space-y-4">
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="logos spotify"
          className="h-14"
        />
        {/* <Link to="/" className="space-x-2"> */}
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={(e) => sidebarClickHandle(e, "homes")}
        >
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        {/* </Link> */}
        {/* <button
          onClick={(e) => sidebarClickHandle(e, "search")}
          className="flex items-center space-x-2 hover:text-white"
        >
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button> */}
        {/* <hr className="border-t-[0.1px] border-gray-900 mt-6" /> */}
        <button
          className="flex items-center space-x-2 hover:text-white"
          onClick={(e) => createPlaylist(e)}
        >
          {/* <Link to="/create-playlist"> */}
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create playlist</p>
          {/* </Link> */}
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <div className="mt-6 text-white">
          {list_playlist.map((list) => (
            <p key={list.id}>{list.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  list_playlist: PropTypes.array.isRequired,
  createPlaylist: PropTypes.func.isRequired,
  sidebarClickHandle: PropTypes.func.isRequired,
};

export default Sidebar;
