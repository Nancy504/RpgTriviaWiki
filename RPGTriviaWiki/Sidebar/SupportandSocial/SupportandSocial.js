// Function to navigate to a specified URL by updating the window location
function navigate(url) {
    window.location.href = url;
}

// Select all anchor (`<a>`) elements inside elements with the class `container`
// Modify each link to open in a new tab and enhance security
document.querySelectorAll('.container a').forEach(link => {
    link.setAttribute('target', '_blank'); // Opens the link in a new tab
    link.setAttribute('rel', 'noopener noreferrer');  // Prevents potential security vulnerabilities
});

function handleFormSubmission(formId, responseId, causeName) {
    const form = document.getElementById(formId);
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);

        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            cause: causeName
        };

        fetch('https://my-rpg-donation-backend.onrender.com/donate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            document.getElementById(responseId).textContent = data.message;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById(responseId).textContent = 'Submission failed.';
        });
    });
}

// Hook up forms
handleFormSubmission('DomesticAbuseResource-donation-form', 'response-domestic', 'Domestic Abuse');
handleFormSubmission('SuicidePreventionResource-donation-form', 'response-suicide', 'Suicide Prevention');
handleFormSubmission('Samhsa-donation-form', 'response-samhsa', 'Samhsa');
handleFormSubmission('LGBTQResourceList-donation-form', 'response-lgbtq', 'LGBTQ Resource List');