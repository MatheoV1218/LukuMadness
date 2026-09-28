import { SITE } from "../data/site";
import "../styles/deleteAccount.css";

const STEPS = [
  "Open the LukuMadness USA app",
  "Go to the Account tab",
  "Scroll down and tap \"Delete My Account\"",
  "Confirm the deletion",
];

const DeleteAccount = () => {
  return (
    <>
      <section className="doc-hero">
        <div className="container doc-hero__inner">
          <p className="eyebrow eyebrow--light">Account &amp; privacy</p>
          <h1 className="display-1">Delete your account</h1>
        </div>
      </section>

      <section className="section section--paper doc">
        <div className="container doc__inner">
          <p className="doc__lead">
            To delete your LukuMadness USA account and personal data directly from the app:
          </p>

          <ol className="doc__steps">
            {STEPS.map((step, i) => (
              <li key={step}>
                <span className="doc__step-num">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>

          <div className="doc__card">
            <h2>What gets deleted</h2>
            <p>
              This permanently removes your name, email address, and phone number from our systems.
              Your past order history is kept in anonymized form for tax record-keeping, with no link
              back to you. Any active reward code is forfeited. This action cannot be undone.
            </p>
          </div>

          <div className="doc__card">
            <h2>Don't have the app anymore?</h2>
            <p>
              If you no longer have the app installed and would like to request deletion of your
              account and data, email us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a> from the
              email address associated with your account, and we will process your request.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeleteAccount;
