 const navHTML = document.getElementById("navigate")

 let navigateList = ""
 function renderNav(category, index) {
    navigateList += `<li id="nav${index}" onClick="(showHTML(${index}))"><span id="nav${index}span">${category.category}</span></li>`
 }
 resources.forEach(renderNav)
navHTML.innerHTML = navigateList

const containerHTML = document.getElementById("paragraph")

 function showHTML(id) {
    containerHTML.innerHTML = ""
    resources.forEach(function(category, catid) {
        let background = "#2A324B"
        let text = "#fff"
        if (id === catid) {
            background = "#fff"
            text = "#2A324B"
        }
        document.getElementById(`nav${catid}`).style.backgroundColor = background
        document.getElementById(`nav${catid}span`).style.color = text
    }
    )
    containerHTML.innerHTML += `<h2>${resources[id].category}</h2>`
    containerHTML.innerHTML += `<span>${resources[id].text}</span>`
    containerHTML.innerHTML += "<ul>"
    resources[id].sources.forEach(function(src, srcid){
        //fikk "sourcres til å gå lengre inn fra teksten men punktene eller prikkene fulgte ikke med"
        containerHTML.innerHTML += `<li class="sourceList"><a href="${src.url}">${src.title}</a></li>`
    })
    containerHTML.innerHTML += "</ul>"
 }

 showHTML(0)