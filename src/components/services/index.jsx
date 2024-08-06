import Service from "./Service";

const fetchData = async () => {
  const data = await fetch("https://667b13d3bd627f0dcc919da0.mockapi.io/users");
  console.log(data);
  return await data.json();
};

const Services = async () => {
  const services = await fetchData();
  console.log(services);

  return (
    <>
      {services.map((service) => (
        <Service key={service.id} title={service.username} />
      ))}
    </>
  );
};

export default Services;
