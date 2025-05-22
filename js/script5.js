function addTableRow() {
    while (true) {
        const data = prompt("Введите содержимое ячейки (ESC — выход):");
        if (data === null) break;

        const table = document.getElementById("myTable");
        const row = document.createElement("tr");
        const cell = document.createElement("td");

        cell.textContent = data;
        row.appendChild(cell);
        table.appendChild(row);

        cell.onclick = () => {
            if (confirm(`Удалить ячейку с содержимым: "${cell.textContent}"?`)) {
                row.remove();
            }
        };
    }
}

function makeDeletable(element, name) {
    element.style.cursor = "pointer";
    element.onclick = () => {
        const content = element.textContent || element.alt || "[Без содержимого]";
        if (confirm(`Удалить ${name}? Содержимое: "${content}"`)) {
            element.remove();
        }
    };
}