import React from "react";
import AgentImages from "../Utilities/AgentImages";
import "./AgentSelector.css";

const AgentBox = (props) => {
  return (
    <div className="wrapper">
      <div
        className={
          "agentBox " +
          (props.selectedAgents.includes(props.agent) ? "highlightedBox" : "")
        }
        onClick={() => {
          selectAgent(props.agent, props.selectedAgents, props.setAgents);
        }}
      >
        <h1 className="agentName">{props.agent}</h1>
        <img
          className="agentImage"
          src={AgentImages[props.agent]}
          alt={props.agent}
        />
      </div>
    </div>
  );
};

const selectAgent = (agent, selectedAgents, setAgents) => {
  if (selectedAgents.includes(agent)) {
    return;
  }
  if (selectedAgents.length >= 3) {
    setAgents([selectedAgents[1], selectedAgents[2], agent]);
  } else {
    setAgents([...selectedAgents, agent]);
  }
};

export default function AgentSelector(props) {
  // prettier-ignore
  const agents = Object.keys(AgentImages);
  return (
    <div>
      {agents.map((name, id) => {
        return (
          <AgentBox
            agent={name}
            key={id}
            selectedAgents={props.agents}
            setAgents={props.setAgents}
          />
        );
      })}
    </div>
  );
}
