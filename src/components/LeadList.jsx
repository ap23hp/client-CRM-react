export default function LeadList({ leads }) {
  return (
    <section>
      {leads.length ===0 ? <h4>No leads added yet. Add your first lead</h4> : leads.map((lead, index) => (
        <div key={index}>
          <h3>Name: {lead.name}</h3>
          <h3>Email: {lead.email}</h3>
          <h3>Phone: {lead.phone}</h3>
          <h3>Status: {lead.status}</h3>
        </div>
      ))}
    </section>
  );
}
