booking1.style.display = 'none';
booking2.style.display = 'none';
booking3.style.display = 'none';
booking4.style.display = 'none';


// Step 1 - Basic Information
let x = 0;
step1.addEventListener('click', function (event) {
    event.preventDefault();
    booking2.style.display = 'none';
    booking3.style.display = 'none';
    booking4.style.display = 'none';

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
    booking2.style.display = 'grid';

});

// Step 2 - Building
let y = 0;
step2.addEventListener('click', function (event) {
    event.preventDefault();
    booking1.style.display = 'none';
    booking3.style.display = 'none';
    booking4.style.display = 'none';

    if (y === 0) {
        booking2.style.display = 'none';
        y = 1;
    } else {
        booking2.style.display = 'grid';
        y = 0;
    }
});

next2.addEventListener('click', function (event) {
    event.preventDefault();
    let numberOfPeople = Number(people2.value);
    let bookingDate = bookDate2.value;
    booking2.style.display = 'none';
    booking3.style.display = 'block';
});


// Step 2 - Avaliable Selection
let z = 0;
step3.addEventListener('click', function (event) {
    event.preventDefault();
    booking1.style.display = 'none';
    booking2.style.display = 'none';
    booking4.style.display = 'none';

    if (z === 0) {
        booking3.style.display = 'none';
        z = 1;
    } else {
        booking3.style.display = 'block';
        z = 0;
    }
});

next3.addEventListener('click', function (event) {
    event.preventDefault();
    let numberOfPeople = Number(people3.value);
    let bookingDate = bookDate3.value;
    booking3.style.display = 'none';
    booking4.style.display = 'grid';
});
