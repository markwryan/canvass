class Contact {
    private readonly _contactName: String;
    private readonly _notes: String;
    private readonly _id: Number;

    get id(): Number {
        return this._id;
    }

    get contactName(): String {
        return this._contactName;
    }

    get notes(): String {
        return this._notes;
    }

    constructor(id: number, contactName: String, notes: String) {
        this._id = id;
        this._contactName = contactName;
        this._notes = notes;
    }

}

export default Contact;