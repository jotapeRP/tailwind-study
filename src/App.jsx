import "./App.css";
import modelS from "./images/ModelS.jfif";
import model3 from "./images/Model3.jfif";
import modelX from "./images/ModelX.jfif";
import modelY from "./images/ModelY.jfif";

//Components
import CarSection from "./components/CarSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <CarSection
        modelImg={modelS}
        modelId={"modelS"}
        modelName={"Model S"}
        modelNext={"#model3"}
      />
      <CarSection
        modelImg={model3}
        modelId={"model3"}
        modelName={"Model 3"}
        modelNext={"#modelX"}
      />
      <CarSection
        modelImg={modelX}
        modelId={"modelX"}
        modelName={"Model X"}
        modelNext={"#modelY"}
      />
      <CarSection
        modelImg={modelY}
        modelId={"modelY"}
        modelName={"Model Y"}
        modelNext={"#modelS"}
      />
    </>
  );
}

export default App;
