import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import "../styles/deleteAccount.css";

const DeleteAccount = () => {
  return (
    <>
      <SEO
        title="Delete Your Account | LukuMadness USA"
        description="Instructions for deleting your LukuMadness USA account and personal data."
        path="/delete-account"
      />

      <Navbar />

      <section className="delete-account-section">
        <div className="delete-account-content">
          <h1>Delete Your Account</h1>

          <p>
            To delete your LukuMadness USA account and personal data directly
            from the app:
          </p>

          <ol>
            <li>Open the LukuMadness USA app</li>
            <li>Go to the Account tab</li>
            <li>Scroll down and tap "Delete My Account"</li>
            <li>Confirm the deletion</li>
          </ol>

          <p>
            This permanently removes your name, email address, and phone
            number from our systems. Your past order history is kept in
            anonymized form for tax record-keeping, with no link back to you.
            Any active reward code is forfeited. This action cannot be undone.
          </p>

          <p>
            If you no longer have the app installed and would like to request
            deletion of your account and data, email us at{" "}
            <a href="mailto:info@lukumadnessusa.com">
              info@lukumadnessusa.com
            </a>{" "}
            from the email address associated with your account, and we will
            process your request.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DeleteAccount;
