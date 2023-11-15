import './App.css';
import students from "./index";

function App() {
  return (
      <>
          <table>
              <thead>
              <tr>
                  <th>Company</th>
                  <th>Contact</th>
                  <th>Country</th>
              </tr>
              </thead>
              <tbody>
              {students.map(student => (
                  <tr>
                      <td>{student.company}</td>
                      <td>{student.contact}</td>
                      <td>{student.country}</td>
                  </tr>
              ))}
              </tbody>
          </table>
      </>
  );
}

export default App;
