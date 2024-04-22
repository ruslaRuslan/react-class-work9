import PageContainer from "../../components/PageContainer";
import { useState } from "react";
import "./index.css";

const Contact = ({}) => {
  const [clicked, setCliced] = useState(false);
  const click = ({}) => {
    setCliced(true);
  };
  return (
    <>
      <PageContainer>
        <div className="divInputs">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input
            className="inputMessage"
            type="text"
            placeholder="message..."
          />
          <button
            onClick={click}
            style={{ backgroundColor: clicked ? "blue" : "" }}
          >
            send
          </button>
        </div>
      </PageContainer>
    </>
  );
};

export default Contact;
