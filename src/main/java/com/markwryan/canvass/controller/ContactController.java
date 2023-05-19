package com.markwryan.canvass.controller;

import com.markwryan.canvass.model.Contact;
import com.markwryan.canvass.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ContactController {
    @Autowired
    ContactRepository contactRepository;

    @PostMapping("/contact/new")
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact) {
        try {
            var createdContact = contactRepository.save(contact);
            return new ResponseEntity<>(createdContact, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/contact/update/{id}")
    public ResponseEntity<Contact> updateContact(@PathVariable("id") int id, @RequestBody Contact contact) {
        Optional<Contact> contactEntry = contactRepository.findById(id);
        if(contactEntry.isPresent()) {
            Contact existing = contactEntry.get();
            existing.setContactName(contact.getContactName());
            existing.setNotes(contact.getNotes());
            return new ResponseEntity<>(contactRepository.save(existing), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    public Contact getContact() {
        return null;
    }

}
