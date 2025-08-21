//console.log('Hello from app.js!');
//console.log('This is a simple JavaScript file included in the HTML.');

const b1 = document.querySelector('button')
b1.onclick = function buttonClick(e) {
    console.log('Button clicked!');
    const rndNum = Math.floor(Math.random() * 10) + 1;
    const squareNum = rndNum * rndNum;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${rndNum}</td>

        <td>${squareNum}</td>`;

        const tbody = document.querySelector('tbody');
        tbody.appendChild(newRow);

}