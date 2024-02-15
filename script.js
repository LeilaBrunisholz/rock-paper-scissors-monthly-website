let userName = prompt('enter your name')





let story = `Hello, ${userName}, prepare to lose.`



let madLibOutputDiv = document.getElementById('madLibOutput')
console.log(story)


madLibOutputDiv.innerHTML = `<p>${story}</p>`






