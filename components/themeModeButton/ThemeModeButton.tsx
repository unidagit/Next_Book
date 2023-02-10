import { useTheme } from "next-themes";
import Image from "next/image";
import Light from "../../images/light.svg";
import Dark from "../../images/dark.svg";
import React, { useEffect } from "react";

function ThemeModeButton() {
  const { theme, setTheme } = useTheme();
  console.log(theme);

  const themeModeHandle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (window.localStorage.getItem("theme") === "dark") {
      return setTheme("dark");
    } else {
      return setTheme("light");
    }
  }, [setTheme]);

  return (
    <>
      <button onClick={themeModeHandle}>
        {theme === "light" ? (
          <Image src={Dark} alt="a" width={24} />
        ) : (
          <Image src={Light} alt="a" height={24} width={24} />
        )}
      </button>
    </>
  );
}

export default ThemeModeButton;
