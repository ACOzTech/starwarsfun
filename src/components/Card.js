const Card = ({person}) => {
  const {name, height, mass, hair_color, gender, skin_color, eye_color, birth_year} = person;
  return (    
    <div className='dib orange ba br3 ph2 ph4-ns ma2 ma3-ns tl swf-bg-blue-green'>
        <h2 className='tc'>{name}</h2>
        <hr className='tc bb mw100 bw1 b--washed-red'/>
      <div>
        <p>height: {height}</p>
        <p>mass: {mass}</p>
        <p>hair color: {hair_color}</p>
        <p>gender: {gender}</p>
        <p>skin color: {skin_color}</p>
        <p>eye color: {eye_color}</p>
        <p>birth year: {birth_year}</p>
      </div>
    </div>
  )
}

export default Card;