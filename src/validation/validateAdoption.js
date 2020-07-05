export default function validateAdoption(values) {

    let errors = {};
    // validate name
    if(!values.name) {
        errors.name = "Name is mandatory";
    }

    // validate lastname
    if(!values.lastname) {
        errors.lastname = "Lastname is mandatory"
    }
    
    // validate email
    if(!values.email) {
        errors.email = 'Email is mandatory';
    }else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) ) {
        errors.email = "Invalid email"
    }

     // validate postal code
     if(!values.postcode) {
        errors.postcode = 'Post code is mandatory';
    }else if( !/^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([AZa-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))[0-9][A-Za-z]{2})$/i.test(values.number) ) {
        errors.postcode= "Invalid postcode";
    }

        // validate city
        if(!values.city) {
            errors.city = 'City is mandatory';
        }

    return errors;
}