console.log(resources)
console.log(resources[0].category)

const navHTML = document.getElementById("navigate")

let navigateList = ""
function navResourceList(category, index) {
    navigateList += `<li id="nav${index}" onClick="(showHTML(${index}))"><span id="nav${index}span">${category.category}</span></li>`
}
resources.forEach(navResourceList)
navHTML.innerHTML = navigateList

