class modelSession {
	constructor(id) {
		this.id = id;
		this.loggedAt = new Date(Date.now()).toISOString();
	}
};

export default modelSession; 