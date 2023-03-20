import './Card.css';

const Card = ({person}) => {
  const {name, height, mass, hair_color, gender, skin_color, eye_color, birth_year} = person;
  return (    
    <div className='cardDiv'>
        <h2 className='cardName'>{name}</h2>
      <div>
        <p>height: {height}</p>
        <p>mass: {mass}</p>
        <p>hair color: {hair_color}</p>
        <p>gender: {gender}</p>
        <p>skin color: {skin_color}</p>
        <p>eye color: {eye_color}</p>
        <p>birth_year: {birth_year}</p>
      </div>
    </div>
  )
}

export default Card;