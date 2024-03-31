import axios from "axios";
import { makeAutoObservable } from "mobx";
import { ProgramType, ProgramTypes } from "./types";

class ProgramsStore {
  _programs: ProgramTypes = [];
  _pageNumber = 1;
  _chosenPageNumber = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get allPrograms() {
    return this._programs;
  }

  get pageNumber() {
    return this._pageNumber;
  }

  get pageCount() {
    return Math.ceil(this.allPrograms.length / 3);
  }

  get paginatedPrograms() {
    return this.allPrograms.slice(this.pageNumber * 3 - 3, this.pageNumber * 3);
  }

  setPageNumber = (page: number) => {
    this._pageNumber = page;
  };

  getProgram = (programId?: number): ProgramType | null => {
    if (!programId || Number.isNaN(programId)) return null;
    return this._programs.find(({ id }) => +id === +programId) ?? null;
  };

  getAllPrograms = () => {
    axios
      .get<ProgramTypes>("http://localhost:3001/programs")
      .then(({ data }) => {
        this._programs = data;
      });
  };

  getNextIdProgram = (id: number) => {
    const currentId: number = this.allPrograms.map(({ id }) => id).indexOf(id);
    return this.getProgram(this.allPrograms[currentId + 1].id);
  };

  getPrevIdProgram = (id: number) => {
    const currentId = this.allPrograms.map(({ id }) => id).indexOf(id);
    return this.allPrograms[currentId - 1].id;
  };
}

export const programStorage = new ProgramsStore();
