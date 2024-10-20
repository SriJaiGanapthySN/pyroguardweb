import "../App.css";
import { motion } from "framer-motion";

function What() {
  return (
    <>
      <motion.div
        animate={{ x: -20 }}
        transition={{ type: "tween", duration: 1.5 }}
        initial={{ x: -2000 }}
        className="root-page"
      >
        <h1 id="heading-1">What We Stand For</h1>
        <div id="content-div">
          <div id="img-div">
            <img
              id="stry-img"
              src="/Assets/images/what.jpg"
              alt="what we stand for"
            />
          </div>
          <div id="para-div">
            <ul>
              <li>
                Protection: At our core, Pyroguard is committed to protecting
                users from both the emotional harm caused by online bullying and
                the financial devastation caused by cyber fraud
              </li>
              <li>
                Empowerment: We give individuals, families, and businesses the
                tools to stay safe online, helping them detect and prevent cyber
                threats before they escalate.
              </li>
              <li>
                Innovation: Our cutting-edge technology continually evolves to
                stay ahead of new cyber threats, detecting not only bullying
                behavior but also fraudulent activities like phishing, identity
                theft, and financial scams.
              </li>
              <li>
                Support: Beyond prevention, Pyroguard offers resources,
                guidance, and 24/7 support for those affected by cyberbullying
                or fraud, helping them navigate recovery and protect their
                digital well-being.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default What;
