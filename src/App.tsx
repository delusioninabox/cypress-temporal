import { Temporal } from "@js-temporal/polyfill";
import "./styles.css";

export default function App() {
  const todaysDate = Temporal.Now.plainDateISO();

  return (
    <div className="App">
      <h1>Today is:</h1>
      <h2 data-cy="today">
        {todaysDate.month}/{todaysDate.day}/{todaysDate.year}
      </h2>
    </div>
  );
}
