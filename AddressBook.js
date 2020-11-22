//--------------------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------------------
//UC1: Creating a address book contact
class contacts
{
    //properties of the contacts
    firstName;
    lastName;
    address;
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
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }
}