$(document).ready(function() {
    // Toggle job listings
    $('#jobListings li').click(function() {
        $(this).find('p').toggle();
    });

    // Form submission
    $('#applicationForm').submit(function(e) {
        e.preventDefault();

        // Simulate data submission to a server (you would replace this with an actual AJAX request)
        setTimeout(function() {
            alert("Data has been saved. You'll receive an email in a few days.");
            $('#applicationForm')[0].reset();
        }, 2000);
    });
});
