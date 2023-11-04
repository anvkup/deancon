import React from "react";

function Contact() {
  return (
    <div>
      <h2
        style={{
          display: "flex",
          flex: "center",
          justifyContent: "center",
          margin: "7px",
        }}
      >
        Contact
      </h2>

      <form
        style={{
          display: "block",
          boxShadow: "1px 1px 3px 2px #ddd",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <h3>Write your problem</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            margin: "10px auto",
            padding: "10px",
            backgroundColor: "#ddd",
            border: "1px solid #ddd",
          }}
        >
          <input type="text" name="name" id="" placeholder="Enter name" />
          <input type="email" name="email" id="" placeholder="Enter email" />
          <input
            type="phone"
            name="phone"
            id=""
            placeholder="Enter contact no"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Write message"
          />

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
