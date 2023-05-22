import User from "../Api";
import styled from "styled-components";

export default function Heading() {
  const userData = User();

  return (
    <UserNameContainer>
      <HelloName>
        Bonjour <UserName>{userData?.data.userInfos.firstName}</UserName>
      </HelloName>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </UserNameContainer>
  );
}

const UserNameContainer = styled.div`
  margin: 20rem 0 10rem 20rem;
`;

const HelloName = styled.h1`
  font-size: 4.8rem;
  font-weight: 500;
`;

const UserName = styled.span`
  color: #ff0101;
`;
