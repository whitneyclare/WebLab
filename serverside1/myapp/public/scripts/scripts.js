$(function() {
        // script runs on every page, but is looking for the input field of the About page.
        if($('#myReasonForm')) {
                // when the form is found, grab the form
            var myForm = $('#myReasonForm');

            // listen for a submit event on the form.
            myForm.on('submit', function(e) {

                //     console.log($('#myReason').val());
                // if there's no value in the input box,
                // stop the submission and throw up an alert.
                if($('#myReason').val() === '') {
                    e.preventDefault();
                    alert('You must enter a good reason.  Why are you awesome?');
                }
            })
        }
});
