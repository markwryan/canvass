import {Component} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import AppNavbar from "./AppNav";

class ContactCreate extends Component {
    async handleSubmit(event) {

        event.preventDefault();

        const contact = {
            "contactName": event.target.contactName.value,
            "notes": event.target.notes.value,
        }

        await fetch('/contact/new', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact),
        });
    }

    render() {

        return (
            <div>
                <AppNavbar />
                <h2>Add Contact</h2>
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup floating>
                            <Label for="contactName">Name</Label>
                            <Input type="text"
                                   name="contactName"
                                   id="contactName"
                                   placeholder="Voter Q Public" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="notes">Notes</Label>
                            <Input type="textarea"
                                   name="notes"
                                   id="notes"
                                   placeholder="Notes..." />
                            <Button>
                                Submit
                            </Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>

    );
    }
}

export default ContactCreate;