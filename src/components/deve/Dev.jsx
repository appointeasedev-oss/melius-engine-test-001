```javascript
import React, { useState } from "react";
import DevItems from "./DevItems";
// Mobile icons
import mob1 from "../../assets/mob1.png";
import mob2 from "../../assets/mob2.png";
import mob3 from "../../assets/mob3.png";
import mob4 from "../../assets/mob4.png";
import mob5 from "../../assets/mob5.png";
import mob6 from "../../assets/mob6.png";
import mob7 from "../../assets/mob7.png";
import mob8 from "../../assets/mob8.png";
import mob9 from "../../assets/mob9.png";
import mob10 from "../../assets/mob10.png";
import mob11 from "../../assets/mob11.png";
// front end icons
import front1 from "../../assets/front1.png";
import front2 from "../../assets/front2.png";
import front3 from "../../assets/front3.png";
import front4 from "../../assets/front4.png";
import front5 from "../../assets/front5.png";
import front6 from "../../assets/front6.png";
// Database icons
import data1 from "../../assets/data1.png";
import data2 from "../../assets/data2.png";
import data3 from "../../assets/data3.png";
import data4 from "../../assets/data4.png";
import data5 from "../../assets/data5.png";
import data6 from "../../assets/data6.png";
import data7 from "../../assets/data7.png";
import data8 from "../../assets/data8.png";
import data9 from "../../assets/data9.png";
import data10 from "../../assets/data10.png";
// Backend Icons
import back from "../../assets/back.png";
import back1 from "../../assets/back1.png";
import back2 from "../../assets/back2.png";
import back4 from "../../assets/back4.png";
import back5 from "../../assets/back5.png";
import back6 from "../../assets/back6.png";
// CMS icons
import cms1 from "../../assets/cms1.png";
import cms2 from "../../assets/cms2.png";
import cms3 from "../../assets/cms3.png";
import cms4 from "../../assets/cms4.png";
import cms5 from "../../assets/cms5.png";
// DevOps Icons
import ops1 from "../../assets/ops1.png";
import ops2 from "../../assets/ops2.png";
import ops3 from "../../assets/ops3.png";
import ops4 from "../../assets/ops4.png";
import ops5 from "../../assets/ops5.png";

const tabs = [
  { id: "Mobile", label: "Mobile", icons: [mob1, mob2, mob3, mob4, mob5, mob6, mob7, mob8, mob9, mob10, mob11], names: ["android", "iOS", "react native", "flutter", "ionic", "kotlin", "swift", "objectiveC", "titanium", "phone gap", "xamarin"] },
  { id: "Front End", label: "Front End", icons: [front1, front2, front3, front4, front5, front6], names: ["angular js", "react.js", "typescript", "vue", "WPF", "HTML5"] },
  { id: "Database", label: "Database", icons: [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10], names: ["Mongo DB", "mySQL", "MsSQL", "Firebase", "Realm", "DynamoDB", "Oracle", "PostgreSQL", "Redis"] },
  { id: "BackEnd", label: "Backend", icons: [back, back1, back2, back4, back5, back6], names: ["PHP", "Java", ".NET", "Node.js", "Rails", "Python"] },
  { id: "CMS", label: "CMS", icons: [cms1, cms2, cms3, cms4, cms5], names: ["Drupal", "Joomla", "Wordpress", "Magento", "Shopify"] },
  { id: "ops", label: "Infra and DevOps", icons: [ops1, ops2, ops3, ops4, ops5], names: ["AWS", "Google Cloud", "Gradle", "Jenkins", "Appium"] }
];

const Dev = () => {
  const [activeTab, setActiveTab] = useState("Mobile");

  const currentTab = tabs.find(tab => tab.id === activeTab);

  return (
    <div className="mt-25 items-center flex flex-col ">
      <h5 className="uppercase text-md md:text-3xl">build your apps for any platform</h5>
      <div className="mt-6 w-full items-center ">
        <ul className="border-b border-zinc-700 px-4 sm:px-10 py-8 flex flex-wrap gap-4 md:gap-2 md:px-2 lg:gap-10 justify-center">
          {tabs.map(tab => (
            <li key={tab.id} className="relative" onClick={() => setActiveTab(tab.id)}>
              <div
                className={`-skew-x-12 px-6 py-[0.6rem] cursor-pointer transition-all duration-300 group
        ${activeTab === tab.id ? "bg-[#01345B]" : ""}`}
              >
                <span
                  className={`skew-x-12 block text-md uppercase transition-all duration-300
          ${activeTab === tab.id ? "text-white" : "text-black"}`}
                >
                  {tab.label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {currentTab && (
        <div className="mt-13 flex flex-wrap gap-13 sm:gap-15 lg:w-[75rem] sm:px-10 justify-center">
          {currentTab.icons.map((icon, index) => (
            <DevItems key={icon} icons={icon} name={currentTab.names[index]} />
          ))}
        </div>
      )}
      <div className="mt-18 flex flex-col lg:w-full lg:justify-center gap-10 md:flex-row md:gap-30 lg:gap-20 ">
        <div className="flex flex-col gap-15 md:justify-between lg:flex-row lg:gap-20">
          <div className="flex flex-col items-center ">
            <h1 className="text-[3.2em] lg:text-[3.5rem] font-semibold">50 +</h1>
            <h6 className="text-lg lg:text-xl">Engineers</h6>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[3.2rem] lg:text-[3.5rem] font-semibold">309+</h1>
            <h6 className="text-lg lg:text-xl">Project Delivered to Clients</h6>
          </div>
        </div>
        <div className="flex flex-col gap-15 md:justify-between lg:flex-row lg:gap-20">
          <div className="flex flex-col items-center">
            <h1 className="text-[3.2rem] lg:text-[3.5rem] font-semibold">655 +</h1>
            <h6 className="text-lg lg:text-xl">Customers worldwide</h6>
          </div>
          <div className="bg-black px-6 py-7 -skew-x-12 hover:skew-x-22 hover:bg-[#01345B] transition-all duration-300 group lg:items-center lg:flex">
            <h2 className="text-white text-2xl skew-x-12 will-change-transform leading-none group-hover:-skew-x-22 transition-all duration-300">Inspired By Our Vision</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dev;
```
# Auto improvement by Melius