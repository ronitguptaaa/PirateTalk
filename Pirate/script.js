$(document).ready(function () {
    $("#normal").keyup(function () {
        var words = $('#normal').val();
        words = words.replace(/Hello/gi, "ahoy");
        words = words.replace(/^/, "Arr, me hearties. ");
        words = words.replace(/(\w+)ev(\w+)\s/g, "$1e'$2 ");
        $('#pirate').val(words);
    })
});