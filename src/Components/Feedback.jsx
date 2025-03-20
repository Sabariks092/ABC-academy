import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_z6cjkuk","template_ler6ktp",form.current,"OKNQCgMQx8V4wCjQz")
      .then(
        (response) => {
          console.log("Success!", response.status, response.text);
          setSubmitted(true);
          setName("");
          setEmail("");
          setMobile("");
          setMessage("");
        },
        (err) => {
          console.error("Failed...", err);
        }
      );
  };

  return (
    <>
      <div className="row d-flex justify-content-center p-3 mt-5">
      <h3 className="ms-3 mb-4">Contact Us</h3>
        <div className="col-md-6">
          <img style={{width:"100%",borderRadius:"50px"}} src="src/assets/course.jpg" alt="" />
          <p className="text-center my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nesciunt fugit temporibus. Dicta delectus odit doloribus similique nulla laudantium amet magni illum facere eligendi quas facilis obcaecati eveniet, commodi earum!</p>
        </div>
        <div className="col-md-6">
          <div className="mx-auto row " style={styles.container}>
            <p className="text-white" style={styles.text}>
              Feel Free to Reach out! Our Team will get back to you.
            </p>
            {submitted ? (
              <p style={styles.successMessage}>Thank you for your feedback!</p>
            ) : (
              <form ref={form} onSubmit={handleSubmit} style={styles.form}>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={styles.input}
                  required
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
                  required
                />
                <input
                  type="tel"
                  name="from_mobile"
                  placeholder="Your Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  style={styles.input}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Feedback"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={styles.textarea}
                  required
                />
                <button type="submit" style={styles.button}>
                  Submit Feedback
                </button>
              </form>
            )}
          </div>
        </div>
        <hr className="mt-4" />
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
    justifyContent:"center",
    display:"flex",
    border: "2px solid #928c89",
    borderRadius: "8px",
    backgroundColor: "#ff5ee9",
    boxShadow:"2px 2px 8px black"
  },
  text: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  successMessage: {
    color: "green",
    fontSize: "18px",
    marginTop: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    justifyContent: "center",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#faf1f8",
  },
  textarea: {
    padding: "10px",
    marginBottom: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    minHeight: "100px",
    backgroundColor: "#faf1f8",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#000",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "180px",
  },
};

export default Feedback;
