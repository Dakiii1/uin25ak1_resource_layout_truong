 console.log(resources)
 console.log(resources[0].category)

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
            background = "#2A324B"
            text = "#fff"
        }
        document.getElementById(`nav${catid}`).style.backgroundcolor = background
        document.getElementById(`nav${catid}span`).style.color = text
    }
    )
    containerHTML.innerHTML += `<h2>${resources[id].category}</h2>`
    containerHTML.innerHTML += `<span>${resources[id].text}</span>`
    containerHTML.innerHTML += "<ul>"
    resources[id].sources.forEach(function(src, srcid){
        containerHTML.innerHTML += `<li><a href="${src.url}">${src.title}</a></li>`
    })
    containerHTML.innerHTML += "</ul>"
 }

 showHTML(0)