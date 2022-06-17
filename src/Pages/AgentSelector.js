import React from "react";
import AgentImages from "../Utilities/AgentImages";
import "./AgentSelector.css";

const AgentBox = (agent) => {
  return (
    <div className="wrapper">
      <div className="agentBox" onClick={() => selectAgent(agent.agent)}>
        <h1 className="agentName">{agent.agent}</h1>
        <img
          className="agentImage"
          src={AgentImages[agent.agent]}
          alt={agent.agent}
        />
      </div>
    </div>
  );
};

const selectAgent = (agent) => {
  console.log(agent);
};

export default function AgentSelector(props) {
  // prettier-ignore
  const agents = agentImages.keys();
  return (
    <div>
      {agents.map((name) => {
        return (
          <AgentBox
            agent={name}
            selectedAgents={props.agents}
            setAgents={props.setAgents}
          />
        );
      })}
    </div>
  );
}
