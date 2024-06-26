import { useGlobalContext } from "./context";

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements);
    const searchValue = e.target.elements.search.value
    if(!searchValue) return;
    // console.log(searchValue);
    setSearchTerm(searchValue)
  }
  return (

    <section>
      <h1 className="title">Unsplush Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="cat"
        className="form-input search-input"
      />
      <button type="submit" className="btn" >Search</button>
    </form>
    </section>



  );
};

export default SearchForm;
