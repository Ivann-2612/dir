import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import Carousel from './Carousel'
import Andrijana from '../assets/images/andrijana.jpg'
import Nebojsa from '../assets/images/nebojsast1.jpg'
import Spale from '../assets/images/spale.jpg'
import Dejan from '../assets/images/dejan.jpg'
import { getAllAds } from '../service'


const JoinUs = () => {

  const [positions, setPositions] = useState([]);

  useEffect(() => {
    document.title = "Join us";

    getAllAds().then((res) => {
      //console.log(res.data.data);
      setPositions(res.data.data);
    });
    window.scrollTo(0,0)
  }, []);


  //Auto scroll to the top of this page
  // const ScrollToTopOnMount = () => {
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);
  //   return null;
  // };

console.log(positions);
  return (
    <div>
      <Carousel />
     

<div className="paralelogram join-us apply-mask">
  
  <div className="container">

    <div className="row" style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)"}}>
      <div className="col-xs-12">
        <h1 className="title">Join us</h1>
      </div>
    </div>

    <div className="row" style={{paddingBottom:'100px',justifyContent:'center'}}>
      <div className="col-xs-12 col-md-6 col-md-offset-3" data-animation="fadeInDown" animate-scroll='true'>
        <p className="highlight">Interested in long term opportunities with one of the industry’s best practitioners ?</p>
      </div>
    </div>
  </div>
  <div className="mask-rising">
    {/* mask  */}

  </div>
</div>


<div className="drop-up apply-mask" data-animation="fadeIn" animate-scroll='true' style={{clipPath: 'polygon(0 4%, 100% 0, 100% 100%, 0 100%)'}}>
  <p animate-scroll='true' style={{marginTop:'20px',padding:' 80px 30px'}} >As a forward thinking company we’re always looking to add new talents to our accomplished multi-disciplinary teams of Analysts, Support Specialists, Programmers, Testers, Support and Service</p>
  <p>We welcome applications both from recent graduates, looking to begin their career, and seasoned IT professionals aspiring to tackle the challenges of a fast paced, high-tech organisation servicing one of the most demanding and exciting industries of
    today.</p>
  <p>Please apply with your CV and we will invite you for an interview where appropriate.</p>
  <div className="join-us-mask mask-droping">
     {/* mask  */}
  </div>
</div>

<div className="paralelogram buttons apply-mask">
  <div className="mask-droping">
    {/* mask  */}
  </div>
  <div className="container">
  

    <h1 className="title jobs">Positions available</h1>

    <div className="row ng-scope">
      {positions.map((item,index) => {
        return(
          <div key={index} className="col-sm-6 ng-scope">
          <div className="position animated fadeInDown" data-animation="fadeInDown" animate-scroll="true" style={{visibility:'hidden'}}>
            <Link  to={`/joinus/${item.id}`}>
              <h2 className="ng-binding-one">{item.position}</h2>
            </Link>
            <h3 className="ng-binding-one">{item.deadline}</h3>
          </div>
        </div>
        )
      }
        
      )}
     
      
      {/* <div className="col-sm-6 ng-scope">
        <div className="position animated fadeInDown" data-animation="fadeInDown" animate-scroll="true" style={{visibility:'hidden'}}>
          <a href="/jobs/Automation QA Analyst052022">
            <h2 className="ng-binding">Automation QA Analyst</h2></a>
          <h3 className="ng-binding">19.06.2022.</h3>
        </div>
      </div>
      
      <div className="col-sm-6 ng-scope">
        <div className="position animated fadeInDown" data-animation="fadeInDown" animate-scroll="true" style={{visibility:'hidden'}}>
          <a href="/jobs/Automation QA Analyst052022">
            <h2 className="ng-binding">Automation QA Analyst</h2></a>
          <h3 className="ng-binding">19.06.2022.</h3>
        </div>
      </div>
      
      <div className="col-sm-6 ng-scope">
        <div className="position animated fadeInDown" data-animation="fadeInDown" animate-scroll="true" style={{visibility:'hidden'}}>
          <a href="/jobs/Automation QA Analyst052022">
            <h2 className="ng-binding">Automation QA Analyst</h2></a>
          <h3 className="ng-binding">19.06.2022.</h3>
        </div>
      </div>
      
      <div className="col-sm-6 ng-scope">
        <div className="position animated fadeInDown" data-animation="fadeInDown" animate-scroll="true" style={{visibility:'hidden'}}>
          <a href="/jobs/Automation QA Analyst052022">
            <h2 className="ng-binding">Automation QA Analyst</h2></a>
          <h3 className="ng-binding">19.06.2022.</h3>
        </div>
      </div>
      
      <div className="col-sm-6 ng-scope">
        <div className="position animated fadeInDown" data-animation="fadeInDown" animate-scroll="true" style={{visibility:'hidden'}}>
          <a href="/jobs/Automation QA Analyst052022">
            <h2 className="ng-binding">Automation QA Analyst</h2></a>
          <h3 className="ng-binding">19.06.2022.</h3>
        </div>
      </div>

      <div className="col-sm-6 ng-scope">
        <div className="position animated fadeInDown" data-animation="fadeInDown" animate-scroll="true" style={{visibility:'hidden'}}>
          <a href="/jobs/Automation QA Analyst052022">
            <h2 className="ng-binding">Automation QA Analyst</h2></a>
          <h3 className="ng-binding">19.06.2022.</h3>
        </div>
      </div>
      
      <div className="col-sm-6 ng-scope">
        <div className="position animated fadeInDown" data-animation="fadeInDown" animate-scroll="true" style={{visibility:'hidden'}}>
          <a href="/jobs/Automation QA Analyst052022">
            <h2 className="ng-binding">Automation QA Analyst</h2></a>
          <h3 className="ng-binding">19.06.2022.</h3>
        </div>
      </div> */}
      
   </div>

    {/* <div className="row">
      <div className="col-sm-6">
        <div className="position" data-animation="fadeInDown" animate-scroll='true'>
          <a href="/jobs/{{job.id}}">
           <h2>{{job.name}}</h2>
          <h3>{{job.deadline}}</h3></a>
        </div>
      </div>
    </div> */}

  </div>
  <div className="mask-rising">
     {/* mask  */}
  </div>
</div>

<div className="container employees">
    <h2>Meet our people</h2>
    <div className="row  meet-people">
      <div className="col-xs-12 col-sm-6 col-md-3 employee-box">
        <div className="media animated pulse  employee-box" data-animation="pulse" animate-scroll='true' data-delay="{{(index*250)}}">
          <a className="media-left" href="/profiles">
            <img style={{width:'270px',height:'270px'}} className="img-responsive" src={Nebojsa} alt="{{profile.name}}"/>
          </a>
          <h4 className="media-heading">
          Nebojša Stanković
          </h4>
          <div className="media-body">
          Database specialist, MM2
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-3 employee-box">
        <div className="media animated pulse  employee-box" data-animation="pulse" animate-scroll='true' data-delay="{{(index*250)}}">
          <a className="media-left" href="/profiles">
            <img style={{width:'270px',height:'270px'}} className="img-responsive" src={Spale} alt="{{profile.name}}"/>
          </a>
          <h4 className="media-heading">
          Aleksandar Spasojevic
          </h4>
          <div className="media-body">
          QA specialist
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-3 employee-box">
        <div className="media animated pulse  employee-box" data-animation="pulse" animate-scroll='true' data-delay="{{(index*250)}}">
          <a className="media-left" href="/profiles">
            <img style={{width:'270px',height:'270px'}} className="img-responsive" src={Dejan} alt="{{profile.name}}"/>
          </a>
          <h4 className="media-heading">
          Dejan Stanojevic
          </h4>
          <div className="media-body">
          Senior Oracle Database Administrator
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6 col-md-3 employee-box">
        <div className="media animated pulse  employee-box" data-animation="pulse" animate-scroll='true' data-delay="{{(index*250)}}">
          <a className="media-left" href="/profiles">
            <img style={{width:'270px',height:'270px'}} className="img-responsive" src={Andrijana} alt="{{profile.name}}"/>
          </a>
          <h4 className="media-heading">
          Andrijana Sarić
          </h4>
          <div className="media-body">
          Technical Support operations
          </div>
        </div>
    </div>

   </div>
</div>
<script>
	applyMaskBox();
</script>

      
    </div>
  )
}

export default JoinUs