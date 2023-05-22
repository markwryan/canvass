package com.markwryan.canvass.controller;

import com.markwryan.canvass.model.Contact;
import com.markwryan.canvass.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ContactController {

    private final ContactRepository contactRepository;

    public ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @PostMapping("/contact/new")
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact) {
        //Contact Name should be present.
        if(contact.getContactName() == null || contact.getContactName().isEmpty()){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
        try {
            var createdContact = contactRepository.save(contact);
            return new ResponseEntity<>(createdContact, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/contact/all")
    public ResponseEntity<List<Contact>> viewAllContacts() {
        return new ResponseEntity<>(contactRepository.findAll(), HttpStatus.OK);
    }

}
