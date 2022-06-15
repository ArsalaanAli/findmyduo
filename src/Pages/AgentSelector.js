import React from "react";
import AgentImages from "../Utilities/AgentImages";
import "./AgentSelector.css";

const AgentBox = (agent) => {
  return (
    <div className="agentBox">
      <h1>{agent.agent}</h1>
      <img className="agentImage" src={AgentImages[agent.agent]} />
    </div>
  );
};

export default function AgentSelector() {
  // prettier-ignore
  const agents = ['Astra', 'Breach', 'Brimstone', 'Chamber', 'Cypher', 'Fade', 'Jett', 'KAY/O', 'Killjoy', 'Neon', 'Omen', 'Phoenix', 'Raze', 'Reyna', 'Sage', 'Skye', 'Sova', 'Viper', 'Yoru']
  return (
    <div>
      {agents.map((name) => {
        return <AgentBox agent={name} />;
      })}
    </div>
  );
}
