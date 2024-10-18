import styled from "styled-components";
import { DealItem } from "../store/fatures/deals/dealsApiSlice";
import DealDescription from "./DealDescription";
import DealDescriptionContainer from "./DealDescriptionContainer";
import Span from "./Span";

interface DealProps {
  deal: DealItem;
  img: string;
}

const DealsItem = styled.li<Partial<DealProps>>`
  flex: 0 1 calc(50% - 10px);

  display: flex;
  align-items: flex-end;
  position: relative;
  padding: 0px 80px 9px 9px;
  width: 400px;
  height: 400px;

  border-radius: 10px;
  background: url(${props => props.img});

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
  }

  @media ${props => props.theme.media.laptopS} {
    min-width: 100%;
  }

  @media ${props => props.theme.media.laptopM} {
    padding: 0px 10px 9px 9px;
  }

  @media ${props => props.theme.media.phone} {
    height: 300px;
  }
`;

const DealDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 100%;
  height: 25%;
  z-index: 777;
`;

const DealDescriptionName = styled.h2`
  font-family: "Merriweather", serif;
  font-size: 20px;
  color: #ffff;
`;

const Deal = ({ deal }: DealProps) => {
  const containerStyles = {
    background: `url(${deal.img}) no-repeat`,
    backgroundSize: "cover",
  };

  return (
    <DealsItem style={containerStyles}>
      <DealDescriptionWrapper>
        <DealDescriptionName>{deal.objName}</DealDescriptionName>

        <DealDescriptionContainer>
          <DealDescription alignSelfPosition="start">
            <Span>{deal.objPrice}&nbsp;Dhs</Span>
            <Span>Ticket - {deal.ticketPrice}&nbsp;Dhs</Span>
          </DealDescription>

          <DealDescription>
            <Span>Yield {deal.yield}</Span>
            <Span>Days left {deal.daysLeft}</Span>
          </DealDescription>

          <DealDescription alignSelfPosition="end">
            <Span>Sold {deal.sold}</Span>
          </DealDescription>
        </DealDescriptionContainer>
      </DealDescriptionWrapper>
    </DealsItem>
  );
};

export default Deal;
