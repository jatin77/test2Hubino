import React from "react";
import "./App.css";
import Container from "./components/common/DashboardLayout/dashboardLayout";
import ProductList from "./components/ProductList/productList";
import Bars from "./components/charts/bar";
import Lines from "./components/charts/line";
import Graphs from "./components/graphs/Graphs";

function App() {
  return (
    <Container>
      <br />
      <ProductList />
      <br />
      <br />
      <br />
      <Graphs />
    </Container>
  );
}

export default App;
