window.pairs = [];

function extractPair() {
    var p1 = $('#the-form input[name=p1]').val();
    var p2 = $('#the-form input[name=p2]').val();
    return [p1, p2];
}

function clearPair() {
    $('#the-form input[name=p1]').val('');
    $('#the-form input[name=p2]').val('');
    return true;
}

function addPair(pair) {
    window.pairs.push(pair);
    $('#the-list').append('<li class="clearfix"> <span class="p1">'+pair[0]+'</span> <span class="talks-to">talks to</span> <span class="p2">'+pair[1]+'</span> </li>')
}

function storePairs() {
    localStorage.setItem('pairs', JSON.stringify(window.pairs))
}

function loadPairs() {
    var pairs = JSON.parse(localStorage.getItem('pairs'));
    console.log(pairs);
    for (var i = 0; i < pairs.length; i++) {
        addPair(pairs[i]);
    }
}

function fadeToList() {
    $('#form-container').fadeOut(500, function() { $('#pair-container').fadeIn() });
}

function fadeToForm() {
    $('#pair-container').fadeOut(500, function() { $('#form-container').fadeIn() });
}

function formIsOkay() {
    if (
        ($('#the-form input[name=p1]').val() != '') &&
        ($('#the-form input[name=p2]').val() != '')
    ) {
        return true;
    } else {
        return false;
    }
}

/* trigger when page is ready */
$(document).ready(function (){
    // your functions go here
    $("#the-form").submit(function(e) {
        e.preventDefault();
        if (formIsOkay() == true) {
            pair = extractPair();
            addPair(pair);
            storePairs();
            clearPair();
            fadeToList();
        }
    });
    $("#back-to-form").click(function(e) {
        e.preventDefault();
        fadeToForm();
    });
    $("#back-to-list").click(function(e) {
        e.preventDefault();
        fadeToList();
    });
});
