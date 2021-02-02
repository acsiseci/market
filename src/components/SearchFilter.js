const SearchFilter = () => {
  return (
    <div className="col-12 mt-4 sorting">
      <div className="row title">Brands</div>
      <div className="row filter-items">
        <div className="filter-input">
          <input type="text" placeholder="Search brand" />
        </div>
        <div className="list">
          <ul>
            <li className="">
              <label>
                <input
                  type="checkbox"
                  className="sorting-item"
                  value="low"
                  name="filter"
                />
                <span>All</span>
                <span>(18)</span>
              </label>
            </li>
            <li className="">
              <label>
                <input
                  type="checkbox"
                  className="sorting-item"
                  value="high"
                  name="filter"
                />
                <span>Konopelski Group</span>
                <span>(9)</span>
              </label>
            </li>
            <li className="">
              <label>
                <input
                  type="checkbox"
                  className="sorting-item"
                  value="new"
                  name="filter"
                />
                <span>Rice Inc</span>
                <span>(9)</span>
              </label>
            </li>
            <li className="">
              <label>
                <input
                  type="checkbox"
                  className="sorting-item"
                  value="old"
                  name="filter"
                />
                <span>Feil, Dooley and Reinger</span>
                <span>(18)</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
