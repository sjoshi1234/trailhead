public with sharing class ContactController {
    @AuraEnabled(cacheable=true)    
    public static list<Contact> getContacts() {
        return [ SELECT FirstName,LastName,email from contact WITH SECURITY_ENFORCED ];
    }
}
