import React from "react";
import { observer } from "mobx-react-lite";

import { PaginationLayout, PaginationBlock, PaginationLi } from "./styles";
import { programStorage } from "../../stores";

export const Pagination = observer(() => {
  const { pageNumbers, pageNumber, setPageNumber } = programStorage;

  return (
    <PaginationLayout>
      <PaginationBlock>
        {pageNumbers.map((number) => (
          <PaginationLi
            isActive={pageNumber === number}
            key={`${pageNumber} ${number}`}
            onClick={() => setPageNumber(number)}
          >
            {number}
          </PaginationLi>
        ))}
      </PaginationBlock>
    </PaginationLayout>
  );
});
