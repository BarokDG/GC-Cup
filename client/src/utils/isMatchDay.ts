export const isMatchDay = (matches) => {
  for (let match of matches) {
    let matchDateString = new Date(match.schedule).toDateString();

    if (new Date().toDateString() === matchDateString) {
      return match.conference;
    }
  }

  return false;
};
