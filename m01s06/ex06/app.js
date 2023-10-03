function paragraphLog(message) {
<<<<<<< HEAD
  const logContainer = document.querySelector('.');
}
=======
  const logContainerClass = 'logs';
  let logContainer = document.querySelector('.' + logContainerClass);

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add(logContainerClass);
    document.body.append(logContainer);
  }

  const messageParagraph = document.createElement('p');
  messageParagraph.innerText = message;
  logContainer.append(messageParagraph);
}

console.domLog = paragraphLog;

console.domLog('Nu apar in consola.');
>>>>>>> 121fc967390ceca65508113c5f6d6502daded0d6
