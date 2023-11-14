import React from "react";
import { BsFillInboxesFill, BsFillCalendarWeekFill } from "react-icons/bs";
import { IoToday } from "react-icons/io5";

// TODO: Add icons to each items

export const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
      <li>
        <span>
          <BsFillInboxesFill />
        </span>
        <span> Inbox</span>
      </li>
      <li>
        <span>
          <IoToday />
        </span>
        <span> Today</span>
      </li>
      <li>
        <span>
          <BsFillCalendarWeekFill />
        </span>
        <span> Next week</span>
      </li>
    </ul>
    <div className="sidebar__middle">
      <h2> Projects</h2>
      </div>
    <ul className="sidebar__projects">Projects will be here!</ul>
  </div>
);
