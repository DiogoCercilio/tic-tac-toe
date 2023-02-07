import React from 'react'
import { Link } from 'react-router-dom'
import SidebarTemplate from './styled/SidebarTemplate'

function Sidebar() {
  return (
    <SidebarTemplate>
        <ul>
            <li>
                <Link to={"/about"}>Link to Dummy Page (About)</Link>
            </li>
        </ul>
    </SidebarTemplate>
  )
}

export default Sidebar