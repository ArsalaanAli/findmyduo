import "./Duo.css";
export default function Duo(props) {
  var activeDuoUsers = 10;
  return (
    <div>
      <h1 className="title">
        There are currently {activeDuoUsers} players looking for a Duo
      </h1>
    </div>
  );
}
