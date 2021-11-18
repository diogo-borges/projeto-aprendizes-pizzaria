function loggedSession(model) {
  sessionStorage.setItem('userSession', JSON.stringify(model));
}

export default loggedSession;
