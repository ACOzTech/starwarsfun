const SearchBox = ({searchChange}) => {
  return (
    <div className='pa2'>
      <input 
        className='pa1 pa2-m pa3-l ba br2 purple'
        type='search' 
        placeholder='search characters'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;