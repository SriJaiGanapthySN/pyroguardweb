import "../App.css";
import { motion } from "framer-motion";

function Story() {
  return (
    <>
      <motion.div
        animate={{ x: -30 }}
        transition={{ type: "spring", duration: 1.5 }}
        initial={{ x: 2000 }}
        className="root-page"
      >
        <h1 id="heading">Our-Story</h1>
        <div id="content-div">
          <div id="para-div">
            <p>
              Pyroguard was founded in response to the growing concern around
              cyberbullying and cyber fraud, two increasingly prevalent issues
              in today’s digital world. Our founders saw the emotional and
              financial damage caused by both online abuse and fraudulent
              schemes. Driven by the need for a proactive solution, we developed
              a platform that addresses both problems, offering a comprehensive,
              easy-to-use solution that helps individuals safeguard their
              digital presence.
            </p>
          </div>
          <div id="img-div">
            <img id="stry-img" src="/Assets/images/story.jpeg" alt="story" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Story;
