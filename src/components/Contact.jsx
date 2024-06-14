import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactPage">
        <div>
          <h3 style={{ textAlign: "center", color: "violet" ,paddingTop:'15px'}}>
          Send a message!
          </h3>
          <p
            style={{ textAlign: "center", fontSize: "15px",marginTop:'10px' }}
          >
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </div>
        <div
          class="formContent"
          style={{
            border: "3px solid orange",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <form>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your name"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your email"
              />
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter a message"
              ></textarea>
            </div>
            <button type="submit" style={{border:'1px solid orangered',background:'orangered',borderRadius:'5px',position:'relative',height:'40px',width:'290px',marginTop:'20px',color:'white'}}>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
