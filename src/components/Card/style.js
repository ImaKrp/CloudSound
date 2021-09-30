import styled from "styled-components";
import { Link } from "react-router-dom";

export const Play = styled(Link)`
  position: absolute;
  display: none;
  bottom: 2.3rem;
  right: 0.7rem;
  width: 4rem;
  height: 4rem;
  border-radius: 2rem;
  background-color: var(--blue);
  justify-content: center;
  align-items: center;
  transition: transform 0.3s;

  img {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const ImageDiv = styled.div`
  width: 100%;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 0.4rem;
  margin-bottom: 1.5rem;
  box-shadow: 0px 2px 15px -3px #000000bf;
`;

export const Wrapper = styled(Link)`
  width: 18rem;
  height: 25rem;
  background-color: var(--b600);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.4rem;
  padding: 16px;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--b700);
  }

  &:hover ${Play} {
    display: flex;
  }
`;

export const SongName = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--white);
  max-width: 148px;
  max-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Artist = styled.span`
  font-size: 1.4rem;
  font-weight: thin;
  color: #7c7c7c;
`;
