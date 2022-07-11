import "./Duo.css";
export default function Duo(props) {
  var activeDuoUsers = 10;
  return (
    <div>
      <h1 className="title">
        There are currently {activeDuoUsers} players looking for a Duo
      </h1>
      <table className="duoTable">
        <tr>
          <th>Username</th>
          <th>Description</th>
          <th>Rank</th>
          <th>Agents</th>
        </tr>
        <tr>
          <td>Clifford</td>
          <td>A desc</td>
          <td>Gold 1</td>
          <td>Jett</td>
        </tr>
        <tr>
          <td>Clifford</td>
          <td>A desc</td>
          <td>Gold 1</td>
        </tr>
        <tr>
          <td>Clifford</td>
          <td>A desc</td>
          <td>Gold 1</td>
        </tr>
      </table>
    </div>
  );
}
