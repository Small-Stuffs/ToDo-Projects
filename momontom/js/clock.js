// Clock

function showTime() {
  const clockTime = document.querySelector('.time');
  let session;
  const date = new Date();

  let hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

  if (hours > 12) {
    hours = hours - 12;
    session = 'PM';
  } else {
    session = 'AM';
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  const time = `${hours}:${minutes}:${seconds}  ${session}`;
  clockTime.innerHTML = time;
  setTimeout(showTime, 1000);
}
showTime();
