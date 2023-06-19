// Step 1 - Basic Information
booking1.style.display = 'none';
let x = 0;
step1.addEventListener('click', function (event) {
    event.preventDefault();
    if (x === 0) {
        booking1.style.display = 'none';
        x = 1;
    } else {
        booking1.style.display = 'grid';
        x = 0;
    }
});

next1.addEventListener('click', function (event) {
    event.preventDefault();
    let numberOfPeople = Number(people.value);
    let bookingDate = bookDate.value;
    booking1.style.display = 'none';
});

// Step 2 - Basic Information
booking2.style.display = 'none';
let y = 0;
step1.addEventListener('click', function (event) {
    event.preventDefault();
    if (y === 0) {
        booking1.style.display = 'none';
        x = 1;
    } else {
        booking1.style.display = 'grid';
        x = 0;
    }
});

next1.addEventListener('click', function (event) {
    event.preventDefault();
    let numberOfPeople = Number(people.value);
    let bookingDate = bookDate.value;
    booking1.style.display = 'none';
});
