import React from "react";
import { DropdownFreeSpace, DropdownTitle, GeneralDropdownBlock, ProgramDropdownBlock } from "../../common/ui/Dropdowns";
import { dropdownStorage } from "../../stores/dropdownStores";
import { observer } from "mobx-react-lite";
// import { genders } from "../../common";

export const ProgramDropdown: React.FC = () => {
  const { setVisibleDropdownFreeSpace, genders, setActiveGender, visibleDropdownFreeSpace, activeGenderTitle } = dropdownStorage;
  return (
    <GeneralDropdownBlock>
      <ProgramDropdownBlock>
        <DropdownTitle>Пол ↓</DropdownTitle>
        <DropdownFreeSpace onClick={setVisibleDropdownFreeSpace}>{activeGenderTitle}</DropdownFreeSpace>

        {visibleDropdownFreeSpace && (
          <ul>
            {genders.map(({ title, value }, index) => (
              <DropdownFreeSpace
                onClick={() => {
                  setActiveGender(value);
                  setVisibleDropdownFreeSpace();
                  // getGenderFilteredPrograms(value);
                }}
                key={value}
              >
                {title}
              </DropdownFreeSpace>
            ))}
          </ul>
        )}
      </ProgramDropdownBlock>
    </GeneralDropdownBlock>
  );
};

export default observer(ProgramDropdown);
