import React from 'react'

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/birthday.jpg",
      title: "Birthday Planning",
    },
    {
      id: 2,
      url: "/anniversary.jpg",
      title: "Anniversary Planning",
    },
    {
      id: 3,
      url: "/wedding1.jpg",
      title: "Wedding Planning",
    },
    {
      id: 4,
      url: "/engagement.jpg",
      title: "Engagement Planning",
    },
   
    {
      id: 5,
      url: "/catering.jpg",
      title: "Catering",
    },
    {
      id: 6,
      url: "/cor-party.jpg",
      title: "Corporate party Planning",
    },
    {
      id: 7,
      url: "/decorator.jpg",
      title: "Decorator",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;