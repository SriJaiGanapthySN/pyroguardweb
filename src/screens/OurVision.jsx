import Header from "../compenents/header";
import "../App.css";

function OurVision() {
  return (
    <>
      <Header />
      <h1 id="heading">Our Vision</h1>
      <img
        src="/Assets/images/vision_background.jpg"
        alt="vision"
        id="vision-img"
      />
      <p id="link-p">
        We envision a digital world where everyone can interact, shop, and
        socialize safely without the constant threat of harassment,
        intimidation, or fraud. With Pyroguard, we aim to significantly reduce
        the occurrence of cyberbullying and cyber fraud by empowering
        individuals, families, and businesses to take control of their digital
        lives.
      </p>
      <p id="join">Join Us in the Fight Against Cyber Threats</p>
      <p id="link-p">
        Whether you are worried about your child facing online harassment,
        concerned about the security of your personal data, or looking for tools
        to protect your business from fraud, Pyroguard is here for you.
        Together, we can make the internet a safer, more secure place for
        everyone.
      </p>
    </>
  );
}

export default OurVision;
