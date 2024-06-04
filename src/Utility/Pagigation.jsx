import ReactPaginate from 'react-paginate';

export const Pagigation = () => {
  let pageCount = 100
  const handlePageClick = () => {
  }
  return (
    <div className='centerpagination centerAndBold' >
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName='pagination'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        previousLinkClassName='page-link'
        nextClassName='page-item'
        nextLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
      />
    </div>

  )
}
