import TicketNum from "./TicketNum"

export default function Ticket(ticket) {
     return (
        <div>
  <TicketNum num={ticket[0]}/>
        </div>
     )
}