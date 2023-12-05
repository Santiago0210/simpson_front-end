

const CharacterInfo = ({ character }) => {

  return (
       
    <div >
      
      <article className="resident">
        <header className="resident__header">
         
          <div className="resident__status">
            <span className={`resident__status__circle ${character?.status}`}></span>
            <span className="resident__status__value">{character?.status}</span>
          </div>
          <img className="resident__image" src={character?.image} alt="" />
        </header>
        
        <section className="resident__body">
          <h3 className="resident__name">{character?.firstName} {character?.lastName}</h3>
          <hr className="resident__separator" />
          <ul className="resident__list">
            <li className="resident__item"><span className="resident__label">Gender: </span><span className="resident__value1">{character?.gender}</span></li>
            <li className="resident__item"><span className="resident__label">Description: </span><span className="resident__value">{character?.description}</span></li>
            <li className="resident__item"><span className="resident__label">First episode to appear: </span><span className="resident__value">{character?.episodes[0]?.name}</span></li>
            <li className="resident__item"><span className="resident__label">Cars: </span><span className="resident__value4">{character?.cars[0]?.brand}</span></li>
            <li className="resident__item"><span className="resident__label">Job: </span><span className="resident__value5">{character?.job?.name}</span></li>
          </ul>
        </section>
      </article> 
    </div>
  )
}

export default CharacterInfo