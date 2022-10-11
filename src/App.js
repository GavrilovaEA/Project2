import logo from "./logo.svg";
import "./App.css";
import "./css/lib.css";

import { Buttons } from "./components/Button/Button";
import { Checks } from "./components/Check/Check";
import { Inputs } from "./components/Input/Input";
import { Radios } from "./components/Radio/Radio";
import { Searchbars } from "./components/Searchbar/Searchbar";
import { Dropdowns } from "./components/Dropdown/Dropdown";

const App = () => (
  <div>
    <div
      className="input-wrapper"
      style={{
        boxSizing: "border-box",
        position: "absolute",
        top: "0.625rem",
        left: "0.625rem",
        width: "21.875rem",
        height: "22.5rem",
        border: "0.0625rem dashed #8055FF",
        borderRadius: "0.3125rem",
        padding: "3rem",
      }}
    >
      <Inputs />
    </div>

    <div
      className="searchbar-wrapper"
      style={{
        boxSizing: "border-box",
        position: "absolute",
        top: "0.625rem",
        left: "25rem",
        width: "22rem",
        height: "12rem",
        border: "0.0625rem dashed #8055FF",
        borderRadius: "0.3125rem",
        padding: "3rem",
      }}
    >
      <Searchbars />
    </div>

    <div
      className="checkbox-wrapper"
      style={{
        boxSizing: "border-box",
        position: "absolute",
        top: "19.0625rem",
        left: "25rem",
        width: "6.5625rem",
        height: "4.0625rem",
        border: "0.0625rem dashed #8055FF",
        borderRadius: "0.6125rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "1.5rem",
      }}
    >
      <Checks />
    </div>

    <div
      className="radio-wrapper"
      style={{
        boxSizing: "border-box",
        position: "absolute",
        top: "19.0625rem",
        left: "35.625rem",
        width: "6.5625rem",
        height: "3.875rem",
        border: "0.0625rem dashed #8055FF",
        borderRadius: "0.3125rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "1.5rem",
      }}
    >
      <Radios />
    </div>

    <div
      className="button-wrapper"
      style={{
        boxSizing: "border-box",
        position: "absolute",
        top: "25rem",
        left: "0.9375rem",
        width: "36rem",
        height: "23.5rem",
        border: "0.0625rem dashed #8055FF",
        borderRadius: "0.3125rem",
        padding: "1.875rem",
      }}
    >
      <Buttons />
    </div>

    <div
      className="dropdown-wrapper"
      style={{
        boxSizing: "border-box",
        position: "absolute",
        top: "25rem",
        left: "38.75rem",
        width: "42rem",
        height: "32rem",
        border: "0.0625rem dashed #8055FF",
        borderRadius: "0.3125rem",
      }}
    >
      <Dropdowns />
    </div>
  </div>
);

export default App;
