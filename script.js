document.addEventListener('DOMContentLoaded', function() {
    const ratingButtons = document.querySelectorAll('.rating-buttons button');
    const submitButton = document.getElementById('submit');
    const ratingState = document.querySelector('.rating-state');
    const thankYouState = document.querySelector('.thank-you-state');
    const ratingDisplay = document.getElementById('selected-rating');
    
    let selectedRating = 0;

    // Rating selection
    ratingButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            ratingButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add to clicked button
            this.classList.add('active');
            selectedRating = this.textContent;
            console.log('Selected rating:', selectedRating); // Debugging
        });
    });

    // Submit handling
    submitButton.addEventListener('click', function() {
        console.log('Submit clicked, selected rating:', selectedRating); // Debugging
        
        if (!selectedRating) {
            alert('Please select a rating!');
            return;
        }
        
        ratingDisplay.textContent = selectedRating;
        ratingState.classList.add('hidden');
        thankYouState.classList.remove('hidden');
    });
});
