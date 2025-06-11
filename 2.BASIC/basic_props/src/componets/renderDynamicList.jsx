const Map = () => {
  const data = ['sharik', 'basha', 'sharikbasha'];
const fechdata = [{name:'sharik',age:18},{name:"basha",age:18}]

const cor = fechdata.filter(item=>item.name != 'sharik')

  return (
    <ul>
      {data.map(val => (
        <li key={val}>{val}</li>
      ))}
      {cor.map(item => {
        return <li key={item.name}>{item.name}{item.age}</li>
      })}
    </ul>
  );
};

export default Map;
