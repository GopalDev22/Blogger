import React, { useState } from "react";
import "./accordion.css";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        {!isOpen ? (
          <BiSolidDownArrow style={{ fill: "white" }} />
        ) : (
          <BiSolidUpArrow style={{ fill: "white" }} />
        )}
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;
