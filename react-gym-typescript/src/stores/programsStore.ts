import ky from "ky";
import { makeAutoObservable } from "mobx";
import { ProgramType, ProgramTypes } from "./types";
import { dropdownStorage } from "./dropdownStores";

class ProgramsStore {
  _programs: ProgramTypes = [];
  _pageNumber = 1;
  _chosenPageNumber = 0;

  _filterStorage = dropdownStorage;

  constructor() {
    makeAutoObservable(this);
  }

  get allPrograms() {
    return this._programs;
  }

  get pageNumber() {
    return this._pageNumber;
  }

  get filteredPrograms() {
    return this.allPrograms.filter((item) => {
      const activeFilters = this._filterStorage.activeFilters;

      if (activeFilters)
        for (let { key, value } of activeFilters) {
          if (item[key as keyof ProgramType] !== value) return false;
        }

      return true;
    });
  }

  get pageCount() {
    return Math.ceil(this.filteredPrograms.length / 3);
  }

  get pageNumbers() {
    const pageNumbers = [];
    for (let i = 1; i <= this.pageCount; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  get paginatedAndFilteredPrograms() {
    return this.filteredPrograms.slice(this.pageNumber * 3 - 3, this.pageNumber * 3);
  }

  setPageNumber = (page: number) => {
    this._pageNumber = page;
  };

  getProgram = (programId?: number): ProgramType | null => {
    if (!programId || Number.isNaN(programId)) return null;
    return this._programs.find(({ id }) => +id === +programId) ?? null;
  };

  getAllPrograms = async () => {
    try {
      const response = await ky.get("http://localhost:3001/programs").json<ProgramType[]>();
      this._programs = response;
    } catch (error) {
      console.error("Failed to fetch programs", error);
    }
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
