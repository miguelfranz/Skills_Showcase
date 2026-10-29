
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Thank you, ${formData.name}! Your message has been submitted successfully.`);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-heading">

        <h2>
          Get in Touch
          <br />
        </h2>

        <p>
          Have a project in mind or want to connect?
          Feel free to send me a message.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's talk.</h3>

          <p>
            I'm always interested in discussing new projects,
            creative ideas, and opportunities to learn and grow.
          </p>

          <div className="contact-detail">
            <span className="contact-icon">@</span>
            <div>
              <small>Email</small>
              <p>carlosmiguelfrancisco1@gmail.com</p>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-icon">↗</span>
            <div>
              <small>Availability</small>
              <p>Open to opportunities</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-submit">
            Send Message <span>↗</span>
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;
