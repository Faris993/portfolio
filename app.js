function handleFormSubmission(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    let email = document.getElementById('mail').value;
    alert('Thank you for subscribing! Email: ' + email);
    // You can add more logic here, like sending the data to a server using AJAX.
}

// Function to handle "Let's Talk" button click
function handleLetsTalkClick() {
    alert("Let's Talk button clicked!");
    // You can add more logic here, like opening a modal or navigating to another section.
}

// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add a click event listener to the form submit button
    document.querySelector('form').addEventListener('submit', handleFormSubmission);

    // Add a click event listener to the "Let's Talk" button
    let letsTalkButton = document.querySelector('.about button');
    if (letsTalkButton) {
        letsTalkButton.addEventListener('click', handleLetsTalkClick);
    }
});
