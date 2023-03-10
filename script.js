const WIDTH = 16;
const HEIGHT = 16;
const MAX_SIZE = 100;

function createRow(size) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let i = 0; i < size; i++) {
        const cell = createCell();
        row.appendChild(cell);
    }

    return row;
}

function createCell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');

    cell.addEventListener('mouseover', () => {
        cell.classList.add('hovered');
    })

    return cell;
}

function createContainer(height, width) {
    const container = document.createElement('div');
    container.id = 'container';

    for (let i = 0; i < height; i++) {
        const row = createRow(width);
        container.appendChild(row);
    }

    return container;
}

const body = document.querySelector('body');
const container = createContainer(HEIGHT, WIDTH);
body.appendChild(container);

const button = document.querySelector('button');
button.addEventListener('click', () => {
    const size = parseInt(prompt('Enter a single value for the height and width:'));
    
    if (size > MAX_SIZE) {
        alert(`Size cannot be larger than ${MAX_SIZE}!`)
        return;
    }

    const newContainer = createContainer(size, size);
    const oldContainer = document.querySelector('#container');
    body.replaceChild(newContainer, oldContainer);
});