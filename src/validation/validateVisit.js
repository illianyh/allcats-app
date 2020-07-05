export default function validateVisit(values) {

    let errors = {};
console.log(values);
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

    // validate date
    if(!values.date) {
        errors.date = "Select a date";
    }


    return errors;
}