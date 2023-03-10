
const tableBody = document.getElementById("table-body");

      dataStMap.forEach((value, key) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = value.name;
        row.appendChild(nameCell);

        const mentionCell = document.createElement("td");
        mentionCell.textContent = value.mention;
        row.appendChild(mentionCell);

        const notesCell = document.createElement("td");
        notesCell.textContent = value.notes.join(", ");
        row.appendChild(notesCell);

        const averageCell = document.createElement("td");
        averageCell.textContent = value.average;
        row.appendChild(averageCell);

        tableBody.appendChild(row);
      });