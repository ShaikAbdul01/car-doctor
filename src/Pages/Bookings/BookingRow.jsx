const BookingRow = ({ booking, handaleDelete, handaleBookingConfirm }) => {
  const { _id, customerName, date, price, img, status } = booking;

  return (
    <>
      {/* row 1 */}
      <tr>
        <th>
          <button
            onClick={() => handaleDelete(_id)}
            className="btn btn-circle btn-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="avatar">
            <div className=" w-24 h-24">{img && <img src={img} alt="" />}</div>
          </div>
        </td>
        <td>
          <div>
            <div className="font-bold">{customerName}</div>
          </div>
        </td>
        <td>{price}</td>
        <td>{date}</td>
        <th>
          {status === "confirm" ? (
            <span className="btn btn-primary btn-xs">Confirmed</span>
          ) : (
            <button
              onClick={() => handaleBookingConfirm(_id)}
              className="btn btn-error btn-xs"
            >
              Confirm
            </button>
          )}
        </th>
      </tr>
    </>
  );
};

export default BookingRow;
