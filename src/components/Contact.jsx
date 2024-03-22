const Contact = () => {
  return (
    <div className="contact-page">

      <div className="gray-block"></div>

      <div id="tc" className="cp-title-container">
        <h1 className="cp-title">Get In Touch with Us</h1>
      </div>
      {/* <!-- main container --> */}
      <div id="c" className="cp-container">
        <div className="cp-image-container">
          <img className="cp-img" src="http://res.cloudinary.com/oscartbeamish/image/upload/v1504172576/14bc155f03a9be4e10c0bd6d34067f6e_ng1urv.jpg" />
        </div>

        <div className="text-container">
          <input className="cp-input" type="text" name="name" placeholder="Name" />
          <br />

          <input className="cp-input" type="email" name="email" placeholder="Email" />
          <br />

          <textarea className="cp-text-area" type="text" name="message" placeholder="Message"></textarea>
          <br />

          <div className="cp-message">Message Sent</div>
          <div className="cp-button">
            <button className="cp-submit" type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
