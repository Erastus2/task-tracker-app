import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";



const Header = ({ title, onAdd, showAdd }) => {
 

  return (
 
      <header className="header">
        <h1> {title} </h1>
        <Button color={showAdd ? 'red':'green'} text={showAdd ? "close" :"Add"} onClick={onAdd} />
      
      </header>
      
     
  
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
Header.protoType = {
  title: PropTypes.string,
};
//  const styles ={
//   color:"red",
//   backgroundColor: "black"
//  }

export default Header;
