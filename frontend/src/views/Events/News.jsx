import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./upevent.css";
import "./slide.css";
import "./Button.css"; 
import Flag from "./components/flag-view";
import heroimg from "./images/herobg.png";


export const News = () => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;


  const targetRef = useRef(null);
  
  const handleClick = () => { 


    targetRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    axios
      .get("http://localhost:3001/event_api/upcommingEvent")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function convertTo12HourFormat(time24) {
    const [hours, minutes] = time24.split(":");

    let hours12 = parseInt(hours, 10) % 12;
    hours12 = hours12 === 0 ? 12 : hours12; // Convert 0 to 12

    const period = parseInt(hours, 10) >= 12 ? "PM" : "AM";

    return `${hours12}:${minutes} ${period}`;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem) || [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          padding: "40px",
          backgroundImage: `url(${heroimg})`,
          backgroundPosition: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            marginTop: "15%",
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize:"50px",
          }}
        >
          <p style={{color:"white",fontSize:"80px"}}>Our Events</p>
        </div>
        <div
          style={{
            flex: 2.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="scrollButton" onClick={handleClick} >
           EXPLORE
          </button>
        </div>
      </div>

      <div ref={targetRef}></div>
      {data != null ? (
        <>
          <section className="slide-section">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center", // Center the cards horizontally
                gap: "35px",
              }}
            >
              {currentItems.map((item, index) => (
                <div key={index} className="card_event">
                  <Slideshow images={item.images} />
                  <div
                    style={{
                      paddingTop: "25px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      textAlign: "left",
                      display: "flex",
                      gap: "10px",
                      flexDirection: "column",
                    }}
                  >
                    <h1>{item.eventName}</h1>
                    <div
                      style={{
                        height: "70px",
                        width: "100%",
                        overflow: "auto",
                        wordWrap: "break-word",
                      }}
                    >
                      {item.description}
                    </div>

                    <p>
                      {item.eventDate.split("T")[0]} @
                      {convertTo12HourFormat(item.startTime)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                currentPage={currentPage}
                paginate={paginate}
              />
            </div>
          </section>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

const Slideshow = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "60%",
        overflow: "hidden",
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={`data:${image.contentType};base64,${image.data}`}
          alt="img"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: slideIndex === index ? 0 : "-100%",
            transition: "left 0.5s ease-in-out",
          }}
        />
      ))}
    </div>
  );
};

const Pagination = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Adds smooth scrolling behavior
    });
  };
  return (
    <ul className="pagination">
      <li className="page-item">
        <button
          onClick={() => {
            paginate(currentPage - 1);
            scrollToTop();
          }}
          className="page-link"
          disabled={currentPage === 1}
        >
          Previous
        </button>
      </li>
      {pageNumbers.map((number) => (
        <li key={number} className="page-item">
          <button
            onClick={() => paginate(number)}
            className="page-link"
            disabled={number === currentPage}
          >
            {number}
          </button>
        </li>
      ))}
      <li className="page-item">
        <button
          onClick={() => {
            paginate(currentPage + 1);
            scrollToTop();
          }}
          className="page-link"
          disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
        >
          Next
        </button>
      </li>
    </ul>
  );
};
