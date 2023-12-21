import BooksSection from "./page-sections/books-section";
import SearchSection from "./page-sections/search-section";

const Search = () => {
  return (
    <main style={{ flexGrow: 1, display: "grid", gridTemplateRows: "auto 1fr" }}>
      <SearchSection />
      <BooksSection />
    </main>
  );
};

export default Search;
