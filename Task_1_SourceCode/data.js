data = {
    services:[
    {
        name: "Application Services",
        image: "images/application.png",
        features: ["Latest Technology", "Micro Service Architectiure"
         ,"Cloud Native","Test Driven Development"]
    },
    {
        name: "Testing Services",
        image: "images/testing.png",
        features: ["End to End Testing", "Performance Analysis"
         ,"Quality Assurance","Powerful tools"]
    },
    {
        name: "Infrastructure Services",
        image: "images/infrastructure.png",
        features: ["Cloud Services", "Low Cost"
         ,"Premium Hardware","High Performance"]
    }

]
}

let code =""

function fn_alert(name){
alert(name)
}

for(let service of data.services){
    code+= "<div class='service-box'>"
    code+="<h5>"+service.name+"</h5>"
    code+="<img src='"+service.image+"'>"
    code+="<div class='features'> <ul>"
    for(let feature of service.features){
       // code+="<li onclick='alert("+feature+")'>"+feature+"</li>"
       code+="<li class:'mouse' onclick='fn_alert(\""+feature+"\")'>"+feature+"</li>"
    }
    code+="</ul></div></div>"
}


document.getElementById("service-wrapper").innerHTML = code