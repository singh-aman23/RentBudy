import classes from './searchbar.module.css';

export default function SearchBar() {
    return (
      <div className={classes.searchBar}>
        <input
          type="text"
          placeholder="Looking for a house? Enter location..."
          className={classes.searchInput}
        />
        <button className={classes.searchButton}>Search</button>
      </div>
    );
  }