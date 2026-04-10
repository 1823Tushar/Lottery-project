<<<<<<< HEAD
import TicketNum from "./TicketNum";
import "./Ticket.css";

export default function Ticket({ticket}) {
     return (
        <div className="Ticket" >
            <p>Ticket</p>
            {
                  ticket.map((num,idx) => {
                        <TicketNum num={num} key={idx} />
                  })
            }
  
        </div>
     );
=======
import './TicketNum.css';

export default function TicketNum({ num }) {
  return <span className="TicketNum">{num}</span>;
>>>>>>> 531afc4704c7e47ec9efe58867a3c6357af5594d
}