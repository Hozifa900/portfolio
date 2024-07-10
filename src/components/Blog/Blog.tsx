import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Blog() {
  return (
    <Container id="blogs">
      <header>
        <h2>Blogs</h2>
      </header>
      <div className="contacts">
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7154153695780212736"
          height="499"
          width="504"
          // frameborder="0"
          // allowfullscreen=""
          title="Embedded post"
        ></iframe>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7165656490823897088"
          height="581"
          width="504"
          // frameborder="0"
          // allowfullscreen=""
          title="Embedded post"
        ></iframe>
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7145988427312693248"
          height="494"
          width="504"
          // frameborder="0"
          // allowfullscreen=""
          title="Embedded post"
        ></iframe>
      </div>
    </Container>
  );
}
