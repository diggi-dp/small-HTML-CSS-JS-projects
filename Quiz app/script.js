const URL = 'https://5d76bf96515d1a0014085cf9.mockapi.io/quiz';

let myData = [];

let section = document.getElementById('section')
let aside = document.querySelector('#resultbox')
let btndiv = document.createElement('div');
let submitbtn = document.createElement('button');
btndiv.classList.add('btn');
submitbtn.textContent = "Submit";
btndiv.append(submitbtn);


function renderQuestion() {
    for (let i = 0; i < (myData.length); i++) {    // run a loop for rendering data to html
        let div = document.createElement('div');
        div.classList.add('container')
        div.innerHTML = `
        <p>Q${i + 1}.${myData[i].question}</p>
<div class="row">
    <label><input type="radio" class="option"  value="1" name="${myData[i].id}">${myData[i].options[0]}</label>
</div>
<div class="row">
    <label><input type="radio" class="option" value="2" name="${myData[i].id}">${myData[i].options[1]}</label>
</div>
<div class="row">
    <label><input type="radio" class="option" value="3" name="${myData[i].id}">${myData[i].options[2]}</label>
</div>
<div class="row">
    <label><input type="radio" class="option" value="4" name="${myData[i].id}">${myData[i].options[3]}</label>
</div>
<hr class="horizontalLine">`

        section.append(div)
        if (myData.length - 1 === i) {
            div.append(btndiv)
        }
    }
}




function showResults() {
    const ans = myData.map(data => data.answer)    // Got an array of answers

    let correctopt = 0;
    myData.forEach((currentque, index) => {           //index running 5 times bcz mydata length is 5

        let input = document.querySelectorAll(`input[name='${currentque.id}']`)
        // console.log(input)

        //   loop  to find input of 4 options 
        for (let j = 0; j < input.length; j++) {
            if (input[j].checked) {
                if (input[j].value == ans[index]) {
                    correctopt++;
                }
            }
        }

    });
    let total = myData.length;
    aside.innerHTML = `score : ${correctopt}/${total}`;

}
// add listner on submit button 
submitbtn.addEventListener('click', showResults)

// Get data fron API end point
fetch(URL)
    .then((response) => {
        // console.log(response.json())
        if (response.ok) {
            return response.json()
        }
    })
    .then((questionData) => {
        myData = questionData;
        renderQuestion(myData);
    })
