# Frontend Mentor - Interactive rating component solution

This is my solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: https://github.com/serinelar/fm-interactive-rating-component

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

Through this project, I gained valuable experience with:

- State management in vanilla JavaScript
- DOM manipulation techniques
- CSS transitions and hover states
- Responsive design principles

Key code snippet for handling rating selection:
```javascript
ratingButtons.forEach(button => {
    button.addEventListener('click', function() {
        ratingButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        selectedRating = this.textContent;
    });
});
```

## Author

- Frontend Mentor - @serinelar

- GitHub - serinelar
