import React from "react";

export default function ContactForm({t}) {
  return (
    <div className="contact-form">
      <div id="message">
      </div>
      <form id="contactForm">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="input-group">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder={t("placeholder_FullName")}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder={t("placeholder_Email")}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                id="tel"
                className="form-control"
                placeholder={t("placeholder_Number")}
              />
            </div>
          </div>
          <div className="form-group col-md-6 col-sm-12">
            <div className="input-group input_group_full_width">
              <textarea
                name="comments"
                id="message"
                rows="6"
                className="form-control"
                placeholder={t("placeholder_Message")}
              ></textarea>
            </div>
          </div>
          <div className="col-sm-12">
            <button
              type="button"
              name="send"
              className="submit-button btn btn-chos"
              value="Submit"
            >
              {t("placeholder_Submit")}
            </button>
            <div id="simple-msg"></div>
          </div>
        </div>
      </form>
    </div>
  );
}
