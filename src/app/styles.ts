import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export const Content = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: start;
  justify-content: center;
`;

export const ContentBanner = styled.section`
  display: flex;
  width: 80%;
  height: 70%;
  gap: 2.5em;
  margin-top: 5em;
  align-items: center;
  justify-content: center;
`;

export const MainAnnouncement = styled.div`
  width: 70%;
  height: 100%;
  border-radius: 5px;
  background-color: #f2f4f5;
`;

export const OtherAnnouncement = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 5px;
  background-color: #f2f4f5;
`;
