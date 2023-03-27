import React from 'react';

function Card(props) {
  return (

    <div className="col">
      <div className="card">
        <img src={props.imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

function ValueRelation() {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <Card
        imgSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvdXAlMjB3b3JrfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        title="All Work"
        text="At our company, we offer a full range of IT services to help your business thrive in the digital world. From development and design to marketing and consulting, we're your one-stop shop for all things tech.~~"
      />
      <Card
        imgSrc="https://media.istockphoto.com/id/1050217124/photo/smartphone-media-technology-and-social-network-concept.jpg?b=1&s=170667a&w=0&k=20&c=raFW2ckTgis4HXMFsy2hbHBubBllZyJChao91_vBOS8="
        title="App"
        text="Our team of skilled developers can create high-quality apps for your business, tailored to your specific needs and goals. Let us help you stand out in the crowded app market"
      />
      <Card
        imgSrc="https://media.istockphoto.com/id/1349390515/photo/paperless-workplace-idea-e-signing-electronic-signature-document-management-businessman-signs.jpg?b=1&s=170667a&w=0&k=20&c=SYbmAY2b9VmsSPLzsRsRFAayIeS_prbFppFNBmmlNMQ="
        title="Software"
        text="Our experienced team of software developers can help you create custom solutions to meet your unique business needs. From desktop applications to cloud-based solutions, we'll help you stay ahead of the curve."
      />
   <Card
        imgSrc="https://media.istockphoto.com/id/1050217124/photo/smartphone-media-technology-and-social-network-concept.jpg?b=1&s=170667a&w=0&k=20&c=raFW2ckTgis4HXMFsy2hbHBubBllZyJChao91_vBOS8="
        title="Web Development"
        text="We build beautiful, responsive websites that are optimized for both desktop and mobile devices. Whether you need a simple landing page or a complex e-commerce site, we've got you covered."
      />

    </div>
  );
}

export default ValueRelation;
