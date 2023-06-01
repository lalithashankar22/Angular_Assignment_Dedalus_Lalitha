async function quoteRead()
{
    let response = await fetch("https://api.quotable.io/random")
    let data = await response.json()
   // console.log(data)
quote = data
author = data.author
content = data.content
Date1 = data.dateModified
let code = ""
code +="<p>"+ content + "</p>"
code +="<b><i> - "+author +" on "+ Date1 +"</i></b>"
document.getElementById("quotes-for-the-day").innerHTML=code
}

quoteRead()
setInterval(quoteRead,4000)

async function authorSearch(){
    let searchString=document.getElementById("author").value
let response=await fetch("https://api.quotable.io/search/authors?query="+searchString)
    let data = await response.text()
    let authorData = JSON.parse(data)
    let authors = authorData.results
    let code=""
    for(let author of authors){
         code+="<div class='author-name'>"+author.name+"</div>"
    }
    document.getElementById("author-result").innerHTML=code
}

//to clear the search once it is clear 
setInterval(function(){
    if (document.getElementById("author").value=="")
    document.getElementById("author-result").innerHTML=""
},1000)
/*
response=fetch("https://api.quotable.io/random")
//return of fetch is promise
//unless you specify method name in fetch function, it
//will always make get request

response.then (
    (response) => {
        response.json().then(
            (data) => console.log(data),
            (error) => console.log(error)
        )
    },
    (error) => console.log(error , " is the error")
)
console.log(response)

*/