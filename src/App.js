import React from "react";
import Card from "./components/Card";
import Collapse from "./components/Collapse";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group">
          <div className="col">
            <Collapse>
              <Card
                cardTitle="Arsenal"
                cardText="English professional football club based in London"
                updatedTime="Last Updated 1 min ago"
                image="https://picsum.photos/id/18/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse>
              <Card
                cardTitle="Chelsea"
                cardText="English professional football club based in London"
                updatedTime="Last Updated 2 min ago"
                image="https://picsum.photos/id/48/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse>
              <Card
                cardTitle="Tottenham"
                cardText="English professional football club based in London"
                updatedTime="Last Updated 3 min ago"
                image="https://picsum.photos/id/38/200/300"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
