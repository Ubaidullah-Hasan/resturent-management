import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const Pagination = ({ pages, setCurrentPage, currentPage, setLoading }) => {

    const handlePageChange = (pageNum) => {
        setCurrentPage(pageNum);

        if (pageNum !== currentPage) {
            setLoading(true);
        }
    };

    const handlePrev = () => {
        setCurrentPage(currentPage - 1)
        setLoading(true);
    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
        setLoading(true);
    }


    return (
        <div>
            <div className='flex items-center gap-4 justify-center md:justify-start'>

                {/* right button */}
                <button
                    onClick={() => handlePrev()}
                    className="bg-[#BB8506] disabled:bg-gray-200 rounded-full flex items-center justify-center w-16 h-16 border-[3px] border-black"
                    disabled={currentPage === 1}
                >
                    <FaArrowLeft />
                </button>

                {/* next button */}
                <button
                    onClick={() => handleNext()}
                    className="bg-[#BB8506] disabled:bg-gray-200 rounded-full flex items-center justify-center w-16 h-16 border-[3px] border-black"
                    disabled={pages.length === currentPage}
                >
                    <FaArrowRight />
                </button>


                <div className="flex gap-1 md:gap-2">
                    {pages.map((pageNum, i) =>
                        <p
                            key={i}
                            className={`btn w-6 h-6 min-h-0 btn-circle ${pageNum === currentPage ? 'bg-green-700 hover:bg-green-700 text-white' : ''}`}
                            onClick={() => handlePageChange(pageNum)}
                        >
                            {pageNum}
                        </p>
                    )}
                </div>


            </div>
        </div >
    );
};

export default Pagination;