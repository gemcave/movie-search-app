import React from "react";
import Logo from "./Logo";
import Back from "./Back";

const MovieHeader = ({ isLogoSize, isBack }) => {
  return (
    <header>
      {isBack && <Back />}
      <Logo size={isLogoSize} />
    </header>
  );
};

export default MovieHeader;
