import styled from "styled-components";
import DealDescription from "../components/DealDescription";

const StyledContainer = styled.div`
  position: relative;
  height: 1024px;
  background: url("../src/assets/be8fbaf8d7b80aeb919c8ae858f5037f.png")
    no-repeat center;
  background-size: cover;
`;

const HomePageHeaderSection = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(23, 34, 52, 0.6);
`;

const HomePageText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 1085px;
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

const Test = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 80px 10px 80px;
  gap: 28px;
  height: calc(1976px - 1024px);
  width: 100%;
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
  flex-wrap: wrap;
  gap: 20px;
`;

const DealsItem = styled.li`
  flex: 0 1 calc(50% - 20px);
`;

const StyledImage = styled.img`
  width: 630px;
  height: 400px;
  border-radius: 10px;
`;

const DealContent = styled.div`
  position: relative;
  width: 630px;
  height: 400px;
  flex-shrink: 0;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
`;

const HomePage = () => {
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
        </HomePageHeaderSection>
      </StyledContainer>
      <Test>
        <DealsHeader>Open Deals</DealsHeader>
        <AllDeals>
          <DealsItem>
            <DealContent>
              <StyledImage
                src="../src/assets/test.png"
                height={"400px"}
                width={"630px"}
              />
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
                The Marina Torch
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
                6 500 000 Dhs
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
                Tiket - 60 000 Dhs
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
                Yield 9.25%
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
                Days left 150
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
                Sold 75%
              </DealDescription>
            </DealContent>
          </DealsItem>
          <DealsItem>
            <DealContent>
              <StyledImage
                src="../src/assets/test.png"
                height={"400px"}
                width={"630px"}
              />
            </DealContent>
          </DealsItem>
          <DealsItem>
            <DealContent>
              <StyledImage
                src="../src/assets/test.png"
                height={"400px"}
                width={"630px"}
              />
            </DealContent>
          </DealsItem>
          <DealsItem>
            <DealContent>
              <StyledImage
                src="../src/assets/test.png"
                height={"400px"}
                width={"630px"}
              />
            </DealContent>
          </DealsItem>
        </AllDeals>
      </Test>
    </>
  );
};

export default HomePage;
