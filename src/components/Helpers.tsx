export enum SortingDirection {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
  UNSORTED = "UNSORTED"
}

type SortingObject = {
  direction: string;
};

export const getNextSortingDirection = (sortingDirection: SortingDirection) => {
  if (sortingDirection === SortingDirection.UNSORTED)
    return SortingDirection.ASCENDING;
  if (sortingDirection === SortingDirection.ASCENDING)
    return SortingDirection.DESCENDING;
  return SortingDirection.UNSORTED;
};

export const sortData = (
  data: any,
  sortKey: string,
  sortingDirection: SortingDirection
) => {
  if (SortingDirection.UNSORTED === sortingDirection) sortKey = "id";
  data.sort((a: any, b: any) => {
    const relevantValueA = a[sortKey];
    const relevantValueB = b[sortKey];
    if (
      sortingDirection === SortingDirection.ASCENDING ||
      SortingDirection.UNSORTED === sortingDirection
    ) {
      if (relevantValueA < relevantValueB) return -1;
      if (relevantValueA > relevantValueB) return 1;
      return 0;
    } else {
      if (relevantValueA > relevantValueB) return -1;
      if (relevantValueA < relevantValueB) return 1;
      return 0;
    }
  });
};

export const checkSorting = (sortingDirections: SortingObject) => {
  if (sortingDirections.direction === SortingDirection.UNSORTED) return "id";
  if (sortingDirections.direction === SortingDirection.ASCENDING) return "A-Z";
  if (sortingDirections.direction === SortingDirection.DESCENDING) return "Z-A";
};
