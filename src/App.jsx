<<<<<<< HEAD
import './App.css'

import Lottery from './Lottery';

import { sum } from './helper';
=======
import './App.css';
import TicketNum from './TicketNum';
>>>>>>> 531afc4704c7e47ec9efe58867a3c6357af5594d

function App() {
<<<<<<< HEAD

  let winCondition = (ticket) => {
   return  ticket.every((num) => num === ticket[0]);
  };
  return (
   
    
<div>
      <Lottery  n={3}  winCondition={winCondition} />
    </div>
    

  );

=======
  return (
    <div className="ticket-container">
      <TicketNum num={5} />
      <TicketNum num={5} />
      <TicketNum num={5} />
    </div>
  );
>>>>>>> 531afc4704c7e47ec9efe58867a3c6357af5594d
}

export default App;