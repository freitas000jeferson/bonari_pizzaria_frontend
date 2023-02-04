import Alerts from '@/components/Alerts';
import Buttons from '@/components/Buttons';
import Carousel from '@/components/Carousel';
import CustomControls from '@/components/CustomControls';
import Datepicker from '@/components/Datepicker';
import Download from '@/components/Download';
import CardsFooter from '@/components/Footers/CardsFooter';
import Hero from '@/components/Hero';
import Icons from '@/components/Icons';
import Inputs from '@/components/Inputs';
import Labels from '@/components/Labels';
import Login from '@/components/Login';
import Menus from '@/components/Menus';
import Modals from '@/components/Modals';
import Navbars from '@/components/Navbars';
import DemoNavbar from '@/components/Navbars/DemoNavbar';
import PaginationSection from '@/components/Pagination';
import Pills from '@/components/Pills';
import ProgressSection from '@/components/Progress';
import TabsSection from '@/components/Tabs';
import TooltipPopover from '@/components/TooltipPopover';
import Typography from '@/components/Typography';
import Head from 'next/head';
import { Container, Row } from 'reactstrap';
const Teste = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <DemoNavbar />

      <main className={''}>
        <Hero />
        <Buttons />
        <Inputs />
        <section className="section">
          <Container>
            <CustomControls />
            <Menus />
          </Container>
        </section>
        <Navbars />
        <section className="section section-components">
          <Container>
            <TabsSection />
            <Row className="row-grid justify-content-between align-items-center mt-lg">
              <ProgressSection />
              <PaginationSection />
            </Row>
            <Row className="row-grid justify-content-between">
              <Pills />
              <Labels />
            </Row>
            <Alerts />
            <Typography />
            <Modals />
            <Datepicker />
            <TooltipPopover />
          </Container>
        </section>
        <Carousel />
        <Icons />
        <Login />
        <Download />
      </main>
      <CardsFooter />
    </>
  );
};

export default Teste;
