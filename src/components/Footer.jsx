import React from "react";
import Section from "./Section";
import GradientText from '../reactbits/TextAnimations/GradientText/GradientText';

const Footer = () => {
  return (
    <>
      <style>
        {`
          .custom-class {
            transition: text-shadow 0.3s ease;
          }
          .custom-class:hover {
            text-shadow: 0 0 10px cyan, 0 0 20px cyan, 0 0 30px cyan;
          }
        `}
      </style>
      <Section crosses className="!px-0 !py-10">
        <div className="container flex justify-center mt-4">
          <div className="caption text-n-3">
            Developed by
            <a
              href="https://www.linkedin.com/in/apurvsprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-n-5 transition-colors inline-block mx-1"
            >
              <GradientText
                colors={["#40ffaa", "#40dfff", "#ff40ff", "#4079ff", "#ff407f"]}
                animationSpeed={6}
                showBorder={false}
                className="custom-class"
              >
                Apurv Gore
              </GradientText>
            </a>
            and
            <a
              href="https://www.linkedin.com/in/pathak-ji-op"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-n-5 transition-colors inline-block mx-1"
            >
              <GradientText
                colors={["#40ffaa", "#40dfff", "#ff40ff", "#4079ff", "#ff407f"]}
                animationSpeed={6}
                showBorder={false}
                className="custom-class"
              >
                Atharv Pathak
              </GradientText>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Footer;
