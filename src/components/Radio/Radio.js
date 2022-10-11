import "../../css/check.css";

export const Radios = () => (
  <>
    <label className="check">
      <input
        className="check__input"
        type="radio"
        name="group1"
        id="group1_1"
      />
      <svg
        className="check__ico"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="4" />
      </svg>
    </label>

    <label className="check">
      <input
        className="check__input"
        type="radio"
        name="group1"
        id="group1_2"
        defaultChecked
      />
      <svg
        className="check__ico"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="4" />
      </svg>
    </label>
  </>
);
