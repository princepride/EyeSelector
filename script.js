let container = document.querySelector('.container');
for(let i = 0; i < 10; i ++) {
    let tempRow = document.createElement('div');
    tempRow.className = 'row';
    for(let j = 0; j < 22; j ++) {
        let temp = document.createElement('div');
        temp.className = 'node';
        temp.id = `${i}-${j}`;
        tempRow.appendChild(temp);
    }
    container.appendChild(tempRow);
}

document.addEventListener('mousemove', (event) => {
    let elements = document.elementsFromPoint(event.clientX,event.clientY);
    console.log(event.clientX, event.clientY);
    console.log(elements);
})