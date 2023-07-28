import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  KelasPage,
  SyaratKetenPage,
  FaqPage,
  TestimonialPage,
} from "./pages";
import { FooterComponent, NavbarComponent } from "./components";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketentuan" Component={SyaratKetenPage} />
      </Routes>
      {/* <FooterComponent /> */}
    </div>
  );
}

export default App;
