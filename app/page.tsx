import DataTable from "@/components/DataTable";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="main-container">
      {/* Hero section with market overview and trending coins */}
      <section className="home-grid">
        <div id="coin-overview">
          <div className="header">
            <Image
              src="/assets/bitcoin-icon.svg"
              alt="bitcoin-icon"
              width={56}
              height={56}
            />
            <div className="info">
              <p>BitCoin / BTC</p>
              <h1>$90,111.01</h1>
            </div>
          </div>
        </div>
        <p>Trending Coins</p>
        <DataTable columns={[]} />
      </section>
      {/*   */}
      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>
    </main>
  );
};

export default page;
