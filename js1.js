var txt1=document.querySelector("#text-area1")
var btn2=document.querySelector("#btn1")
var txt2=document.querySelector("#text-area2")
var url="https://api.funtranslations.com/translate/minion.json"

function getTranslate(text)
{
    return url+"?"+"text="+text;
}

function tr()
{
    var inputtex=txt1.value
    console.log(inputtex)
    fetch(getTranslate(inputtex))
.then(response => response.json())
.then(json => {
    console.log(json.contents.translated);
    txt2.innerText = json.contents.translated;
})



}


btn2.addEventListener("click",tr)
