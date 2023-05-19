import {Component, useState} from "react";
import {AccordionBody, AccordionItem, AccordionHeader, Container, Accordion, UncontrolledAccordion} from "reactstrap";
import AppNavbar from "./AppNav";

class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {contacts: []};
    }

    componentDidMount() {
        fetch('/contact/all')
            .then(response => response.json())
            .then(data => this.setState({contacts: data}));
    }

    render() {
        const {contacts} = this.state;

        const contactList = contacts.map(contact => {
            return <AccordionItem key={contact.id}>
                <AccordionHeader targetId={contact.id.toString()}>{contact.contactName}</AccordionHeader>
                <AccordionBody accordionId={contact.id.toString()}>
                    {contact.notes}
                </AccordionBody>
            </AccordionItem>
        });

        return (
            <div>
                <AppNavbar />
                <Container fluid>
                    <h3>All Contacts</h3>
                    <div>
                        <UncontrolledAccordion defaultOpen="1">
                            {contactList}
                        </UncontrolledAccordion>
                    </div>
                </Container>
            </div>
        )
    }
}



export default ContactList;