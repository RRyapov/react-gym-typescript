import React from "react";
import { observer } from "mobx-react-lite";

import { PaginationLayout, PaginationBlock, PaginationLi } from "./styles";
import { programStorage } from "../../stores";

export const Pagination = observer(() => {
  const { pageCount, pageNumber, setPageNumber } = programStorage;
  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }

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
