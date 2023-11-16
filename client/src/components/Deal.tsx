import styled from "styled-components";
import DealDescription from "./DealDescription";
import { DealItem } from "../store/fatures/deals/dealsApiSlice";
import { useState, useRef, useLayoutEffect } from "react";

interface DealProps {
  deal: DealItem;
  img: string;
}

const DealsItem = styled.li<Partial<DealProps>>`
  position: relative;
  width: 400px;
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
    background: rgba(0, 0, 0, 0.2);
  }

  @media ${props => props.theme.media.laptop} {
    min-width: 100%;
  }

  @media ${props => props.theme.media.phone} {
    height: 300px;
  }
`;

const Deal = ({ deal }: DealProps) => {
  const elementRef = useRef<HTMLLIElement | null>(null);
  const [elementWidth, setElementWidth] = useState(0);

  useLayoutEffect(() => {
    function handleResize() {
      if (elementRef.current) {
        const width = elementRef.current.offsetWidth;
        setElementWidth(width);
      }
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [elementRef]);

  const containerStyles = {
    background: `url(${deal.img}) no-repeat`,
    backgroundSize: "cover",
  };

  const getDaysLeftPosition = elementWidth < 364 ? "200px" : "244px";

  return (
    <DealsItem style={containerStyles} ref={elementRef}>
      <DealDescription
        styles={{
          bottom: "69px",
          left: "1%",
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
          left: "1%",
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
          left: "1%",
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
          left: `${getDaysLeftPosition}`,
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
          left: `${getDaysLeftPosition}`,
          height: "17px",
          fontFamily: "Lato",
          fontSize: "18px",
          lineHeight: "22px",
        }}
      >
        Days left {deal.daysLeft}
      </DealDescription>
      {elementWidth > 500 && (
        <DealDescription
          styles={{
            bottom: "47px",
            left: `77%`,
            height: "17px",
            fontFamily: "Lato",
            fontSize: "18px",
            lineHeight: "22px",
          }}
        >
          Sold {deal.sold}
        </DealDescription>
      )}
    </DealsItem>
  );
};

export default Deal;
