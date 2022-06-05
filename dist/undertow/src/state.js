import { reactive } from "vue";
import {v4 as uuid} from "uuid";
// use pinia lib afterwards

export const state = reactive({
	notes: [],
	notesMap: {},
	currentEditorNoteID: null,
	nm_length: 0,
	openedNoteIDs: [],
});

export const isAnyNoteOpened = () => !!state.currentEditorNoteID;

class Note {
	constructor ({ text, name, id } = {}) {
		this._text = text || "";
		this.name = name || "Note";
		this.id = id;
		this.dateCreated = new Date();
		this.kind = "Document";
		this.author = "Me";
	}

	get text() {
		return this._text;
	}

	set text(newText) {
		this._text = newText;
	}
}

export const createNote = () => {
	const id = uuid();
	state.notesMap[id] = new Note({ id });
	state.nm_length += 1;
	return id;
}

export const getNote = (id) => {
	return state.notesMap[id];
}

export const getCurrentNote = () => {
	return state.notesMap[state.currentEditorNoteID];
}

export const openNote = (id) => {
	if (!state.openedNoteIDs.includes(id)) {
		state.openedNoteIDs.push(id);
	}
	state.currentEditorNoteID = id;
}

export const openLatestNote = () => () => {
	openNote(Object.keys(state.notesMap)[state.nm_length - 1]);
}

export const closeNote = (id) => {
	const idx = state.openedNoteIDs.findIndex((_id) => _id == id);
	if (idx) {
		if (idx == state.openedNoteIDs.length - 1) {
			state.currentEditorNoteID = state.openedNoteIDs[idx - 1];
		} else {
			state.currentEditorNoteID = state.openedNoteIDs[idx + 1];
		}
	}
	state.openedNoteIDs =
		state.openedNoteIDs.filter((_id) => _id != id)
}
createNote();
createNote();