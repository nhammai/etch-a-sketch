const container = document.getElementById('grid-container');
const button = document.getElementById('grid-size-button');
const resetButton = document.getElementById('reset-button');
const colorPicker = document.getElementById('color-picker');
const brushSize = document.getElementById('brush-size');

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.style.width = `${brushSize.value}px`;
        div.style.height = `${brushSize.value}px`;
        div.classList.add('grid-item');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = colorPicker.value;
        });
        container.appendChild(div);
    }
}
    
      

button.addEventListener('click', () => {
    let size = prompt('Enter the number of squares per side for the new grid (max 100)');
    size = Math.min(Math.max(parseInt(size), 1), 100);
    createGrid(size);
});

resetButton.addEventListener('click', () => {
    createGrid(Math.sqrt(container.childElementCount));
});

brushSize.addEventListener('input', () => {
    createGrid(Math.sqrt(container.childElementCount));
});

createGrid(16);
