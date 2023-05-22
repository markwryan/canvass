import React, {useEffect} from "react";
import Contact from "./Contact";
import AppNav from "./AppNav";
import {redirect, useNavigate} from "react-router-dom";


function CreateContact() {
    const navigate = useNavigate();

    // @ts-ignore
    const contactSubmit = event => {
        event.preventDefault();

        const contact: Contact = new Contact(-1, event.target.contactName.value, event.target.notes.value);

        fetch('/contact/new', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"contactName": contact.contactName, "notes": contact.notes}),
        }).then(result => navigate("/all"));

    }


    return (
        <div className="section">
            <AppNav />
            <div className="input-group fluid">
                <div className="row">
                    <form onSubmit={contactSubmit}>
                        <fieldset>
                            <legend>Create a new contact</legend>
                            <div className="row responsive-label">
                                <div className="col-sm-12 col-md-3">
                                    <label htmlFor="contactName">Name:</label>
                                </div>
                            </div>
                            <div className="row responsive-label">
                                <div className="col-sm-12 col-md">
                                    <input type="text" name="contactName" placeholder="Name" required />
                                </div>
                            </div>

                            <div className="row responsive-label">
                                <div className="col-sm-12 col-md-3">
                                    <label htmlFor="notes">Notes:</label>
                                </div>
                            </div>
                            <div className="row responsive-label">
                                <div className="col-sm-12 col-md">
                                    <textarea name="notes" placeholder="Notes" />
                                </div>
                            </div>
                            <div className="row responsive-label">
                                <button type="submit">Create</button>
                            </div>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateContact;