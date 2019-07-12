import React from "react";
import Logo from "./Logo";
import Back from "./Back";

const MovieHeader = ({ isLogoSize, isBack, toggleDetailsSection }) => {
  return (
    <header>
      {isBack && <Back toggleDetailsSection={toggleDetailsSection} />}
      <Logo size={isLogoSize} />
    </header>
  );
};

export default MovieHeader;
