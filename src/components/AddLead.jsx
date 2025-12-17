export default function AddLead({ formData, setFormData ,onAddLead}) {
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <section>
      <form onSubmit={(e)=>{
e.preventDefault()
onAddLead()
      }} >
        {/* Name */}
        <label htmlFor="name">Name :</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Type the name..."
          value={formData.name}
          onChange={handleChange}
        />

        {/* Email */}
        <label htmlFor="email">Email :</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter the email id..."
          value={formData.email}
          onChange={handleChange}
        />

        {/* Phone */}
        <label htmlFor="phone">Phone Number :</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="123-456-7890"
          value={formData.phone}
          onChange={handleChange}
        />

        {/* Status */}
        <label htmlFor="status">Choose a status :</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="new">New</option>
          <option value="completed">Completed</option>
          <option value="interested">Interested</option>
          <option value="converted">Converted</option>
        </select>

        <button type="submit">Add Lead</button>
      </form>
    </section>
  );
}
