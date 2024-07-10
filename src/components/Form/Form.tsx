import { Container, ContainerSucces } from "./styles";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useState } from "react";
import validator from "validator";
import axios from "axios";

export function Form() {
  const [state, handleSubmit] = useForm("njn");
  const [s, setS] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [isHuman, setIsHuman] = useState(false);
  const [message, setMessage] = useState("");
  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
      setEmail(email);
    } else {
      setValidEmail(false);
    }
  }

  const handleSubmition = (e: any) => {
    e.preventDefault();
    if (validEmail && message) {
      // axios
      // .post(
      // "https://hgtgvz334bneczuoks7l3al7ti0efnxx.lambda-url.us-east-1.on.aws/",
      // {
      // email,
      // message,
      // }
      // )
      // .then(() => {
      // handleSubmit(e);
      // });
      fetch(
        "https://hgtgvz334bneczuoks7l3al7ti0efnxx.lambda-url.us-east-1.on.aws/",
        {
          method: "POST",
          body: JSON.stringify({ email, message }),
          headers: {
            "content-type": "application/json",
          },
        }
      ).then(() => {
        setS(true);
      });
    } else {
      toast.error("Please fill all the fields", {
        position: toast.POSITION.BOTTOM_CENTER,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: "error",
      });
    }
  };

  useEffect(() => {
    if (s) {
      toast.success("Email successfully sent!", {
        position: toast.POSITION.BOTTOM_CENTER,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: "succeeded",
      });
    }
  });

  if (s) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }
  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmition}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value);
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        {/* <ReCAPTCHA 
          sitekey="6Lfj9NYfAAAAAP8wPLtzrsSZeACIcGgwuEIRvbSg"
          onChange={(e) => {
            setIsHuman(true);
          }}
        ></ReCAPTCHA>
        */}
        <button
          type="submit"
          // disabled={state.submitting || !validEmail || !message || !isHuman}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
