const txtElement = ['Welcome To My Website '];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetikcuk() {
    if(count == txtElement.length){
        count = 0;
    }

    currentTxt = txtElement[count];
    words = currentTxt.slice(0, ++txtIndex)
    document.querySelector('.efek').textContent = words; 

    if(words.length == currentTxt.length){
        count++;
        txtIndex = 0;
    }

    setTimeout(ngetikcuk, 500);
})();



    