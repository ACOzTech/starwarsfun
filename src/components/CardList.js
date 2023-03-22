import Card from './Card';

const CardList = ({people}) => {
  if (people !== undefined) {
    return (
      <div>
        {
          people.map(person => {
            return (
              <Card
                key={person.name}
                person={person}
              />
            )
          })
        }
      </div>
    )
  } else {
    return <h2>No data :(</h2>
  }
}

export default CardList;