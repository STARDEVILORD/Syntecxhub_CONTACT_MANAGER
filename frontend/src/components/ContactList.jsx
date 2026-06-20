function ContactList({ contacts, onEdit, onDelete }) {
  if (!contacts.length)
    return <p className="empty-state">No contacts found. Add one above!</p>;

  return (
    <div className="contact-grid">
      {contacts.map((contact) => (
        <div key={contact._id} className="card contact-card">
          <div className="card-info">
            <h3>{contact.name}</h3>
            <p>
              <strong>Email:</strong> {contact.email}
            </p>
            <p>
              <strong>Phone:</strong> {contact.phone}
            </p>
          </div>
          <div className="card-actions">
            <button className="btn btn-edit" onClick={() => onEdit(contact)}>
              Edit
            </button>
            <button
              className="btn btn-delete"
              onClick={() => onDelete(contact._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
