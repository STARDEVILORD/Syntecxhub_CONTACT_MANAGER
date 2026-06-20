import { useState, useEffect } from "react";

function ContactForm({ onSave, currentContact, clearCurrent }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    if (currentContact) {
      // eslint-disable-next-line
      setFormData(currentContact);
    } else {
      setFormData({ name: "", email: "", phone: "" });
    }
  }, [currentContact]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    onSave(formData);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="card form-card">
      <h2>{currentContact ? "Edit Contact" : "Add New Contact"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="ENTER YOUR NAME"
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="ENTER YOUR VALID EMAIl"
          />
        </div>
        <div className="input-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+91 xxxxx xxxxx"
          />
        </div>
        <div className="btn-group">
          <button type="submit" className="btn btn-primary">
            {currentContact ? "Update Contact" : "Add Contact"}
          </button>
          {currentContact && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={clearCurrent}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
