package com.markwryan.canvass.model;

import jakarta.persistence.*;

@Entity
@Table(name= "contact")
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "contact_name")
    private String contactName;

    @Column(name = "notes")
    private String notes;

    public Contact() {

    }

    public Contact(String contactName, String notes) {
        this.contactName = contactName;
        this.notes = notes;
    }

    public int getId() {
        return id;
    }

    public String getContactName() {
        return contactName;
    }

    public void setContactName(String contactName) {
        this.contactName = contactName;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    @Override
    public String toString() {
        return "Contact [ID: " + id + ", Name: " + contactName + ", Notes: " + notes + "]";
    }
}
