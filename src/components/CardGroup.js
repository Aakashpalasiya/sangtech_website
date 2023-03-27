import React from 'react';

function CardGroup() {
  return (
    
    <div className="card-group mt-5 p-3 ">
        
      <div className="card">
        <img src="https://cdn.pixabay.com/photo/2016/12/19/10/16/hands-1917895__340.png" className="card-img-top" alt="..." />
        <div className="card-body p-3">
          <h5 className="card-title">Fully Support</h5>
          <p className="card-text">Our comprehensive product review service provides detailed analysis to help you make informed decisions about your IT investments.</p>
    
        </div>
      </div>
      <div className="card  p-3">
        <img src="https://st2.depositphotos.com/1005979/7918/i/450/depositphotos_79188038-stock-photo-review-magnifying-glass.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Product Review</h5>
          <p className="card-text">Our thorough product review process evaluates every aspect of your IT solutions, from performance and security to user experience and scalability.</p>
    
        </div>
      </div>
      <div className="card p-3">
        <img src="https://srs-infosystems.com/img/services/product-analysis.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Product Review</h5>
          <p className="card-text">Our team of experts use advanced tools to provide you with in-depth product analysis, giving you a clear picture of the strengths and weaknesses of your IT solutions.</p>
    
        </div>
      </div>
    </div>
  );
}

export default CardGroup;
