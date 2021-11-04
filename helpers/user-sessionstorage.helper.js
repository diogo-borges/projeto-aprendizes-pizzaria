function loggedSession(model) {
    let session = JSON.parse(sessionStorage.getItem('userSession'));
    if (!session) session = [];
    session.push(model);
    sessionStorage.setItem('userSession', JSON.stringify(session));
}

export default loggedSession;
