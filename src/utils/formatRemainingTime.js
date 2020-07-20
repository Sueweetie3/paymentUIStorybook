const getRemainingTimeBySeconds = (countdownSeconds) => {
    const days = Math.floor(countdownSeconds / 86400);
    const hours = Math.floor(countdownSeconds / 3600);
    const minutes = Math.floor(countdownSeconds / 60) % 60;
    const seconds = countdownSeconds % 60;
    const remainingTime = { d: days, hr: hours, m: minutes, s: seconds };
    return Object.keys(remainingTime).reduce((txt, key) => {
      return (
        txt +
        (remainingTime[key] ? remainingTime[key] + ' ' + key : '') +
        (key !== 's' ? ' ' : '')
      );
    }, '');
}
export default getRemainingTimeBySeconds;
  