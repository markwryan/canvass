import Contact from "./Contact";
import {useState, useEffect} from "react";
import AppNav from "./AppNav";

function ContactList() {
    useEffect(() => {
        fetch('/contact/all')
            .then(response => response.json())
            .then(data => data.map((item: { id: number, contactName: String; notes: String; }) => new Contact(item.id, item.contactName, item.notes)))
            .then(contacts => setContacts(contacts));
    }, []);

    const[contacts, setContacts] = useState<Contact[]>([]);

    const contactList =  contacts.map(contact => { return(
            <div className="section" key={contact.id.toString()}>
                <div className="card">
                    <div className="section">
                        <h3>{contact.contactName}</h3>
                    </div>
                    <div className="section">
                        <div>
                            {contact.notes}
                        </div>
                    </div>
                </div>
            </div>
    )});

    return (
        <div>
            <AppNav />
            <h3>All Contacts</h3>
            <div>
                {contactList}
            </div>
        </div>
    )
}

export default ContactList;