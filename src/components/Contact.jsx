import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("mwplebrg");

  if (state.succeeded) {
    alert("Thanks for reaching out! I'll get back to you soon.");
    window.location.reload();
  }

  return (
    <div className="section-container">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="email@example.com"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="What would you like to say to me?"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="social-button"
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
