import React, { useEffect } from "react";
import "../css/header.css";
// moon icon component
const MoonIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 0.347385C7.62202 0.49565 7.69677 0.6771 7.71459 0.868288C7.73242 1.05948 7.6925 1.25162 7.6 1.41988C6.87732 2.74673 6.49992 4.234 6.5025 5.74488C6.5025 10.7711 10.6 14.8411 15.65 14.8411C16.3088 14.8411 16.95 14.7724 17.5663 14.6411C17.7552 14.6002 17.9519 14.6159 18.132 14.6861C18.3121 14.7564 18.4675 14.8781 18.5787 15.0361C18.6962 15.2004 18.7561 15.399 18.7491 15.6008C18.7421 15.8027 18.6686 15.9966 18.54 16.1524C17.5596 17.3567 16.3228 18.327 14.9198 18.9926C13.5168 19.6582 11.9829 20.0023 10.43 19.9999C4.6675 19.9999 0 15.3574 0 9.63738C0 5.33238 2.6425 1.63988 6.405 0.0748848C6.59242 -0.00432534 6.80049 -0.0205829 6.99794 0.0285544C7.19539 0.0776917 7.37156 0.189571 7.5 0.347385V0.347385ZM6.0725 1.63863C4.62575 2.41467 3.4163 3.56819 2.57266 4.97659C1.72903 6.38499 1.28275 7.99565 1.28125 9.63738C1.28125 14.6624 5.38 18.7324 10.43 18.7324C11.6393 18.7345 12.837 18.4967 13.9538 18.0328C15.0706 17.5689 16.0843 16.8882 16.9362 16.0299C16.515 16.0824 16.0863 16.1086 15.65 16.1086C9.8875 16.1086 5.22125 11.4661 5.22125 5.74613C5.22125 4.28738 5.52375 2.89863 6.0725 1.63863V1.63863Z"
        fill="var(--text)"
        stroke="var(--text)"
      />
    </svg>
  );
};
const SunIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_5_13)">
        <path
          d="M10.0001 2.49996V1.66663M10.0001 18.3333V17.5M17.5001 9.99996H18.3334M1.66675 9.99996H2.50008M15.4167 4.58329L16.6667 3.33329M3.33341 16.6666L4.58341 15.4166M3.33341 3.33329L4.58341 4.58329M15.4167 15.4166L16.6667 16.6666"
          stroke="var(--text)"
          stroke-width="1.66667"
          stroke-linecap="round"
        />
        <path
          d="M10.0001 13.3333C11.841 13.3333 13.3334 11.8409 13.3334 9.99996C13.3334 8.15901 11.841 6.66663 10.0001 6.66663C8.15913 6.66663 6.66675 8.15901 6.66675 9.99996C6.66675 11.8409 8.15913 13.3333 10.0001 13.3333Z"
          stroke="var(--text)"
          strokeWidth="1.66667"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5_13">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default function Header() {
  // dark mode state
  // gte the theme from local storage if available  else set to dark
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "dark"
  );
  // toggle icon state
  const [toggleIcon, setToggleIcon] = React.useState(true);
  // toggle theme
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  // set the theme to local storage
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // dark mode function
  const darkModeHandler = () => {
    toggleTheme();
    setToggleIcon(!toggleIcon);
  };
  // dark mode class
  useEffect(() => {
    var root = document.querySelector(":root");
    if (theme === "dark") {
      root.style.setProperty("--bg", "var(--very-dark-blue)");
      root.style.setProperty("--text", "var(--white)");
      root.style.setProperty("--text-secondary", "var(--dark-gray)");
      root.style.setProperty("--element-hover", "var(--very-dark-blue-light)");
      root.style.setProperty("--element-active", "var(--very-dark-blue-light)");
      root.style.setProperty("--element-focus", "var(--very-dark-blue-light)");
      root.style.setProperty("--primary-bg", "var(--dark-blue)");
    } else if (theme === "light") {
      root.style.setProperty("--bg", "var(--very-light-gray)");
      root.style.setProperty("--text", "var(--very-dark-blue)");
      root.style.setProperty("--text-secondary", "var(--dark-gray)");
      root.style.setProperty("--element-hover", "var(--very-light-gray-light)");
      root.style.setProperty(
        "--element-active",
        "var(--very-light-gray-light)"
      );
      root.style.setProperty("--element-focus", "var(--very-light-gray-light)");
      root.style.setProperty("--primary-bg", "var(--white)");
    }
  });
  return (
    <div className="container">
      <div className="header">
        <h1 className="header__logo">Where in the world?</h1>
        <div
          className="theme-toggle"
          onClick={() => {
            darkModeHandler();
          }}
        >
          {toggleIcon ? <MoonIcon /> : <SunIcon />}
          <span>{theme} Mode</span>
        </div>
      </div>
    </div>
  );
}
