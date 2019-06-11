// handles when next button on the index.html is being clicked 
const next = document.getElementById("next");
const previous = document.getElementById("prev");
const submit = document.getElementById("submit");

next.addEventListener('click', function () {
    document.getElementById('tab1').style.display = 'none';
    document.getElementById('tab2').style.display = 'block';
});

// handles event for the previous button 
previous.addEventListener('click', function () {
    document.getElementById('tab1').style.display = 'block';
    document.getElementById('tab2').style.display = 'none';
})

// handles the submit button




