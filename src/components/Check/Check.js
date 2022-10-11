import "../../css/check.css";

export const Checks = () => (
  <>
    <label className="check">
      <input className="check__input" type="checkbox" />
      <svg
        className="check__ico"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" />
      </svg>
    </label>
    <label className="check">
      <input className="check__input" type="checkbox" defaultChecked />
      <svg
        className="check__ico"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" />
      </svg>
    </label>
  </>
);
