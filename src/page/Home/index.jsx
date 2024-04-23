import PageContainer from "../../components/PageContainer";
import photo from "./photo2024.jpg";

const Home = ({}) => {
  return (
    <>
      <PageContainer>
        <div style={{ display: "flex", margin: "5rem 1rem" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
            aliquid? Voluptatum ullam iusto cupiditate qui labore. Impedit
            corporis vitae adipisci velit praesentium iusto voluptatum, tenetur
            iste saepe vero perferendis officiis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolorum, repudiandae. Autem,
            voluptatibus pariatur. Cum provident itaque ut laudantium omnis
            cumque aspernatur, mollitia veritatis ullam expedita. Minima
            repellendus ipsum aliquam hic. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Dolor quia, ducimus nemo eveniet
            aspernatur, sed nam quae pariatur cupiditate debitis reiciendis esse
            veritatis harum sint possimus eius quidem culpa quod! Lorem ipsum
            dolor sit, amet consectetur adipisicing elit. Blanditiis,
            repellendus reiciendis! Pariatur illo quis vitae ex? Saepe ducimus
            repellendus perferendis perspiciatis, laborum, deserunt vitae
            voluptas assumenda nostrum quos veniam harum.
          </p>
          <img src={photo} alt="" />
        </div>
      </PageContainer>
    </>
  );
};

export default Home;
