import React from "react";
import Carousel from "../../pages/Carousel";
import Dragan from "../../assets/images/marke.jpg";
import Vera from "../../assets/images/vera.jpg";
import Danijela from "../../assets/images/danijela.jpg";
import Zeljko from "../../assets/images/zeljko.jpg";
import Katarina from "../../assets/images/katarina.jpg";
import Nemanja from "../../assets/images/nemanjaS.jpg";
import Nebojsa from "../../assets/images/nebojsast1.jpg";
import Dusan from "../../assets/images/dule.jpg";

const Management = () => {
  return (
    <div>
      <Carousel />
      <div className="container profiles managers ng-scope">
        <h1 className="title">Management</h1>

        <div id="marke" className="row manager ng-scope" nice-scroll="true">
          <div className="col-md-3 col-sm-3 col-xs-4">
            <img className="img-responsive" src={Dragan} alt="" />
          </div>
          <div className="col-md-9 col-sm-9 col-xs-8">
            <h2 className="ng-binding">Dragan Marković</h2>
            <h3 className="ng-binding">CTO</h3>
            <h4 className="intro ng-binding">
              Dragan Markovic is CTO at Finbet, where he provides advanced
              technical expertise, leads the technology department and plays a
              vital role in the company`s strategic planning and growth.
            </h4>
            <p className="ng-binding">
              Prior to this role, Dragan worked at the Belgrade-based Finsoft
              (subsequently GTECH Belgrade), where his primary area of interest
              was software development for the betting industry. As a DB Team
              Lead and architect advisor on Margin Maker1, he made significant
              contribution to creating a first className trading and risk
              management platform, which soon became industry standard for fixed
              odds betting. Apart from his work in development, Dragan
              successfully managed a team of more than 50 technical staff,
              facilitated organizational development and growth by establishing
              a set of rules and practices that covered the entire systems
              development life-cycle, from requirements analysis and design to
              implementation and support. Before Finsoft, Dragan had acquired
              strong leadership and project management capabilities as Lead
              Developer, working on IT projects of varying scale in both private
              and public sectors. Dragan holds a B.Sc. in Mathematics, from
              Belgrade University.
            </p>
          </div>
        </div>
        <div id="vera" className="row manager ng-scope" nice-scroll="true">
          <div className="col-md-3 col-sm-3 col-xs-4">
            <img className="img-responsive" src={Vera}  alt=""/>
          </div>
          <div className="col-md-9 col-sm-9 col-xs-8">
            <h2 className="ng-binding">Vera Žanetić</h2>
            <h3 className="ng-binding">Development Lead</h3>
            <h4 className="intro ng-binding">
              Vera Zanetic is a Development Lead at Finbet, where she heads up
              the development of Margin Maker 1 software and provides advanced
              technical expertise in developing software for the betting
              industry.
            </h4>
            <p className="ng-binding">
              Vera holds B.Sc. degree in Electronics from Electrical Engineering
              Faculty of Belgrade University. Prior to joining Finbet, Vera had
              been working for the Belgrade-based Finsoft (later GTECH
              Belgrade), where she held a variety of roles, starting as a Visual
              Basic and C# developer, then moving to Application and Services
              Lead and Release Manager and eventually becoming an MM1 Team Lead.
              During her time at Finsoft, Vera made a noteworthy contribution to
              creating one of the world leading software platforms for fixed
              odds betting. Towards the end of her GTECH period, Vera became the
              Head of the MM1 Development Team, organising both development and
              support of the MarginMaker 1 product. Before Finsoft, Vera had
              worked in both private and public sector, on various projects,
              ranging from network design, desktop publishing, to software for
              Post Offices and acquired strong development, leadership and
              project management skills.
            </p>
          </div>
        </div>
        <div id="danijela" className="row manager ng-scope" nice-scroll="true">
          <div className="col-md-3 col-sm-3 col-xs-4">
            <img className="img-responsive" src={Danijela}  alt="" />
          </div>
          <div className="col-md-9 col-sm-9 col-xs-8">
            <h2 className="ng-binding">Danijela Arsić</h2>
            <h3 className="ng-binding">Database Team Lead</h3>
            <h4 className="intro ng-binding">
              Danijela Arsic Is Database team lead at Finbet where she
              successfully manages a team and facilitates whole systems
              development life cycle, from project planning, requirements
              analysis, design, to implementation and support.
            </h4>
            <p className="ng-binding">
              Prior to this role, Danijela had been working for the
              Belgrade-based Finsoft, where she took a range of roles in
              different business areas - application support, software
              development, integration of application components, database and
              application architecture and design. With extensive IT experience
              of working for various Companies, Danijela pursued challenging
              projects and acquired strong leadership and project management
              capabilities. She holds a B.Sc. in Information technologies and
              Statistics from the Economy Faculty of Belgrade University.
            </p>
          </div>
        </div>
        <div id="zeljko" className="row manager ng-scope" nice-scroll="true">
          <div className="col-md-3 col-sm-3 col-xs-4">
            <img className="img-responsive" src={Zeljko}  alt="" />
          </div>
          <div className="col-md-9 col-sm-9 col-xs-8">
            <h2 className="ng-binding">Željko Nenadić</h2>
            <h3 className="ng-binding">DevOps Team Lead</h3>
            <h4 className="intro ng-binding">
              Zeljko Nenadic is Application Support Team Lead at Finbet where he
              and his team mostly do problem solving and provide assistance and
              technical expertise to other teams where necessary.
            </h4>
            <p className="ng-binding">
              Before joining Finbet Zeljko was part of Belgrade-based Finsoft
              (later GTECH Belgrade) MM1 Team for 5 years where he started out
              as a Support Engineer before becoming MM1 Support Team lead. He
              has over 15 years of IT related experience, having worked in
              various roles, from software and database development to database,
              systems and network administration. When he's not exercising
              engineering mentality or runs out of things that need fixing he's
              putting this skill set to a good use by being a go-to guy when
              some out-of-the box thinking is required or as a sounding board
              for various ideas and projects. Some of main reasons he's still
              sticking around are, as he often claims, "the people he works
              with, never ending opportunity to learn new things and the chance
              to play virtual Dr. House every now and then".
            </p>
          </div>
        </div>
        <div id="katarina" className="row manager ng-scope" nice-scroll="true">
          <div className="col-md-3 col-sm-3 col-xs-4">
            <img className="img-responsive" src={Katarina}  alt="" />
          </div>
          <div className="col-md-9 col-sm-9 col-xs-8">
            <h2 className="ng-binding">Katarina Ćurčić</h2>
            <h3 className="ng-binding">Payments Team Lead</h3>
            <h4 className="intro ng-binding">
              Katarina Ćurčić is a Payments Team Lead at Finbet. She is
              responsible for the development and operations of a highly
              flexible and performant solution for processing online payments
              within and across a wide range of jurisdictions.
            </h4>
            <p className="ng-binding">
              Katarina graduated from FON (IT department) University of Belgrade
              and joined Telekom Srbija where she worked for ten years. There
              she gained a lot of experience, primarily as a developer, later as
              a team lead of CRM department. She moved on to Finbet seeking for
              new knowledge and challenges. In Finbet she started off as a
              member of a small payment team. Very soon the team got a new
              project called NeuroPay and from a small became a big team.
              Through the project, team was learning a lot and getting to know
              each other as well. During almost two years, all together they
              created a great product. More importantly, they created a friendly
              environment and great relationship. She likes to say: “being team
              lead is coming as a reward, not just because of hard work, but
              because of people who are support and inspiration for new
              achievements”.
            </p>
          </div>
        </div>
        <div id="nemanja" className="row manager ng-scope" nice-scroll="true">
          <div className="col-md-3 col-sm-3 col-xs-4">
            <img className="img-responsive" src={Nemanja}  alt="" />
          </div>
          <div className="col-md-9 col-sm-9 col-xs-8">
            <h2 className="ng-binding">Nemanja Stošić</h2>
            <h3 className="ng-binding">Infrastructure Team Lead</h3>
            <h4 className="intro ng-binding">
              Nemanja is an experienced and accomplished systems engineer,
              infrastructure team lead and a high-performance team builder.
            </h4>
            <p className="ng-binding">
              Having worked in a variety of betting and software companies
              (including Finsoft), he earned a reputation for always ensuring
              that system’s uptime, performance, resources and security all meet
              the needs of users and customers, without exceeding the budget. At
              Finbet, he runs a young, dynamic 20+ strong team whose moto is
              “One for all and all for one”.
            </p>
          </div>
        </div>
        <div id="miroslav" className="row manager ng-scope" nice-scroll="true">
          <div className="col-md-3 col-sm-3 col-xs-4">
            <img className="img-responsive" src={Nebojsa}  alt="" />
          </div>
          <div className="col-md-9 col-sm-9 col-xs-8">
            <h2 className="ng-binding">Nebojša Stanković</h2>
            <h3 className="ng-binding">MM2 Team Lead</h3>
            <h4 className="intro ng-binding">
              Nebojša Stanković is the MM2 Team Lead. MM2 is short name for
              Margin Maker Two sports betting platform. This is a site of
              betting engines and associated support modules, which covers any
              product type and offers full integration across all betting
              channels. The MM2 team provides support, maintenance and
              development for our clients.
            </h4>
            <p className="ng-binding">
              Nebojša holds a BSc degree in Pure and Applied Mathematics from
              Belgrade Faculty of Mathematics. He worked as math professor in a
              high school for 9 years, but then made a switch to pursue career
              in IT industry. In the following 10 years, he made his way from a
              Junior Database Developer to a Project Manager and Team Lead in a
              small serbian company, developing ERP and accounting software.
              Seeking for new challenges, he moved to Finbet in 2015, where he
              soon realized that he was “a right man in the right place at the
              right time”. Learning a lot of new things in a very short time was
              often challenging and frustrating, but also a great satisfaction.
              Now he works as a Senior Database Developer and runs a team of 10
              young, but ambitious and competent developers, trying to keep both
              his people and the client happy. When out of office, he enjoys
              spending time with his family. Nebojsa lives in Belgrade, Serbia.
            </p>
          </div>
        </div>
        <div id="dule" className="row manager ng-scope" nice-scroll="true">
          <div className="col-md-3 col-sm-3 col-xs-4">
            <img className="img-responsive" src={Dusan}  alt="" />
          </div>
          <div className="col-md-9 col-sm-9 col-xs-8">
            <h2 className="ng-binding">Dušan Bulajić</h2>
            <h3 className="ng-binding">QA Team Lead</h3>
            <h4 className="intro ng-binding">
              Dusan Bulajic is the QA Team Lead at Finbet, responsible for
              ensuring the overall quality and reliability of all software and
              data products delivered.
            </h4>
            <p className="ng-binding">
              Prior to this role, Dusan worked at the Belgrade-based Finsoft,
              where he commenced his career as a Junior QA Specialist. In the
              five years that he had spent at Finsoft, as his career progressed,
              Dusan learnt the ins and outs of the QA trade and became a QA Team
              Lead. His main responsibilities included managing the team,
              developing testing methodologies and creating standards and
              procedures for quality assurance in automation and manual testing.
              Dusan graduated from the Electrical Engineering College in
              Belgrade and holds the ISTQB certificate in software testing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
