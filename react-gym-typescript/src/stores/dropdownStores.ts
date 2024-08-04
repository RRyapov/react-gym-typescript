import { makeAutoObservable } from "mobx";
import { filtersEnum } from "./types";

class DropdownsStore {
  _visibleProgramDropdown: boolean = false;
  _visibleDropdownFreeSpace: boolean = false;

  _genders: { title: string; value: number }[] = [
    { title: "М/Ж", value: 0 },
    { title: "М", value: 1 },
    { title: "Ж", value: 2 },
  ];

  _activeFilters: Record<filtersEnum, number | number[] | null> = {
    [filtersEnum.GENDER]: null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  get activeFilters() {
    return Object.values(this._activeFilters).some((i) => typeof i === "number" || Array.isArray(i))
      ? Object.entries(this._activeFilters).map(([key, value]) => ({ key, value }))
      : null;
  }

  get visibleProgramDropdown() {
    return this._visibleProgramDropdown;
  }

  get visibleDropdownFreeSpace() {
    return this._visibleDropdownFreeSpace;
  }

  get activeGenderValue() {
    return this._activeFilters[filtersEnum.GENDER];
  }

  get activeGenderTitle() {
    return this._genders.find(({ value }) => value === this._activeFilters[filtersEnum.GENDER])?.title ?? "";
  }

  setActiveGender = (value: number): void => {
    this._activeFilters[filtersEnum.GENDER] = value;
  };

  get genders() {
    return this._genders;
  }

  setVisibleProgramDropdown = (): void => {
    this._visibleProgramDropdown = !this._visibleProgramDropdown;
  };

  setClosedProgramDropdown = (): void => {
    this._visibleProgramDropdown = false;
  };

  setVisibleDropdownFreeSpace = (): void => {
    this._visibleDropdownFreeSpace = !this._visibleDropdownFreeSpace;
  };
}

export const dropdownStorage = new DropdownsStore();
