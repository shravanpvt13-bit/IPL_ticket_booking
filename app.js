
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    // Hide the toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}


function bookMatch(matchValue, matchName) {
   
    showTab('book');


    const matchDropdown = document.getElementById('match');
    if (matchValue && matchDropdown) {
        matchDropdown.value = matchValue;
    }

    const bookingSection = document.getElementById('book');
    bookingSection.scrollIntoView({ behavior: 'smooth' });

    // Trigger the toast notification
    if (matchName) {
        showToast(`Selected ${matchName}. Please complete your details below!`);
    } else {
        showToast('Scroll down to complete your ticket booking!');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.querySelector('#book form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            showToast('Booking Confirmed! Check "My Bookings" for details.');
            bookingForm.reset();
        });
    }
});