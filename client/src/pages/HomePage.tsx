import styled from "styled-components";
import { useGetAllDealsQuery } from "../store/fatures/deals/dealsApiSlice";
import Deal from "../components/Deal";
import homePageImage from "/src/assets/be8fbaf8d7b80aeb919c8ae858f5037f.png";

const StyledContainer = styled.div`
  width: 100%;
  position: relative;
  height: 1024px;
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
  justify-content: center;
  align-items: center;
  background: rgba(23, 34, 52, 0.6);
`;

const HomePageText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const HomePageTextHeader = styled.h1`
  color: #fff;
  align-self: stretch;
  text-align: center;
  font-family: Merriweather;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
`;

const HomePageTextBody = styled.p`
  width: 822px;
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.48px;
`;

const HomePageButton = styled.button`
  border: 1px solid #fff;
  border-radius: 8px;
  padding: 10px 24px;
  cursor: pointer;
  color: #fff;

  font-family: Merriweather;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
  background: transparent;
`;

const DealContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 80px 10px 80px;
  gap: 28px;
  height: calc(1976px - 1024px);
  min-width: 100%;
`;

const DealsHeader = styled.div`
  heigth: 50px;
  color: #b29f7e;
  font-family: Merriweather;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 34px;
`;

const AllDeals = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding-bottom: 20px;
`;

const HomePage = () => {
  const { data: allDeals, isSuccess } = useGetAllDealsQuery();

  return (
    <>
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
          <HomePageButton>
            Get Started
          </HomePageButton>
        </HomePageHeaderSection>
      </StyledContainer>
      <DealContainer>
        <DealsHeader>Open Deals</DealsHeader>
        <AllDeals>
          {isSuccess &&
            allDeals.map(dealItem => (
              <Deal key={dealItem.id} deal={dealItem} img={dealItem.img}/>
            ))}
        </AllDeals>
      </DealContainer>
    </>
  );
};

export default HomePage;
