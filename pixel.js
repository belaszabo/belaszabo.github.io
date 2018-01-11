'use strict';

let isDown = false;
let pixelData = document.getElementById('pixel_canvas');
let table = '';
let color = document.getElementById('colorPicker');
let height = document.getElementById('input_height');
let width = document.getElementById('input_width');
let sizePicker = document.getElementById('sizePicker');

function makeGrid(rows, cols) {
	for (let row = 0; row < rows; row++) {
		let addTr = '<tr>';
		for (let col = 0; col < cols; col++) {
			addTr += '<td data-x=' + row + ' data-y=' + col + '></td>';
		}
		addTr += '</tr>';
		table += addTr;
  }
  pixelData.innerHTML = table;
}

function paint(cell) {
    cell.setAttribute('style', 'background-color: ' + color.value);
}

window.onload = function () {
  

  sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid(height.value, width.value)
  });
  
  pixelData.addEventListener('mousedown', function(event) {
    event.preventDefault();
    isDown = true;
    let cell = event.target.closest('td');
    if (isDown) {
      paint(cell);
    }
  });
  
  pixelData.addEventListener('mouseover', function(event) {
    event.preventDefault();
    let cell = event.target.closest('td');
    if (isDown) {
      paint(cell);
    }
  });
  
  pixelData.addEventListener('mouseup', function(event) {
    event.preventDefault();
    isDown = false;
  });
}
