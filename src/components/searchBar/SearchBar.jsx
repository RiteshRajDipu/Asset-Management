import { useDispatch, useSelector } from 'react-redux';

import './searchBar.scss';
import { setSearchQuery } from '../../store/slices/ProductSlice';


const SearchBar = () => {
    const dispatch = useDispatch();
    const searchQuery = useSelector((state) => state.products.searchQuery);

    const handleSearchChange = (e) => {
        const query = e.target.value || '';
        dispatch(setSearchQuery(query));
    };

    return (
        <div className="searchBar">
          <input
            type="text"
            value={searchQuery}
            placeholder="Search..."
            onChange={handleSearchChange}
          />
        </div>
      );
}

export default SearchBar;