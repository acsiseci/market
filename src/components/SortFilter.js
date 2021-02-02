const SortFilter = () => {
  return (
    <div className="col-12 sorting">
      <div className="row title">Sorting</div>
      <div className="row sorting-items">
        <ul>
          <li className="mb-3">
            <label>
              <input
                type="radio"
                className="sorting-item"
                value="low"
                name="sorting"
              />
              <span>Price low to high</span>
            </label>
          </li>
          <li className="mb-3">
            <label>
              <input
                type="radio"
                className="sorting-item"
                value="high"
                name="sorting"
              />
              <span>Price high to low</span>
            </label>
          </li>
          <li className="mb-3">
            <label>
              <input
                type="radio"
                className="sorting-item"
                value="new"
                name="sorting"
              />
              <span>New to old</span>
            </label>
          </li>
          <li>
            <label>
              <input
                type="radio"
                className="sorting-item"
                value="old"
                name="sorting"
              />
              <span>Old to new</span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SortFilter;
