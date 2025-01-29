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
    })

    containerHTML.innerHTML += `<h2>${resources[id].category}</h2>`
    containerHTML.innerHTML += `<span>${resources[id].text}</span>`

    let links = resources[id].sources
        .map(src => `<li class='sourceList'><a href="${src.url}">${src.title}</a></li>`)
        .join("");

    containerHTML.innerHTML += `<ul>${links}</ul>`

    
 }

 showHTML(0)