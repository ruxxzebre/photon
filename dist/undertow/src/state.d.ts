export declare class Note {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  constructor({
    id: string,
    title: string,
    content: string,
    createdAt: Date,
    updatedAt: Date,
  });
}

export declare class Modal {
  isOpen: boolean;
  constructor({ isOpen: boolean });
}

export declare const initialState: {
  notes: string[];
  notesMap: Record<string, Note>;
  currentEditorNoteID: null | string;
  nm_length: number;
  openedNoteIDs: string[];
  modals: Record<string, Modal>;
};
