import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ChartBox from '../../components/chartBox/ChartBox';
import TicketListCard from '../../components/ticketListCard/TicketListCard';
import BalanceCard from '../../components/balanceCard/BalanceCard';
import ActionCard from '../../components/actionCard/ActionCard';
import ElectricCard from '../../components/electricCard/ElectricCard';
import ProductCard from '../../components/productCard/ProductCard';
import OrderCard from '../../components/orderCard/OrderCard';
import TicketCard from '../../components/ticketCard/TicketCard';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <hr className="my-0 text-gray-200" />
      <div className="page-background">
        <div className="container">
          <div className="row">
            <div className="col-12 p-0">
              <div className="row">
                <div className="col-xs-12 col-lg-8">
                  <div className="col-12 d-flex gap-4">
                    <ProductCard />
                    <OrderCard />
                    <TicketCard />
                  </div>
                  <ChartBox />
                  <TicketListCard />
                </div>
                <div className="col-xs-12 col-lg-4">
                  <BalanceCard />
                  <ActionCard />
                  <ElectricCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
