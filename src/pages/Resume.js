import React from 'react'
import Navbar from "../components/Navbar";
export const Resume = () => {
    return (
        <div>
            <Navbar/>
            <div className="resume">
                <p>
                    <h1><strong><u>Skills</u></strong></h1>
                </p>
                <p>
                    <strong>Languages: </strong>
                    Java, C++, Python, JavaScript, Lua, Scala, HTML5, CSS3
                </p>
                <p>
                    <strong>Databases: </strong>
                    MongoDB, Kusto, SQL, NoSQL
                </p>
                <p>
                    <strong>Framework:  </strong>
                    React, Apache Spark, Apache Storm
                </p>
                <p>
                    <strong>Cloud:  </strong>
                    Azure IoT Hub, Azure IoT Edge, Azure VM, Azure Data Factory, AWS IoT, AWS Greengrass, AWS Lambda, AWS S3
                </p>
                <p>
                    <strong>SDLC: </strong>
                    Scrum, Kanban, Extreme Programming(XP), Waterfall, Large Scale Scrum (LeSS)
                </p>
                <p>
                    <strong>Others: </strong>
                    Scikit-learn, Github
                </p>
                <p>
                    <h1><strong><u>Professional Experience</u></strong></h1>
                </p>
                <p>
                    <strong>Tutor </strong>
                    – Quantitative Skills Center, University of Washington Bothell
                </p>
                <p>
                    Bothell, WA<em> October 2019 – Present</em>
                </p>
                <p>
                    • Tutored college students about the concepts learned in Computer Science and demonstrating study and 
                    programming techniques which help improve their software development skills.<strong><u></u></strong>
                </p>
                <p>
                    • Assisted the students in debugging their code by working with them and pointing them in the right direction, 
                    ensuring that they leave the session with a working program.<strong><u></u></strong>
                </p>
                <p>
                    <strong>Tutor </strong>
                    – Mighty Coders
                </p>
                <p>
                    Kirkland, WA<em> October 2019 – Present</em>
                </p>
                <p>
                •	Tutored children from ages 6 to 15 about Computer Science concepts and Game Development using Scratch, 
                Bitsbox, Microbit, CodeCombat, Roblox, Minecraft, Python pygame and other fun games, and continuously 
                motivating them to explore creative ideas for their games. <strong><u></u></strong>
                </p>
                <p>
                •	Assisted the children by debugging their code, explaining to them the concepts applied in each project, 
                and allowing them to demonstrate what they’ve learned in the next levels of the game.<strong><u></u></strong>
                </p>
                <p>
                •	Updated the parents about their kid’s progression in the curriculum 
                and showed them their child’s projects on a consistent basis.    <strong><u></u></strong>
                </p>
                <p>
                    <strong>Apprentice Software Developer</strong>
                    – People Tech Group, Inc.
                </p>
                <p>
                    Bellevue, WA<em> Jan. 2019 – Apr 2019</em>
                </p>
                <p>
                    • Taught Java to fellow interns during the internship period.
                </p>
                <p>
                    • Migrated a Microsoft team’s Kusto tables from one Kusto cluster to
                    another using Azure Data Factory.
                </p>
                <p>
                    • Ensured the data integrity after migration by writing Kusto query scripts
                    to evaluate new tables.
                </p>
                <p>
                    • Wrote Data Factory JSON script to reconnect the new pipeline into the new
                    tables.
                </p>
                <p>
                    • Maintained and troubleshooted Microsoft’s Incident Management System
                    (ICMs) for Azure’s Usage database.
                </p>
                <p>
                •	Fixed a three-month problem with the Azure Usage Big Data environment by investigating the root cause, 
                understanding the technologies involved, and eventually solving the problem by creating a new storage, 
                HDInsight, and Data Factory pipelines in a span of 1 month.
                </p>
                <p>
                    <strong>Junior Data Analyst</strong>
                    – Pactera Technologies Inc.
                </p>
                <p>
                    Redmond, WA<em> Apr 2018 – Jan. 2019</em>
                </p>
                <p>
                    • Evaluated Bing searches and results in the UHRS hitapp with above 80%
                    Real Time Audit and Spam scores and above average throughput.
                </p>
                <p>
                    <strong>Analytical Chemist</strong>
                    – Analytical Chemistry Inc.
                </p>
                <p>
                    Tukwila, WA <em> Apr 2017 – Feb 2018</em>
                </p>
                <p>
                    • Calibrated the instruments in the laboratory using the best-fit curve
                    statistical analysis so that the instrument can accurately output the
                    correct data.
                </p>
                <p>
                    • Analyzed real-time output to ensure that the data being run meets the
                    specified quality control ranges as stated in the EPA methodologies.
                </p>
                <p>
                    • Evaluated the data output of the instruments, making sure that the data
                    reported is accurate and defensible.
                </p>
                <p>
                    <strong>Analytical Chemist</strong>
                    <strong> – </strong>
                    Veritas Laboratories<em> </em>
                </p>
                <p>
                    Las Vegas, NV<em> Nov 2013 – Nov 2016</em>
                </p>
                <p>
                    • Served as the go-to person for the Laboratory Information Management
                    System (LIMS) database by maintaining, troubleshooting, and manipulating
                    issues ensuring the integrity of the database.
                </p>
                <p>
                    • Processed the Electronic Data Deliverables (EDD) of the LIMS database,
                    both incoming and outgoing by manipulating Excel files and Access Files to
                    ensure that the format of the data was compatible with LIMS.
                </p>
                <p>
                    • Performed instrumental maintenance by making sure that calibrations were
                    statistically accurate, and all quality controls were passed according to
                    EPA standards.
                </p>
                <p>
                    <h1><strong><u>Education</u></strong></h1>
                </p>
                <p>
                    <strong>
                        Master of Science, Major in Computer Science and Software Engineering </strong>
                    <em>Oct 2019 – Jun 2021</em>
                </p>
                <p>
                    <strong>Graduate Certificate in Software Design and Development </strong>
                    <em>Oct 2018 – Jun 2019</em>
                    <strong></strong>
                </p>
                <p>
                    University of Washington Bothell
                </p>
                <p>
                    Bothell, Washington
                </p>
                <p>
                    <strong>
                        Bachelor of Science, Major in Material Science and Engineering </strong>
                    <em>Jun 2007 - Mar 2012</em>
                </p>
                <p>
                    <strong>Bachelor of Science, Major in Chemistry </strong>
                    <em>Jun 2007 - Mar 2011</em>
                    <strong></strong>
                </p>
                <p>
                    Ateneo De Manila University
                </p>
                <p>
                    Manila, Philippines
                </p>
            </div>
        </div>
    )
}

export default Resume;