$(function() {
    // console.log('Hello, world!');

    var dataPackage = {
        "firstName": '',
        "lastName": '',
        "email": '',
        "password":''
    }
    // get control of my form to prevent it from submitting in the traditional manner
    $('form').on('submit', function(e) {
        e.preventDefault();
        // run our validation.  Check for a true or false result.

        if(inputCheck()) {
            //if the form is valid:
            // submit form
            // console.log('submit the form! do it!');
            // populate package with data as a prelude to sending the data to the server.
            dataPackage.firstName = $('#firstName').val();
            dataPackage.lastName = $('#lastName').val();
            dataPackage.email = $('#emailAddr').val();
            dataPackage.password = $('#password').val();

        } else {
            // if the form is invalid, post a message to the console.
            console.log('There was a problem!');
        }
    });

    // note: this function is HUGE.  Best if it was refactored at some point into smaller methods.
    var inputCheck = function() {
        // we're going to increment a counter for every valid field.
        var isValid = 0;

        // loop over the input fields and check them for a value
        $.each($('input:text'), function(i, val) {
            if($(val).val() === '') {
                // no value?  Add an error class.
                $(val).parent().addClass('error');
            } else {
                // value?  remove the error class.
                $(val).parent().removeClass('error');
                // increment the valid counter
                isValid++;
            }
        });

        // check the password field  same logic
        if($('#password').val() === '') {
            // no value: add error class
            $('#password').parent().addClass('error');
        } else {
            // value: remove class and increment the valid counter
            $('#password').parent().removeClass('error');
            isValid++;
        }

        // check the return value of the emailChecker function which is defined furtner down.
        if(!emailChecker()){
            //if the email is invalid:
            console.log('invalid email');
            $('#emailAddr').parent().addClass('emailError');
        } else {
            //if the email is valid:
            console.log('valid email');
            //remove error class
            $('#emailAddr').parent().removeClass('emailError');
            //increment the valid counter
                isValid++;
        }

        //final check for the valid count.  We have 5 checks, so the count has to be 5.
        if(isValid === 5) {
            return true;
        } else {
            return false;
        }
    }









});
