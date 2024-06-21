import "./App.css";

const Greeting = (props) => {
  return (
    <div>
      <h1 className="text">Hello {props.vorname}</h1>
      <h3>my firstname is :{props.vorname}</h3>
      <h3>my lastname is :{props.nachname}</h3>

      <h1>I live in :{props.city}!</h1>
      <h3>my Favourite sports is :{props.sport}</h3>
    </div>
  );
};

export default Greeting;
