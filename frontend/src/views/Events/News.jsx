import React, { useEffect, useState } from "react";
import axios from "axios";
import "./upevent.css";

export const News =() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/event_api/upcommingEvent')
    .then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <div className="Eh-video-container-news">
        {/* <video autoPlay loop muted className="Eh-video-news">
          <source src={video} type="video/mp4" />
          Sorry, your browser does not support the video tag.
        </video> */}

        <div className="overlaybk-news"></div>
        <div className="Eh-content-news">
          <h1 className="Eh-topic-news">Upcoming Events</h1>
        </div>
      </div>
      <section className="body-box-news">
        <div className="boxs-container-news">
          {/*News Box Start */}

          {data &&
            data.map((item, index) => (
              <div className="box1nw-news">
                <div className="bxcolumnful-news">
                  <div class="containerslide2-news">
                    <div key={index} class="wrapperslide2-news">
                      {item.images &&
                        item.images.map((image, index) => (
                          <img
                            key={index}
                            src={`data:${image.contentType};base64,${image.data}`}
                            alt="img"
                            className="imgslider2-news"
                          />
                        ))}
                    </div>
                  </div>
                 
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      padding: "10px",
                      border: "1px solid #ccc",
                    }}
                  >
                    <h1 className="clmtopic-news" style={{ textAlign: "left" }}>
                      {item.eventName}
                    </h1>
                    <div className="clmpara-descp">
                      <p className="clmpara-news" style={{ textAlign: "left" }}>
                        {item.description}
                      </p>
                    </div>
                    <p className="clmtopic-date" style={{ textAlign: "left" }}>
                      {item.eventDate.split("T")[0]}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          {/*News Box END */}
        </div>
      </section>
      {/* // <!-- Footer --> */}
    </div>
  );
}