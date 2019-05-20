/* this function handles the event that occurs
 when submit button on the index.html is being clicked */
let tab = 1;

function next() {
    tab++;
    document.getElementById('tab1').style.display = 'none';
    document.getElementById('tab2').style.display = 'block';
}

function previous() {
    tab--;
}

function submit() {

}


