import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";
import DocxToPdf from "./screens/DocxToPdf";
import MainScreen from "./screens/MainScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={MainScreen} exact />
          <Route path="/convert/docx-pdf" component={DocxToPdf} exact />
          {/* <Route path="/faq" component={FaqScreen} />
          <Route path="/about" component={AboutUsScreen} /> */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
