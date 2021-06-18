import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import {
  SortingDirection,
  checkSorting,
  getNextSortingDirection,
  sortData
} from "./components/Helpers";
import {
  ParentContainerCards,
  HeaderCard,
  CardItemsContainer,
  SortButton
} from "./components/styled/ContainerCards";
import CardItem from "./components/CardItem";

type ElementCard = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function Cards() {
  //change the Number Of Items For the page
  const ItemsPerPage: number = 20;

  const [sortingDirections, setSortingDirections] = useState({});
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [activePagination, setActivePagination] = useState(1);

  const changePagination = (value) => {
    setActivePagination(value);
  };

  const sortDataTrigger = () => {
    const currentSortingDirection = sortingDirections["direction"];
    const nextSortingDirection = getNextSortingDirection(
      currentSortingDirection
    );
    sortData(items, "title", nextSortingDirection);
    setSortingDirections({
      direction: nextSortingDirection
    });
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          setPagination(Math.round(result.length / ItemsPerPage));

          const ourSortingDirections = {};
          ourSortingDirections.direction = SortingDirection.UNSORTED;
          setSortingDirections(ourSortingDirections);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (isLoaded) {
    return (
      <ParentContainerCards>
        <HeaderCard>Posts</HeaderCard>
        <div>
          <SortButton onClick={() => sortDataTrigger()}>
            Sorted by {checkSorting(sortingDirections)}
          </SortButton>

          <Pagination
            changePagination={changePagination}
            pagination={pagination}
            activePagination={activePagination}
          />
        </div>

        <CardItemsContainer>
          {items &&
            items.length > 0 &&
            items
              .slice(
                (activePagination - 1) * ItemsPerPage,
                activePagination * ItemsPerPage
              )
              .map((element: ElementCard, elementIdx: number) => (
                <CardItem key={element.id} element={element} />
              ))}
        </CardItemsContainer>
      </ParentContainerCards>
    );
  }
}

export default Cards;
