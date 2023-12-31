import { Motorcycle } from './classes.js';
import { getMotos } from './classes.js';

// Get the form element
const form = document.querySelector('.custom-form');
document.addEventListener('DOMContentLoaded', async function() 
{
    const params = new URLSearchParams(window.location.search);
    const motorcycleId = params.get("id");
    const responseMotorcycles = await fetch(`/api/motorcycles`);
    if (!responseMotorcycles.ok) {
        throw new Error(`Error fetching motorcycles: ${responseMotorcycles.statusText}`);
    }
    const motorcycles = await responseMotorcycles.json();

    // Find the motorcycle object in your motorcycles array based on the ID
    const responseDetails = await fetch(`/motorcycle/${motorcycleId}`);
    if (!responseDetails.ok) {
        throw new Error(`Error fetching motorcycle details: ${responseDetails.statusText}`);
    }
    const selectedMotorcycle = await responseDetails.json();

    // Set the appointment title with the motorcycle name
    const appointmentTitle = document.querySelector('.appointment-title');
    appointmentTitle.textContent = `Appointment for ${selectedMotorcycle.name}`;

    // Populate options based on motorcycles array
    motorcycles.forEach(motorcycle => {
        // Create label element
        const label = document.createElement('label');
        label.setAttribute('for', motorcycle.id); // Set 'for' attribute to motorcycle ID

        // Create input element
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = motorcycle.id; // Set input ID to motorcycle ID
        input.name = 'motorcycle';
        input.value = motorcycle.name; // Set input value to motorcycle name

        // Set label text to motorcycle name
        label.appendChild(input);
        label.appendChild(document.createTextNode(` ${motorcycle.name}`));
        
        // Append the option to the select element
        additionalOptions.appendChild(label);
    });


    // Set the default checkbox to the motorcycle specified in the URL
    const motorcycleCheckbox = document.querySelector(`input[name="motorcycle"][value="${selectedMotorcycle.name}"]`);
    if (motorcycleCheckbox) {
        motorcycleCheckbox.checked = true;
    }

    // Add event listener to form submission
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        // Get all selected motorcycles
        const selectedMotorcycles = document.querySelectorAll('input[name="motorcycle"]:checked');

        // Get the terms checkbox
        const termsCheckbox = document.getElementById('terms');

        // Check if at least one motorcycle is selected and terms are agreed
        if (selectedMotorcycles.length === 0) {
            alert('Please select at least one motorcycle.');
            event.preventDefault(); // Prevent form submission
        } else if (!termsCheckbox.checked) {
            alert('Please agree to the terms.');
            event.preventDefault(); // Prevent form submission
        }

        // Send form Data to local storage, will later be put in a database
        const formData = {
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            motorcycles: [...document.querySelectorAll('input[name="motorcycle"]:checked')].map(checkbox => checkbox.value),
            termsAgreed: document.getElementById('terms').checked
        };
        // Fetch endpoint to schedule the appointment
        const schedulingResponse = await fetch('/api/appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (schedulingResponse.ok) {
            const scheduledAppointment = await schedulingResponse.json();
            //alert(`Appointment scheduled successfully!\nAppointment ID: ${scheduledAppointment.id}`);
            window.location.href = '/formcomplete.html';
        } else {
            alert('Error scheduling appointment. Please try again.');
        }
        
    });
});




// Get the radio buttons for yes and no
const yesRadio = document.getElementById('yesRadio');
const noRadio = document.getElementById('noRadio');
const additionalOptions = document.querySelector('.additional-options');

// Add event listener to toggle additional options visibility
yesRadio.addEventListener('change', function() {
    if (yesRadio.checked) {
        additionalOptions.style.display = 'block'; // Show additional options
    } else {
        additionalOptions.style.display = 'none'; // Hide additional options
    }
});
noRadio.addEventListener('change', function() {
    if (noRadio.checked) {
        additionalOptions.style.display = 'none'; // Show additional options
    } else {
        additionalOptions.style.display = 'block'; // Hide additional options
    }
});


//set time constraints
// const timeSelect = document.getElementById('time');

// dateInput.addEventListener('input', function () {
//     const selectedDate = new Date(this.value);
//     // Logic to determine unavailable times based on selectedDate
//     // Iterate through time options and disable those that are unavailable
//     for (let option of timeSelect.options) {
//         const optionDate = new Date(selectedDate);
//         const [hours, minutes] = option.value.split(':');
//         optionDate.setHours(hours, minutes);

//         if (optionDate < new Date() ) {
//             option.disabled = true;
//         } else {
//             option.disabled = false;
//         }
//     }
// });

// set the date constraints
// Get the date input element
const dateInput = document.getElementById('date');

// Calculate the minimum and maximum date
const minDate = new Date();
minDate.setHours(minDate.getHours() + 4); // Minimum 4 hours in the future
const maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 90); // Maximum 90 days in the future

// Set the minimum and maximum date in the date input element
dateInput.setAttribute('min', formatDate(minDate));
dateInput.setAttribute('max', formatDate(maxDate));

// Helper function to format the date in YYYY-MM-DD format
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}




