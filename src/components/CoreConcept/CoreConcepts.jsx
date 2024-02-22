import React from "react";
import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "./CoreConcept";
import Section from "../Section";

const CoreConcepts = () => {
  return (
    <>
      <h2>Time to get started!</h2>
      <Section title={"Core Concepts"} id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((coreItem) => (
            <CoreConcept key={coreItem.title} {...coreItem} />
          ))}
        </ul>
      </Section>
    </>
  );
};

export default CoreConcepts;
