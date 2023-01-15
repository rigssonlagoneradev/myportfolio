import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#ffffff">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2011 - 2012"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Rugsuanan Alternative Learning Center<br/>
            Philippines.
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2017"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Northern Philippines, Philippines
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Arts in Communication</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2020"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Video Editor - ECOMVIDS
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Philippines
          </h4>
          <p>Edit videos for advertisements.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2021"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Production Worker - Ice River Springs Water Co.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Calgary, AB Canada
          </h4>
          <p>
            Manages machines for production.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021-2022"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Delivery Associate - Amazon
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Calgary, AB Canada
          </h4>
          <p>
            Delivery Service.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2023"
          iconStyle={{ background: "#000000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Robertson College
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Diploma Graduate
          </h4>

          <p> Full Stack Web Developer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
    </div>
  );
}

export default Experience;