import React from 'react';
import {NavLink, Link} from 'react-router-dom'
 function Header({isDarkMode,onToggleDarkMode}) {
  
const handleToggleDarkModeClick=(e)=>{
  onToggleDarkMode();
