import React from "react";

const SuccessOrders = () => {
  return (
    <tbody className="text-center">
      <tr>
        <td>
          <div className="tag sell-tag"></div>
        </td>
        <td>
          <div className="stock-name">Paytm Pvt Ltd.</div>
          <div className="price-qty">145.5 x 400</div>
        </td>

        <td>
          <div className="market-tag"></div>
        </td>

        <td>
          <div className="date">14 Jan</div>
          <div className="time">3:10:45 PM</div>
        </td>
      </tr>

      <tr>
        <td>
          <div className="tag buy-tag"></div>
        </td>
        <td>
          <div className="stock-name">Paytm Pvt Ltd.</div>
          <div className="price-qty">145.5 x 400</div>
        </td>

        <td>
          <div className="limit-tag"></div>
        </td>

        <td>
          <div className="date">14 Jan</div>
          <div className="time">3:10:45 PM</div>
        </td>
      </tr>
      <tr>
        <td>
          <div className="tag buy-tag"></div>
        </td>
        <td>
          <div className="stock-name">Paytm Pvt Ltd.</div>
          <div className="price-qty">145.5 x 400</div>
        </td>

        <td>
          <div className="limit-tag"></div>
        </td>

        <td>
          <div className="date">14 Jan</div>
          <div className="time">3:10:45 PM</div>
        </td>
      </tr>
      
    </tbody>
  );
};

export default SuccessOrders;
