import './App.css';
import TicketNum from './TicketNum';

function App() {
  return (
    <div className="ticket-container">
      <TicketNum num={5} />
      <TicketNum num={5} />
      <TicketNum num={5} />
    </div>
  );
}

export default App;