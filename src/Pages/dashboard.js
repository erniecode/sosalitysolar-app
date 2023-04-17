import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

function dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="bg-Light text-white py-5 rounded shadow">
      <Container>
        <Row>
          <Col>
            <Line data={data} />
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default dashboard
