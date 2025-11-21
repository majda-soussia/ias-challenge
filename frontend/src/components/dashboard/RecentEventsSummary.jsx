import "./style/RecentEventsSummary.css"
export default function RecentEventsSummary() {
    const events = [
      { time: "11:32", type: "Cyber", severity: "High", status: "Investigating" },
      { time: "11:20", type: "Safety", severity: "Medium", status: "Resolved" },
      { time: "10:45", type: "Energy", severity: "Low", status: "Resolved" },
    ];
  
    const severityClass = {
      High: "sev-high",
      Medium: "sev-medium",
      Low: "sev-low",
    };
  
    return (
      <div className="simple-card">
        <div className="simple-card-title">Recent Events</div>
  
        <table className="events-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Type</th>
              <th>Severity</th>
              <th>Status</th>
            </tr>
          </thead>
  
          <tbody>
            {events.map((event, i) => (
              <tr key={i}>
                <td>{event.time}</td>
                <td>{event.type}</td>
                <td className={severityClass[event.severity]}>
                  {event.severity}
                </td>
                <td>{event.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  