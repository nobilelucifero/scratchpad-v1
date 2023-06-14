// "use client"

import s from "./Modal.module.css";

export function IconClose({ fill = "black", className = "fill-black" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={className}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L12 10.5858L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L13.4142 12L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L12 13.4142L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L10.5858 12L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z"
        fill="inherit"
      />
    </svg>
  );
}

export default function Modal() {
  return (
    <>
      <div className={`${s["modal"]} ${s["modal__lg"]}`}>
        {/* Modal Header */}
        <div className={s["modal-header"]}>
          {/* Wrapper text */}
          <div className={s["modal-header__wrapper"]}>
            <h3 className="h3">Invite members to {`{workspaceName}`}</h3>
          </div>

          <button className={s["modal-header__btn-close"]}>
            <IconClose className="fill-gray-600" />
          </button>
        </div>
        <div className={s["modal-body"]}>
          {/* <p>I'm a paragraph.</p> */}
          <div className="form">
            <div className="form-group">
              <label htmlFor="emails" className="form-label">
                Invite team members via email
              </label>
              <div className="form-group-row">
                <input
                  id="emails"
                  type="text"
                  className="form-input"
                  placeholder="Enter their email"
                />
                <button className="btn">Send invite</button>
              </div>
              <div className="form-group__caption">
                <p>Enter one or multiple emails, separated by a comma.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={s["modal-actions"]}>
          <button className="btn-secondary">Dismiss</button>
        </div>
      </div>
    </>
  );
}
