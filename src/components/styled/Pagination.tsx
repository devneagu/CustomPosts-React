import styled from "styled-components";

export const PaginationContainer: HTMLElement = styled.span`
  float: right;
  -webkit-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -ms-user-select: none;
  @media (max-width: 400px) {
    float: none;
    display: block;
  }
`;

export const PaginationSvg: HTMLElement = styled.svg`
  height: 1.2em;
  width: 1.2em;
  vertical-align: bottom;
  fill: #fffff;
  cursor: pointer;
`;
export const PaginationItem: HTMLElement = styled.span`
  margin-right: 0.4em;
  margin-left: 0.4em;
  z-index: -10;
  cursor: pointer;
  padding: 0 0.3em;
  font-size: 0.8em;
  line-height: 1.5em;
  &.active {
    color: white;
    position: relative;
  }
  &.active::after {
    content: "";
    position: absolute;
    background: #4153af;
    border-radius: 1.5em;
    z-index: -10;
    width: 1.5em;
    height: 1.5em;

    left: 0.05em;
    top: -0.1em;
    margin-left: -0.2em;
  }
`;
