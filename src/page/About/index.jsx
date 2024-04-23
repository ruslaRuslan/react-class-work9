import PageContainer from "../../components/PageContainer";
import MyPhoto from "./photo2024.jpg";

const About = ({}) => {
  return (
    <>
      <PageContainer>
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <img style={{ display: "inline-block" }} src={MyPhoto} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            natus rerum esse eveniet incidunt sapiente et consequuntur ab nisi
            assumenda. Atque perspiciatis iste recusandae sint, magnam ipsam
            repellat qui quia. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Earum magnam asperiores fugiat? Suscipit ipsum
            nemo nesciunt doloremque, eius quos ipsa perspiciatis ut temporibus,
            quaerat sint ea nihil placeat autem libero.
          </p>
        </div>
      </PageContainer>
    </>
  );
};

export default About;
