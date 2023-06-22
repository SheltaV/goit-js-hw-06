const inputLine = document.getElementById('font-size-control');
const text = document.getElementById('text');


inputLine.addEventListener('input', magicTool)

function magicTool () {
    text.style.fontSize = `${inputLine.value}px` 
}

