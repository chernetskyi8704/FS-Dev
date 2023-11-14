import styled from "styled-components";
import DealDescription from "./DealDescription";
import { DealItem } from "../store/fatures/deals/dealsApiSlice";

const DealsItem = styled.li`
  min-width: 400px;
  flex: 0 1 calc(50% - 20px);
`;

const StyledImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 10px;
`;

const DealContent = styled.div`
  position: relative;
  max-height: 400px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
`;

interface DealProps {
  deal: DealItem;
}

const Deal = ({ deal }: DealProps) => {
  return (
    <DealsItem>
      <DealContent>
        <StyledImage src={deal.img} />
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
      </DealContent>
    </DealsItem>
  );
};

export default Deal;
