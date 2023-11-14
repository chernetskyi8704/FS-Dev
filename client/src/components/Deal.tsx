import styled from "styled-components";
import DealDescription from "./DealDescription";
import { DealItem } from "../store/fatures/deals/dealsApiSlice";

interface DealProps {
  deal: DealItem;
  img: string;
}

const DealsItem = styled.li<Partial<DealProps>>`
  position: relative;
  min-width: 400px;
  flex: 0 1 calc(50% - 10px);
  border-radius: 10px;
  background: url(${props => props.img});
  height: 400px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background: rgba(0,0,0,0.2);
  }
`;

const Deal = ({ deal }: DealProps) => {
  const containerStyles = {
    background: `url(${deal.img})`,
  };

  return (
    <DealsItem style={containerStyles}>
      <DealDescription
        styles={{
          bottom: "69px",
          left: "14px",
          width: "216px",
          height: "34px",
          fontFamily: "Merriweather",
          fontSize: "20px",
          lineHeight: "34px",
        }}
      >
        {deal.objName}
      </DealDescription>
      <DealDescription
        styles={{
          bottom: "47px",
          left: "14px",
          width: "170px",
          height: "17px",
          fontFamily: "Lato",
          fontSize: "18px",
          lineHeight: "22px",
        }}
      >
        {deal.objPrice} Dhs
      </DealDescription>
      <DealDescription
        styles={{
          bottom: "20px",
          left: "14px",
          width: "170px",
          height: "17px",
          fontFamily: "Lato",
          fontSize: "18px",
          lineHeight: "22px",
        }}
      >
        Tiket - {deal.ticketPrice} Dhs
      </DealDescription>
      <DealDescription
        styles={{
          bottom: "47px",
          left: "244px",
          width: "170px",
          height: "17px",
          fontFamily: "Lato",
          fontSize: "18px",
          lineHeight: "22px",
        }}
      >
        Yield {deal.yield}
      </DealDescription>
      <DealDescription
        styles={{
          bottom: "20px",
          left: "244px",
          width: "170px",
          height: "17px",
          fontFamily: "Lato",
          fontSize: "18px",
          lineHeight: "22px",
        }}
      >
        Days left {deal.daysLeft}
      </DealDescription>
      <DealDescription
        styles={{
          bottom: "47px",
          left: "474px",
          width: "170px",
          height: "17px",
          fontFamily: "Lato",
          fontSize: "18px",
          lineHeight: "22px",
        }}
      >
        Sold {deal.sold}
      </DealDescription>
    </DealsItem>
  );
};

export default Deal;
