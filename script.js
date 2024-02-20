const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function zeroPad(num) {
  return num.toString().padStart(2, "0");
}

function displayCalendar(month, year) {
  const firstDay = new Date(year, month).getDay();
  const daysInMonth = 32 - new Date(year, month, 32).getDate();

  let date = 1;
  let calendarBody = "";

  for (let i = 0; i < 6; i++) {
    let row = "<tr>";
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        row += "<td></td>";
      } else if (date > daysInMonth) {
        break;
      } else {
        row += `<td>${zeroPad(date)}</td>`;
        date++;
      }
    }
    row += "</tr>";
    calendarBody += row;
  }

  document.getElementById("monthYear").innerHTML = `${months[month]} ${year}`;
  document.getElementById("calendarBody").innerHTML = calendarBody;
}

function prevMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  displayCalendar(currentMonth, currentYear);
}

function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  displayCalendar(currentMonth, currentYear);
}

displayCalendar(currentMonth, currentYear);
