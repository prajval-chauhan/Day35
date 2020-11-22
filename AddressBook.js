//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//UC1: Creating a address book contact
class contacts
{
    //properties of the contacts
    firstName;
    lastName;
    city;
    state;
    zip;
    phoneNumber;
    email;
    //constructor
    constructor(...params)
    {
        this.firstName = params[0];
        this.lastName = params[1];
        this.city = params[2];
        this.state = params[3];
        this.zip = params[4];
        this.phoneNumber = params[5];
        this.email = params[6];
    }
}