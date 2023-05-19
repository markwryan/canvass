package com.markwryan.canvass.repository;

import com.markwryan.canvass.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContactRepository extends JpaRepository<Contact, Integer> {
    List<Contact> findByContactName(String contactName);

}
