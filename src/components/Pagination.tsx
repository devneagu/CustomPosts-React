import {
  PaginationContainer,
  PaginationSvg,
  PaginationItem
} from "./styled/Pagination";
import { useEffect, useState } from "react";
export default Pagination;

function PaginationNext() {
  return (
    <PaginationSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
      />
    </PaginationSvg>
  );
}
function PaginationBack() {
  return (
    <PaginationSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
      />
    </PaginationSvg>
  );
}

function Pagination(props) {
  const range = (min, max) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i);
  const [paginationMin, setPaginationMin] = useState(1);
  const [paginationMax, setPaginationMax] = useState(1);
  const [paginationRange, setPaginationRange] = useState([]);

  //in case the number of pages are > 5;
  useEffect(() => {
    if (paginationMin + 5 - 1 > props.pagination) {
      setPaginationMax(props.pagination);
      setPaginationRange(range(paginationMin, props.pagination));
    } else {
      setPaginationMax(paginationMin + 5 - 1);
      setPaginationRange(range(paginationMin, paginationMin + 5 - 1));
    }
  }, [props]);

  const clickHandler = (value: string) => {
    let signOperation = value === "next" ? 1 : -1;
    if (paginationMin === 1 && signOperation === -1) {
      if (props.activePagination !== 1) {
        props.changePagination(props.activePagination + signOperation);
      }
      return;
    }
    if (props.pagination <= paginationMax && signOperation === +1) {
      if (props.activePagination !== paginationMax) {
        props.changePagination(props.activePagination + signOperation);
      }
      return;
    }

    setPaginationRange(
      range(paginationMin + signOperation, paginationMax + signOperation)
    );
    setPaginationMin(paginationMin + signOperation);
    setPaginationMax(paginationMax + signOperation);
    props.changePagination(props.activePagination + signOperation);
  };
  const changeActivePagination = (value) => {
    props.changePagination(value);
  };
  return (
    <PaginationContainer>
      <span onClick={() => clickHandler("prev")}>
        <PaginationBack />
      </span>
      {paginationRange.map((el, index) => (
        <PaginationItem
          onClick={() => changeActivePagination(parseInt(el))}
          className={`${
            parseInt(el) === props.activePagination ? "active" : ""
          }`}
          key={el}
        >
          {el}
        </PaginationItem>
      ))}
      <span onClick={() => clickHandler("next")}>
        <PaginationNext />
      </span>
    </PaginationContainer>
  );
}
