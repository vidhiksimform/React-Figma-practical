const Pagination = ({ pageNo, activePage }) => {
  return (
    <a href="#" className={`page-number ${activePage}`}>
      {pageNo}
    </a>
  );
};

export default Pagination;
