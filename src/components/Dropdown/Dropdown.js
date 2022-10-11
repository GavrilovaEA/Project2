import "../../css/dropdown.css";

export const Dropdowns = () => (
  <>
    <div
      className="dropdown-wrapper__checkbox"
      style={{
        position: "absolute",
        width: "10rem",
        left: "3rem",
        top: "3rem",
      }}
    >
      <div className="dropdown dropdown_list">
        <label className="check">
          <input className="check__input" type="checkbox" />
          <svg
            className="check__ico"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" />
          </svg>
          <span className="check__text">Новый</span>
        </label>
        <label className="check">
          <input className="check__input" type="checkbox" />
          <svg
            className="check__ico"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" />
          </svg>
          <span className="check__text">Рассчет</span>
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
          <span className="check__text">Подтвержден</span>
        </label>
        <label className="check">
          <input className="check__input" type="checkbox" />
          <svg
            className="check__ico"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" />
          </svg>
          <span className="check__text">Отложен</span>
        </label>
        <label className="check">
          <input className="check__input" type="checkbox" />
          <svg
            className="check__ico"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" />
          </svg>
          <span className="check__text">Выполнен</span>
        </label>
        <label className="check">
          <input className="check__input" type="checkbox" />
          <svg
            className="check__ico"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z" />
          </svg>
          <span className="check__text">Отменен</span>
        </label>
      </div>
    </div>

    <div
      className="dropdown-wrapper__radio"
      style={{
        position: "absolute",
        width: "10rem",
        left: "20rem",
        top: " 3rem",
      }}
    >
      <div className="dropdown dropdown_list">
        <label className="check">
          <input
            className="check__input"
            type="radio"
            name="cbStatus"
            id="cbStatus_1"
          />
          {/* <!--        <svg className="check__ico" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">-->
                <!--            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"/>-->
                <!--        </svg>--> */}
          <span className="check__text">Новый</span>
        </label>
        <label className="check">
          <input
            className="check__input"
            type="radio"
            name="cbStatus"
            id="cbStatus_2"
          />
          {/* <!--        <svg className="check__ico" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">-->
                <!--            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"/>-->
                <!--        </svg>--> */}
          <span className="check__text">Рассчет</span>
        </label>
        <label className="check">
          <input
            className="check__input"
            type="radio"
            name="cbStatus"
            id="cbStatus_3"
            defaultChecked
          />
          {/* <!--        <svg className="check__ico" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">-->
                <!--            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"/>-->
                <!--        </svg>--> */}
          <span className="check__text">Подтвержден</span>
        </label>
        <label className="check">
          <input
            className="check__input"
            type="radio"
            name="cbStatus"
            id="cbStatus_4"
          />
          {/* <!--        <svg className="check__ico" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">-->
                <!--            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"/>-->
                <!--        </svg>--> */}
          <span className="check__text">Отложен</span>
        </label>
        <label className="check">
          <input
            className="check__input"
            type="radio"
            name="cbStatus"
            id="cbStatus_5"
          />
          {/* <!--        <svg className="check__ico" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">-->
                <!--            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"/>-->
                <!--        </svg>--> */}
          <span className="check__text">Выполнен</span>
        </label>
        <label className="check">
          <input
            className="check__input"
            type="radio"
            name="cbStatus"
            id="cbStatus_6"
          />
          {/* <!--        <svg className="check__ico" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">-->
                <!--            <path d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"/>-->
                <!--        </svg>--> */}
          <span className="check__text">Отменен</span>
        </label>
      </div>
    </div>

    <div
      className="dropdown-wrapper__num-page"
      style={{
        position: "absolute",
        width: "10.3125rem",
        left: "3rem",
        top: "21.75rem",
      }}
    >
      <div className="dropdown">
        <div className="input input_empty">
          <label className="input__label">
            Номер страницы
            <div className="input__field">
              {/* <!--                <svg className="input__icoLeft" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">-->
                        <!--                    <path d="M10.0355 10.0355C11.9882 8.08291 11.9882 4.91709 10.0355 2.96447C8.08291 1.01184 4.91709 1.01184 2.96447 2.96447C1.01184 4.91709 1.01184 8.08291 2.96447 10.0355C4.91709 11.9882 8.08291 11.9882 10.0355 10.0355ZM10.0355 10.0355L14 14M14 14L14.5 13.5L11.5 10.5M14 14L13.5 14.5L10.5 11.5"-->
                        <!--                          fill="none"/>-->
                        <!--                </svg>-->
                        <!--                <span className="input__mask">старше</span>--> */}
              <input
                className="input__input"
                type="text"
                defaultValue=""
                placeholder="Введите номер"
              />
              <button className="input__button">
                <svg
                  className="input__icoRight input__icoRight-locked"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ stroke: "none" }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                    style={{ stroke: "none" }}
                  />
                  <path
                    d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                    style={{ stroke: "none" }}
                  />
                </svg>
                <svg
                  className="input__icoRight input__icoRight-x"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" />
                </svg>
              </button>
            </div>
          </label>
        </div>
      </div>
    </div>

    <div
      className="dropdown-wrapper__del-rec"
      style={{
        position: "absolute",
        width: "10.3125rem",
        left: "17rem",
        top: "21.75rem",
      }}
    >
      <div className="dropdown">
        <div className="dropdown__caption">Удалить n записей?</div>
        <button className="button button_small button_reverse button_width-all">
          {/* <!--                <svg className="button__ico" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">-->
<!--                    <path fill-rule="evenodd"-->
<!--                          d="M4 0L0 0L0 4H4V8H0L0 12H4V16H8V12H12V16H16V12H12V8H16V4H12V0L8 0V4H4V0ZM8 8H12V4H8V8ZM8 8H4V12H8V8Z"-->
<!--                          stroke="none"/>-->
<!--                </svg>--> */}
          <span className="button__text">Удалить</span>
        </button>
        <button className="button button_small button_width-all">
          {/* <!--                <svg className="button__ico" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">-->
<!--                    <path fill-rule="evenodd"-->
<!--                          d="M4 0L0 0L0 4H4V8H0L0 12H4V16H8V12H12V16H16V12H12V8H16V4H12V0L8 0V4H4V0ZM8 8H12V4H8V8ZM8 8H4V12H8V8Z"-->
<!--                          stroke="none"/>-->
<!--                </svg>--> */}
          <span className="button__text">Отмена</span>
        </button>
      </div>
    </div>

    <div
      className="dropdown-wrapper__theme"
      style={{
        position: "absolute",
        width: "10.3125rem",
        left: "30rem",
        top: "21.75rem",
      }}
    >
      <div className="dropdown">
        <div className="dropdown__caption">Выберите тему</div>

        <button className="button button_small button_reverse button_width-all">
          <svg
            className="button__ico"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8" cy="8" r="4" stroke="none" />
            <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
            <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
            <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
            <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
            <path
              d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
              stroke="none"
            />
            <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
            <path d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z" stroke="none" />
            <path d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z" stroke="none" />
          </svg>
          <span className="button__text">Светлая</span>
        </button>
        <button className="button button_small button_width-all">
          <svg
            className="button__ico"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
              stroke="none"
            />
          </svg>
          <span className="button__text">Темная</span>
        </button>
      </div>
    </div>
  </>
);
