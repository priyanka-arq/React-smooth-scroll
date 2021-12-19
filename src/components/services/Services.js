import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./servicesStyle";
import Icon1 from "../../images/svg1.svg";
import Icon2 from "../../images/svg2.svg";
import Icon3 from "../../images/svg3.svg";

export default function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Early Learning</ServicesH2>
          <ServicesP>
            We take the time to find out what's important to you.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />

          <ServicesH2>Kindergarten & Preschool</ServicesH2>
          <ServicesP>
            Deliverd by qualified teachers, this is a time of transition,
            learning and fun.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Vacartion Care</ServicesH2>
          <ServicesP>
            KidsWorld offers vacation care for aged 5-12 years
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}
