import React, { Component } from "react";
import "./Work.css";

class Work extends Component {
  render() {
    return (
      <div className="work work-mobile">
        <h1 className="work-header">Work Experience</h1>
        <p id="work-subheader">
          {" "}
          Hover to learn more about some of the things I did on the job!
        </p>
        <div className="flex-container-work">
          <div className="polar work-block">
            <h1 className="work-loc">Polar</h1>
            <h3 className="work-title">Software Developer</h3>
            <div className="work-desc">
              <ul>
                <li>
                  Design, implement, and spearhead the automation process of
                  Polar’s site preview product using <b>Python (Django)</b>,
                  reducing workflow process duration from{" "}
                  <b>2 hours to 10 minutes</b>
                </li>
                <li>
                  Build high quality, scalable, and responsive native
                  advertisments and demo sites for publisher clients using{" "}
                  <b>HTML/CSS, Javascript, JQuery, and Polar API </b>{" "}
                </li>
                <li>Other tools: MySQL, Git</li>
              </ul>
            </div>
          </div>
          <div className="bmo work-block">
            <h1 className="work-loc">BMO</h1>
            <h3 className="work-title">Reporting Data Analyst</h3>
            <div className="work-desc">
              <ul>
                <li>
                  Perform aggregation of KPIs across assigned technology
                  portfolios, and present key performance metrics, issues, and
                  risks to CIO and lead technology officers
                </li>
                <li>
                  {" "}
                  Improve reporting accuracy, efficiency, and data quality,
                  using advanced Excel features (VBA, macros, pivot tables,
                  vlookup), <b>reducing QA time by 90%</b>{" "}
                </li>
                <li>
                  {" "}
                  Other tools: VBA, Excel (Macros), SharePoint, TIBCO Spotfire
                </li>
              </ul>
            </div>
          </div>
          <div className="aviva work-block">
            <h1 className="work-loc">Aviva</h1>
            <h3 className="work-title">Business Analyst</h3>
            <div className="work-desc">
              <ul>
                <li>
                  Interview underwriters, business managers, and project
                  managers to gather, assimilate and document pertinent
                  information for the new Commercial Lines (CL) system (Real
                  Time Gateway 2){" "}
                </li>
                <li>
                  Followed agile methodology on all projects and used JIRA for
                  tracking and project managament -{" "}
                  <b>consistently met deadlines 1 week earlier </b>
                </li>
                <li>
                  Compared and integrated rating basis data from Lotus and
                  SharePoint platforms{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
