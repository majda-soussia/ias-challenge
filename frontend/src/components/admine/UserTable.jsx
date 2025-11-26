import "./style/table.css";

export function UserTable() {
    return (
      <div className="table-wrapper">
  
        <table className="styled-table">
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Role</th>
              <th className="center">Action</th>
            </tr>
          </thead>
  
          <tbody>
            <tr>
              <td>Boukraa</td>
              <td>Jasser</td>
              <td>Admin</td>
              <td className="action">
                <span>👁</span>
                <span>✏</span>
                <span>🗑</span>
              </td>
            </tr>
  
            {[1,2,3,4].map(i => (
              <tr key={i}>
                <td></td><td></td><td></td><td></td>
              </tr>
            ))}
          </tbody>
        </table>
  
      </div>
    );
  }
  