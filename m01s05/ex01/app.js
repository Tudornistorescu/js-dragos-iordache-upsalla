function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  return `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

const exactTime = getTime();

console.log(`${exactTime}, am ajuns la Pixellab.`);

const messageElement = document.getElementById('message');
messageElement.innerText = `${exactTime}, am ajuns la Pixellab.`;
