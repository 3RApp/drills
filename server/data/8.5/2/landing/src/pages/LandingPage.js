import {AboutCompany, BusinessEvent, CallToAction, Confirmation, Feedback, Registration, Service} from "../business";

export const LandingPage = () => (
  <main>
    <CallToAction />
    <BusinessEvent />
    <Service />
    <Confirmation />
    <Feedback />
    <Registration />
    <AboutCompany />
  </main>
);