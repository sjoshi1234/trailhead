public with sharing class AccountController {
    @AuraEnabled(cacheable=true)    
    public static list<Contact> getRelatedContacts(Id accountId) {
        return [ SELECT name,title,email,phone from contact where AccountId= :accountId WITH SECURITY_ENFORCED ];
    }
}
