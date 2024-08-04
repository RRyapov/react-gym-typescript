import { observer } from "mobx-react-lite";
import React from "react";

import { programStorage } from "../../stores";
import { PaginationLayout, PaginationBlock, PaginationLi } from "./styles";

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
