package com.markwryan.canvass.controller;

import com.markwryan.canvass.model.Contact;
import com.markwryan.canvass.repository.ContactRepository;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


public class ContactControllerTests {
    /**
     * A valid new Contact, passed into the API should call the JPA repository to be saved and return the saved Contact
     * with a CREATED status code.
     */
    @Test
    public void testCreateContactValidContact() {
        //Mock the JPA Repository
        ContactRepository mockRepository = mock(ContactRepository.class);

        var contactController = new ContactController(mockRepository);
        //Setup Test
        final var NAME = "Test User";
        final var NOTE = "a simple test note.";
        final var CONTACT = new Contact(NAME, NOTE);
        //Mock call to SAVE with the contact should return the same contact
        when(mockRepository.save(CONTACT)).thenReturn(CONTACT);
        var result = contactController.createContact(CONTACT);

        assertNotNull(result);
        assertEquals(result.getStatusCode(), HttpStatus.CREATED);
        assertEquals(result.getBody().getContactName(), NAME);
        assertEquals(result.getBody().getNotes(), NOTE);
    }

    /**
     * At the bare minimum a NAME should be preset to log the canvass visit. Ensure not providing the name of the contact
     * returns an empty result with the BAD_REQUEST status.
     */
    @Test
    public void testCreateContactMissingName() {
        var contactController = new ContactController(null);

        final var NAME = "";
        final var NOTE = "a existing test note";
        final var CONTACT = new Contact(NAME, NOTE);

        var result = contactController.createContact(CONTACT);

        assertNotNull(result);
        assertEquals(result.getStatusCode(), HttpStatus.BAD_REQUEST);
        assertNull(result.getBody());
    }

    @Test
    public void testViewAllContacts() {
        //Mock the JPA Repository
        ContactRepository mockRepository = mock(ContactRepository.class);

        List<Contact> contacts =  new ArrayList<>();
        contacts.add(new Contact("Test1", "Note1"));
        contacts.add(new Contact("Test 2", "Another Note"));
        contacts.add(new Contact("Yet Another User", "Notes 123"));

        when(mockRepository.findAll()).thenReturn(contacts);

        var controller = new ContactController(mockRepository);

        var result = controller.viewAllContacts();

        assertEquals(result.getStatusCode(), HttpStatus.OK);
        assertEquals(result.getBody(), contacts);
    }
}
