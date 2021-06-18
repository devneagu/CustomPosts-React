import styled from "styled-components";

export const ParentContainerCards: HTMLElement = styled.div`
  font-family: "Roboto", sans-serif;
  width: 75%;
  margin: 0 auto;
`;

export const HeaderCard: HTMLElement = styled.h1`
  border-bottom: 0.04em solid #eeeeee;
  padding-bottom: 0.2em;
  margin: 0.25em 0;
`;

export const CardItemsContainer: HTMLElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.4em;
  margin-left: -0.25em;
`;

export const SortButton: HTMLElement = styled.button`
  background: #4153af;
  border: 1px solid #4153af;
  padding: 0.5em 1em;
  border-radius: 0.3em;
  text-transform: uppercase;
  color: white;
`;
