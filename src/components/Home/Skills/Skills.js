import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SkillBar from "react-skillbars";
import "./Skills.css";
import Fade from "react-reveal/Fade";
import skillSet from "../../../fakedata/skills";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const loadedData = skillSet;
    setSkills(loadedData);
  }, []);

  const colors = {
    bar: " #6660a6",
    title: {
      text: "#b9b6e0",
      background: "#322e5e",
    },
  };

  return (
    <section className="py-5" id="skills">
      <Container className="py-5">
        <Fade bottom>
          <h2 className="main-title">Skill Set</h2>
          <div className="mt-5 px-lg-5">
            <SkillBar skills={skills} height={25} colors={colors} />
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Skills;
