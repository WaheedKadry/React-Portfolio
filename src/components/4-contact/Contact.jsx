import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import { useRef } from "react";
import doneAnimation from "../../../public/animation/done.json";
import contactAnimation from "../../../public/animation/contact us.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("xleyaeqe");
  const lottieRef = useRef();
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div className="flex contact-contain" style={{justifyContent:"space-between", flexWrap:"wrap"}}>
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <p style={{display:"flex", marginTop:"15px", alignItems:"center", flexWrap:"wrap"}}>
              <Lottie
                loop={false}
                style={{ height: "37px" }}
                animationData={doneAnimation}
              />
              Your Message Has Been Successfully 👌
            </p>
          )}
          {state.errors && "can't Send Your Email"}
        </form>
   <div className="contact-ani">
         <Lottie className="contactAnimation"
                 loop
                 lottieRef={lottieRef}
          onLoadedImages={() => {
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.9);
          }}
                 animationData={contactAnimation}
               />
   </div>
      </div>
    </section>
  );
};
{/* <div className=" animation flex"  >  </div> */}

export default Contact;
