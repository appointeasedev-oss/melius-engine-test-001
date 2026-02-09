```javascript
import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import logo from "./assets/logo.png";
import ServiceHead from "./components/service/ServiceHead";
import ServiceItem from "./components/service/ServiceItem";
import menu from "./assets/menu.png";
import { NavLink } from "react-router-dom";
import { useBlogData } from './context/Context';

const Header = () => {
  // Service categories data
  const serviceCategories = [
    {
      title: "Mobile Development",
      icon: "ri-smartphone-fill",
      items: [
        { name: "iOS", icon: "ri-apple-fill" },
        { name: "Android", icon: "ri-android-fill" },
        { name: "Cross-Platform", icon: "ri-device-line" }
      ]
    },
    {
      title: "Web Development",
      icon: "ri-computer-line",
      items: [
        { name: "Fullstack JS", icon: "ri-javascript-fill" },
        { name: "Ecommerce&CMS", icon: "ri-shopping-cart-2-line" },
        { name: "Magneto", icon: "ri-magnet-line" },
        { name: "Wordpress", icon: "ri-wordpress-fill" },
        { name: "Progressive Web App", icon: "ri-global-line" }
      ]
    },
    {
      title: "Animation Services",
      icon: "ri-movie-2-line",
      items: [
        { name: "Animation Services", icon: "ri-film-line" },
        { name: "Explainer Video", icon: "ri-video-line" }
      ]
    },
    {
      title: "BlockChain",
      icon: "ri-links-line",
      items: [
        { name: "Smart Contract", icon: "ri-file-list-3-line" },
        { name: "dApps", icon: "ri-apps-2-line" },
        { name: "Crypto Currency", icon: "ri-coin-line" }
      ]
    },
    {
      title: "Digital Marketing",
      icon: "ri-megaphone-line",
      items: [
        { name: "App Store Optimization", icon: "ri-store-2-line" },
        { name: "Social Media Optimization", icon: "ri-share-line" },
        { name: "Search Engine Optimization", icon: "ri-search-2-line" }
      ]
    }
  ];

  // Process items data
  const processItems = [
    { name: "Fixed Cost Project", icon: "ri-price-tag-3-line" },
    { name: "Talent On Demand", icon: "ri-team-line" },
    { name: "Product Engineering", icon: "ri-tools-line" }
  ];

  let service = useRef();
  let items = useRef();
  let outerDiv = useRef();
  let [toggle, setToggle] = useState(false);

  let serviceClick = () => {
    let dupToggle = !toggle;
    setToggle(dupToggle);

    // Close process menu when service opens
    if (dupToggle && toggle2) {
      setToggle2(false);
      process.current.style.borderBottom = "2px solid transparent";
      proItems.current.style.height = "0px";
      proItems.current.style.paddingBottom = "0px";
    }

    if (dupToggle) {
      service.current.style.borderBottom = "2px solid #FFB600";
      items.current.style.height = "fit-content";
      outerDiv.current.style.height = "70vh";
    } else {
      service.current.style.borderBottom = "2px solid transparent";
      items.current.style.height = "0px";
      outerDiv.current.style.height = "0px";
    }
  };

  let [toggle2, setToggle2] = useState(false);
  let process = useRef();
  let proItems = useRef();

  let processClick = () => {
    let dupli2Toggle = !toggle2;
    setToggle2(dupli2Toggle);

    // Close service menu when process opens
    if (dupli2Toggle && toggle) {
      setToggle(false);
      service.current.style.borderBottom = "2px solid transparent";
      items.current.style.height = "0px";
      outerDiv.current.style.height = "0px";
    }

    if (dupli2Toggle) {
      process.current.style.borderBottom = "2px solid #FFB600";
      proItems.current.style.height = "fit-content";
      proItems.current.style.paddingBottom = "5px";
    } else {
      process.current.style.borderBottom = "2px solid transparent";
      proItems.current.style.height = "0px";
      proItems.current.style.paddingBottom = "0px";
    }
  };

  let slideMenu = useRef();
  let [menuToggle, setMenuToggle] = useState(false);

  let menuClick = () => {
    let dupli3Toggle = !menuToggle;
    setMenuToggle(dupli3Toggle);
    if (dupli3Toggle) {
      slideMenu.current.style.height = "fit-content";
    } else {
      slideMenu.current.style.height = "0px";
    }
  };

  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);

  // Close process when service opens and vice versa
  const handleServiceToggle = () => {
    setIsServiceOpen(prev => !prev);
    if (!isServiceOpen) {
      setIsProcessOpen(false);
    }
  };

  const handleProcessToggle = () => {
    setIsProcessOpen(prev => !prev);
    if (!isProcessOpen) {
      setIsServiceOpen(false);
    }
  };

  const blogList = useRef();
  const [blogToggle, setblogToggle] = useState(false);

  let blogClick = ()=>{
    let blog = !blogToggle;
    setblogToggle(blog)
    if (blog) {
      blogList.current.style.height = "fit-content";
    } else {
      blogList.current.style.height = "0px";
    }
  }

  let deskBlog = useRef();
  let [DeskBlogToggle, setDeskBlogToggle] = useState(false);

  let deskBlogHandler = ()=>{
    let deskToggle = !DeskBlogToggle;
    setDeskBlogToggle(deskToggle);
    if(deskToggle){
      deskBlog.current.style.display = "inline";
      deskBlog.current.style.height = "fit-content";
      deskBlog.current.style.border = '1px solid #a1a1aa';
    }
    else{
      deskBlog.current.style.display = "none";
      deskBlog.current.style.height = "0px";
      deskBlog.current.style.border = 'transparent';
    }
  }

  let mobBlogList = useRef();
  let [MobBlogToggle, setMobkBlogToggle] = useState(false);

  let mobBlogHandler = ()=>{
    let switchToggle = !MobBlogToggle;
    setMobkBlogToggle(switchToggle);
    if(switchToggle){
      mobBlogList.current.style.height = "fit-content";
    }
    else{
      mobBlogList.current.style.height = "0px";
    }
  }

  const blogs = useBlogData();

  return (
    <div className="sticky z-[999] top-0 bg-white w-[100vw] px-4 max-w-[1700px] mx-auto">
      <div className="sticky z-[999] top-0 bg-white">
        <div className="flex w-full px-4 items-center justify-between bg-white">
          <NavLink to='/'>
            <img
            className="logo w-[40vw] sm:w-[16rem] md:w-[12rem]"
            src={logo}
            alt="Logo Image"
          />
          </NavLink>
          <i
            className={`menu text-[4.5vw] cursor-pointer sm:text-[1.8rem] lg:hidden transition-all duration-300 ${
              menuToggle ? 'ri-close-line' : 'ri-menu-line'
            }`}
            onClick={menuClick}
          ></i>

          <div className="hidden md:hidden lg:flex w-[70%] md:justify-between">
            <ul className="flex items-center gap-6 lg:gap-8">
              <li
                onClick={handleServiceToggle}
                className="cursor-pointer text-[1.1rem] p-2 border-b-2 border-transparent hover:border-[#FFB600] hover:bg-[#FFF9E6] rounded-t-md transition-all duration-300"
              >
                <i className="ri-tools-fill mr-2"></i>Services
                <i className={`ri-arrow-down-s-fill ml-1 transition-transform duration-300 ${isServiceOpen ? 'rotate-180' : ''}`}></i>
                {isServiceOpen && (
                  <div className="bg-white border border-zinc-200 shadow-lg absolute top-[100%] left-[20%] grid grid-cols-3 px-4 py-4 gap-5 lg:gap-10 rounded-md">
                    {serviceCategories.map((category, index) => (
                      <ul key={index}>
                        <h3 className="text-[1rem] mb-2 font-semibold text-gray-800">
                          <i className={`${category.icon} mr-2 text-[#FFB600]`}></i>{category.title}
                        </h3>
                        {category.items.map((item, idx) => (
                          <li key={idx} className="text-[0.9rem] ml-3 mb-1 hover:text-[#FFB600] cursor-pointer transition-colors">
                            <i className={`${item.icon} mr-2`}></i>{item.name}
                          </li>
                        ))}
                      </ul>
                    ))}
                    <div className="flex justify-center mt-[-2rem] items-center">
                      <img className="h-[10rem]" src={menu} alt="Menu Image" />
                    </div>
                  </div>
                )}
              </li>

              <li
                onClick={handleProcessToggle}
                className="relative cursor-pointer text-[1.1rem] p-2 border-b-2 border-transparent hover:border-[#FFB600] hover:bg-[#FFF9E6] rounded-t-md transition-all duration-300"
              >
                <i className="ri-settings-3-line mr-2"></i>Process
                <i className={`ri-arrow-down-s-fill ml-1 transition-transform duration-300 ${isProcessOpen ? 'rotate-180' : ''}`}></i>
                {isProcessOpen && (
                  <div className="absolute top-[180%] bg-white border border-zinc-200 shadow-lg z-50 rounded-md min-w-[250px]">
                    <ul className="flex flex-col">
                      {processItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 px-4 py-3 hover:bg-[#FFF9E6] cursor-pointer transition-colors">
                          <i className={`${item.icon} text-[#FFB600]`}></i>{item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>

              <li className="cursor-pointer text-[1.1rem] p-2 border-b-2 border-transparent hover:border-[#FFB600] hover:bg-[#FFF9E6] rounded-t-md transition-all duration-300">
                <i className="ri-information-line mr-2"></i>
                <NavLink to="/about">About Us</NavLink>
              </li>

              <li className="cursor-pointer text-[1.1rem] p-2 border-b-2 border-transparent hover:border-[#FFB600] hover:bg-[#FFF9E6] rounded-t-md transition-all duration-300">
                <i className="ri-question-line mr-2"></i>Enquire Now
              </li>

              <li
                onClick={deskBlogHandler}
                className="cursor-pointer text-[1.1rem] p-2 border-b-2 border-transparent hover:border-[#FFB600] hover:bg-[#FFF9E6] rounded-t-md transition-all duration-300 relative"
              >
                <i className="ri-article-line mr-2"></i>Blogs
                <i className={`ri-arrow-down-s-fill ml-1 transition-transform duration-300 ${DeskBlogToggle ? 'rotate-180' : ''}`}></i>
                <div ref={deskBlog} className="overflow-hidden h-[0px]
# Auto improvement by Melius