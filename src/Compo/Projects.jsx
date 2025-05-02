import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";


function Projects() {

  const divRefs = useRef([]);

  // useEffect(() => {
  //   gsap.fromTo(
  //     divRefs.current,
  //     { opacity: 0, y: 20 },
  //     { opacity: 1, y: 0, duration: 0.7, stagger: 1, ease: "power2.out",  }
  //   );
  // }, []);

  return (
    <>
      {/* div Full Height width */}
      <div className="w-screen pt-4 h-auto min-h-screen relative pb-20 bg-zinc-300 dark:bg-zinc-500 dark:text-white">
        {/* 80%div */}
        <div ref={(element) => (divRefs.current[0] = element)} className="w-10/12 mx-auto rounded-2xl  py-4 pb-16 bg-[#bca9b9] dark:bg-[#314565] flex flex-col gap-2 items-center justify-center">
          {/* heading and green light div */}
          <div ref={(element) => (divRefs.current[1] = element)} className="group flex flex-col items-center gap-4">
            <h2 className="mobile:text-4xl text-center font-extrabold text-2xl select-none group-hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out group-hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">
              Skills
            </h2>
            <div className="bg-green-500 w-12 h-1 group-hover:bg-orange-500 active:bg-orange-500"></div>
          </div>
          {/* Contents */}
          <div className="flex flex-col w-[100%]">
            {/* Skills */}
            <div className="grid  lg:grid-cols-2 gap-4 mx-auto">
              {/* Data Base */}
              <div className="flex items-center justify-center gap-2">
                <h4 className="font-bold   mobile:text-2xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB] ">Database :-</h4>
                <p className="mobile:text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB] ">Postgre SQL</p>
              </div>
              {/* Lang */}
              <div className="flex items-center xsmobile:flex-row flex-col justify-center gap-2 ">
                <h4 className="font-bold  mobile:text-2xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB] " >Language :-</h4>
                <p className="mobile:text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]" >Python,Java & JavaScript</p>
              </div>
              {/* Libariries */}
              <div className="flex items-center justify-center gap-2 ">
                <h4 className="font-bold  hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]   mobile:text-2xl" >Libraries :-</h4>
                <p className="mobile:text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB] " >Pandas & Numpy</p>
              </div>
              {/* other Skills */}
              <div className="flex items-center justify-center gap-2 ">
                <h4 className="font-bold  hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]  mobile:text-2xl" >Other Skills :-</h4>
                <p className="mobile:text-xl hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB] " >Microsoft Excel  </p>
              </div>
            </div>
            {/* Project */}
            <div ref={(element) => (divRefs.current[1] = element)} className="group flex flex-col my-4 items-center gap-4">
              <h2 className="mobile:text-4xl text-center font-extrabold text-2xl select-none group-hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out group-hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">
                Project
              </h2>
              <div className="bg-green-500 w-12 h-1 group-hover:bg-orange-500 active:bg-orange-500"></div>
            </div>
            <div className="grid xl:grid-cols-3 mx-auto">
              {/* mahadev */}
              <div className="flex items-center justify-center">
                <div className="my-4 px-4 flex flex-col gap-2 justify-center items-center">
                  <h4 className="font-bold text-center text-[18px] hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">Mahadev Ecommerce Sales Dashboard</h4>
                  <img src="Mahadev.png" alt="Mahadev Ecommerce Dashboard" className="rounded-lg shadow-lg w-full max-w-4xl" />
                  <a
                    href="https://github.com/Adi-2006/MahdevDashboard"
                    target="_blank"
                    className="dark:text-teal-400 text-blue-600 hover:text-teal-300  text-lg font-bold underline dark:hover:text-blue-400 "
                  >
                    Github Link
                  </a>
                  <ul className="flex flex-col gap-3 list-disc  pl-5">
                    <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">
                      Built an <strong>interactive Power BI dashboard</strong> to analyze e-commerce performance across metrics like
                      <strong> sales amount, profit, quantity sold, and AOV (Average Order Value)</strong>.
                    </li>
                    <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]" >
                      Used <strong>bar, pie, and donut charts</strong> to visually represent data by
                      <strong> state, category, sub-category, payment mode, and customer name</strong>, enabling clear and quick insights.
                    </li>
                    <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]" >
                      Implemented <strong>monthly and quarterly filters</strong>, allowing stakeholders to drill down and track
                      <strong> performance trends over time</strong>.
                    </li>
                    <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]" >
                      Identified <strong>top-performing states and products</strong> using dynamic visuals, and highlighted
                      <strong> low-profit months</strong> (e.g., <strong>July, August</strong>) to support strategic planning.
                    </li>
                    <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]" >
                      Enhanced decision-making by showing <strong>customer behavior by payment mode</strong> (e.g.,
                      <strong> COD, UPI</strong>) and visualizing <strong>profitability by product sub-category</strong>.
                    </li>
                  </ul>
                </div>

              </div>
              {/* Vrinda */}
              <div className="flex items-center justify-center">
                <div className="my-4 px-4 flex flex-col gap-2 justify-center items-center">
                  <h4 className="font-bold text-center text-[18px] hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">Vrinda Sales Dashboard</h4>
                  <img src="Vrinda.PNG" alt="Mahadev Ecommerce Dashboard" className="rounded-lg shadow-lg w-full max-w-4xl" />
                  <a
                    href="https://github.com/Adi-2006/VirindaSales"
                    target="_blank"
                    className="dark:text-teal-400 text-blue-600 hover:text-teal-300  text-lg font-bold underline dark:hover:text-blue-400 "
                  >
                    Github Link
                  </a>
                  <ul className="flex flex-col gap-3 list-disc  pl-5">
                    <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">
                      Designed an <strong>interactive Excel dashboard</strong> to visualize sales and order trends across months, states, channels, and customer demographics.
                    </li>
                    <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">
                      Created <strong>dynamic slicers</strong> for <strong>Month, Channel, and Category</strong> to enable quick filtering and drill-down analysis.
                    </li>
                    <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">
                      Analyzed <strong>Orders vs Sales</strong> patterns monthly, revealing peak performance in <strong>March</strong> and a decline in the last quarter.
                    </li>
                    <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">
                      Highlighted <strong>top 5 performing states</strong> with Maharashtra leading at <strong>2.99M</strong> in sales.
                    </li>
                    <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">
                      Visualized customer behavior through <strong>Orders by Age & Gender</strong> and <strong>Sales: Men vs Women</strong> pie charts, noting that <strong>Women account for 64% of sales</strong>.
                    </li>
                    <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">
                      Showcased <strong>Order Status</strong> insights, where <strong>92% of orders were delivered</strong>, aiding operational evaluation.
                    </li>
                  </ul>
                </div>

              </div>

              {/* Coffee */}
              <div className="flex items-center justify-center">
                <div className="my-4 px-4 flex flex-col gap-2 justify-center items-center">
                  <h4 className="font-bold text-[18px] hover:dark:[text-shadow:0_0_15px_#87CEEB] text-center transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">Coffee Sales Dashboard</h4>
                  <img src="Coffee.PNG" alt="Mahadev Ecommerce Dashboard" className="rounded-lg shadow-lg w-full max-w-4xl" />
                  <a
                    href="https://github.com/Adi-2006/CoffeeSales"
                    target="_blank"
                    className="dark:text-teal-400 text-blue-600 hover:text-teal-300  text-lg font-bold underline dark:hover:text-blue-400 "
                  >
                    Github Link
                  </a>
                  <ul className="flex flex-col gap-3 list-disc  pl-5">
                    <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">
                      Built an <strong>interactive Excel dashboard</strong> to visualize and track global coffee sales data across multiple years (2019–2022).
                    </li>
                    <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">
                      Included <strong>line and bar charts</strong> to represent <strong>sales over time, top countries, and top customers</strong>, providing deep insights at a glance.
                    </li>
                    <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">
                      Integrated <strong>dynamic slicers</strong> for filtering data by <strong>roast type, size, loyalty card status, and date</strong> to allow for flexible data exploration.
                    </li>
                    <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">
                      Showcased <strong>top-performing coffee types</strong> (Arabica, Robusta, etc.) and <strong>customer behavior</strong> patterns across seasons and geographies.
                    </li>
                    <li className="hover:dark:[text-shadow:0_0_15px_#87CEEB] transition  duration-900 ease-in-out hover:[text-shadow:0_0_15px_#374151] active:[text-shadow:0_0_15px_#87CEEB]">
                      Identified high-value customers and high-demand regions such as the <strong>United States, Ireland, and the United Kingdom</strong> using performance visuals.
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
