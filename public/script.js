var mcq=[]
async function getmcq(){
   
    let questionData=await fetch("/api/questions")
    let questions=await questionData.json()
    mcq=await questions.data
    showQNA(mcq[0])
    
}
getmcq()

var questionNo = 0;
const question = document.getElementById("question")
const option = document.getElementById("option")
const answer = document.getElementById("answer")
const explain = document.getElementById("explain")
const next = document.getElementById("next")
const previous = document.getElementById("previous")
const save=document.getElementById("save")
const edit=document.getElementById("edit")


function showQNA(x) {
    answer.style.display="none"
    explain.style.display="none"
    question.innerHTML = `<h3>${x.question}</h3>`
    edit.innerHTML=`<a href="/api/edit?question=${x._id}">EDIT</a>`
    save.innerHTML=`<a href="/api/save?question=${x._id}">SAVE</a>`

    option.innerHTML = `
    <div onclick="checkOption(this)">${x.optionA}</div>
    <div onclick="checkOption(this)">${x.optionB}</div>
    <div onclick="checkOption(this)">${x.optionC}</div>
    <div onclick="checkOption(this)">${x.optionD}</div>
    `
    answer.innerHTML=`<p>Correct Option:- ${x.answer}</p>`
    explain.innerHTML=`<p>Explanation:- ${x.explain}</p>`
}
function randomize_Option() {

}
function checkOption(e) {
    
    answer.style.display="block"
    explain.style.display="block"
}

next.addEventListener("click", () => {
    if (questionNo < mcq.length-1)
        questionNo++;
    showQNA(mcq[questionNo])

})
previous.addEventListener("click", () => {
    if (questionNo > 0) {
        questionNo--
        showQNA(mcq[questionNo])
    }

})

