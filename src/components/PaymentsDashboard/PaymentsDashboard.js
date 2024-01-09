import React, { useState } from "react";
import Header from "./Header/Header";
import Form from "react-bootstrap/Form";
import "./PaymentsDashboard.css";
import InfoCard from "./InfoCard/InfoCard";
import Transactions from "./Transactions/Transactions";

const PaymentsDashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState("Last Month");
  const handleSelectChange = (e) => {
    setSelectedMonth(e.target.value);
  };
  return (
    <div className="dashboard-page">
      <Header />
      <div className="main-container">
        <div className="d-flex justify-content-between mb-4">
          <span className="title-element">Overview</span>
          <Form.Select
            className="dropdown"
            value={selectedMonth}
            onChange={handleSelectChange}
          >
            <option>Select Month</option>
            <option value="Last Month">Last Month</option>
            <option value="This Month">This Month</option>
          </Form.Select>
        </div>
        <div className="info-card-container mb-4">
          <InfoCard title="Online Orders" desc="231" className="info-card" />
          <InfoCard
            title="Amount received"
            desc="₹23,92,312.9"
            className="info-card"
          />
        </div>
        <span className="title-element">Transactions | This month</span>
        <Transactions />
      </div>
    </div>
  );
};

export default PaymentsDashboard;
