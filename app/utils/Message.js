class Message {

	constructor(status, data, message) {
		this.status = status;
		this.data = data;
		this.message = message;
		this.timestamp = new Date().getTime();
	}

	// success cue
	static sendSuccess(data, type) {
		return new Message(200, data, type + '成功!');
	}

	// Failed cue
	static sendFail() {
		return new Message(500, null, '操作失败!');
	}
}

module.exports = Message;
