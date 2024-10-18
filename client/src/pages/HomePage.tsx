import { useRef } from "react";
import styled from "styled-components";
import { useGetAllDealsQuery } from "../store/fatures/deals/dealsApiSlice";
import Deal from "../components/Deal";
import homePageImage from "/src/assets/be8fbaf8d7b80aeb919c8ae858f5037f.png";

const StyledContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background: url(${homePageImage}) no-repeat center;
  background-size: cover;
`;

const HomePageHeaderSection = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;

  background: rgba(23, 34, 52, 0.6);
`;

const HomePageText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow: hidden;
`;

const HomePageTextHeader = styled.h1`
  align-self: stretch;
  text-align: center;
  color: #fff;
  font-family: Merriweather;
  font-size: clamp(2.6em, 5vw, 4em);
  font-style: normal;
  font-weight: 700;
`;

const HomePageTextBody = styled.p`
  max-width: 822px;
  color: #fff;
  text-align: center;
  font-family: "Lato";
  font-size: clamp(1em, 5vw, 1.5em);
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.48px;

  @media ${props => props.theme.media.tablet} {
    padding: 20px;
  }
`;

const HomePageButton = styled.button`
  padding: 10px 24px;
  border: 1px solid #fff;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;

  font-family: "Merriweather";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  background: transparent;
`;

const DealContainer = styled.div`
  align-content: flex-end;
  padding: 20px 180px;
  min-width: 100%;
  height: 100vh;

  @media ${props => props.theme.media.laptopL} {
    padding: 20px 120px;
  }

  @media ${props => props.theme.media.tablet} {
    padding: 20px 60px;
  }

  @media ${props => props.theme.media.phone} {
    padding: 20px;
  }
`;

const DealsHeader = styled.div`
  heigth: 50px;
  color: #b29f7e;
  font-family: "Merriweather";
  font-size: clamp(2.4em, 5vw, 3em);
  font-style: normal;
  font-weight: 700;
`;

const AllDeals = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px 0px;
`;

const StyledPageWrapper = styled.div`
  height: 100vh;
`;

const HomePage = () => {
  const { data: allDeals, isSuccess } = useGetAllDealsQuery();

  const dealsContainerRef = useRef<HTMLDivElement | null>(null);

  const handleScrollOnClick = () => {
    dealsContainerRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <StyledPageWrapper>
      <StyledContainer>
        <HomePageHeaderSection>
          <HomePageText>
            <HomePageTextHeader>
              The chemical negatively charged
            </HomePageTextHeader>
            <HomePageTextBody>
              Numerous calculations predict, and experiments confirm, that the
              force field reflects the beam, while the mass defect is not
              formed. The chemical compound is negatively charged. Twhile the
              mass defect is
            </HomePageTextBody>
          </HomePageText>
          <HomePageButton onClick={handleScrollOnClick}>
            Go to Open Deals
          </HomePageButton>
        </HomePageHeaderSection>
      </StyledContainer>
      <DealContainer>
        <DealsHeader ref={dealsContainerRef}>Open Deals</DealsHeader>
        <AllDeals>
          {isSuccess &&
            allDeals.map(dealItem => (
              <Deal key={dealItem.id} deal={dealItem} img={dealItem.img} />
            ))}
        </AllDeals>
      </DealContainer>
    </StyledPageWrapper>
  );
};

export default HomePage;
