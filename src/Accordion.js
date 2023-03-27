import React from 'react';

const Accordion = () => {
  return (
    <div className="accordion " id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <div className="d-flex justify-content-center">
             <h4>About SangTech Technologies</h4>
    </div>
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
          <strong>Ajay Kumar Sinha is </strong>a software developer (also software engineer) and Indian businessman, who <strong>founded Sangtech Technologies (now Sangtech Technologies Pvt. Ltd.)</strong> an IT services provider Company which has skills and expertise to facilitate complex business solutions. And also Founder of Quenchhunger (Food Delivery AAp)

A Science Graduate with Bachelors Degree (Honors) in Chemistry from Zakir Hussain College, being one of the most prestigious collages of Delhi University. Further, he chose carrier in Information Technology (IT) by doing post graduate diploma having advance IT exposure from Centre for Development of Advanced Computing - Pune (C-DAC Pune University Campus), Government of India.

<strong>Mr. Ajay Kumar Sinha</strong> is having more than 19 years of experience in Software application development/analysis/designing & architecture.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;