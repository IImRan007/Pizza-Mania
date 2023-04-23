const Item = ({ item, handleIncDec }) => {
  const price = parseInt(item.qty) * parseInt(item.price);
  let individualPrice = price ? price : item.price;
  if (!item.qty) {
    individualPrice = 0;
  }

  return (
    // <div
    //   className="card lg:card-side bg-[#a2d2ff] shadow-xl mt-[1.5rem] lg:items-center max-w-[40rem]"
    //   key={item._id}
    // >
    //   <div className="card-body lg:items-center gap-y-[2rem]">
    //     {item.imgFile && <img src={item.imgFile.secure_url} alt="product" />}
    //     <h2 className="card-title text-[27px]">
    //       {item.name} ({item.size})
    //     </h2>
    //     <h2 className="card-title">
    //       Total Price: <span className="font-bold">₹{individualPrice} </span>
    //     </h2>
    //     <div className="card-actions flex-nowrap mt-4 gap-x-4">
    //       <div className="btn-group">
    //         <button
    //           className="btn bg-black text-white"
    //           onClick={() => {
    //             if (!item.qty) {
    //               return;
    //             }

    //             handleIncDec(item._id, "dec");
    //           }}
    //         >
    //           -
    //         </button>
    //         <input
    //           type="text"
    //           placeholder="Qty"
    //           min={1}
    //           value={item.qty}
    //           className="input max-w-[5rem] font-bold"
    //           onChange={(e) => {
    //             console.log(e);
    //             handleIncDec(item._id, "inc");
    //           }}
    //         />
    //         <button
    //           className="btn bg-black text-white"
    //           onClick={() => handleIncDec(item._id, "inc")}
    //         >
    //           +
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col mx-auto max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100 mt-[3rem] rounded-xl">
      <ul className="flex flex-col divide-y divide-gray-700">
        <li
          key={item._id}
          className="flex flex-col py-6 sm:flex-row sm:justify-between"
        >
          <div className="flex w-full space-x-2 sm:space-x-4">
            {/* <img
                className="flex-shrink-0 object-contain w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                src={product.imageSrc}
                alt={product.name}
              /> */}
            <div className="flex flex-col justify-between w-full pb-4">
              <div className="flex justify-between w-full pb-2 space-x-2">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                    {item.name} ({item.size})&nbsp; <span>X {item.qty}</span>
                  </h3>
                  {/* <p className="text-sm dark:text-gray-400">{product.color}</p> */}
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold">₹{individualPrice}</p>
                </div>
              </div>
              <div className="flex text-sm divide-x">
                <button
                  type="button"
                  className="flex items-center px-2 py-1 pl-0 space-x-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                    <rect width="32" height="200" x="168" y="216"></rect>
                    <rect width="32" height="200" x="240" y="216"></rect>
                    <rect width="32" height="200" x="312" y="216"></rect>
                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                  </svg>
                  <span>Remove</span>
                </button>
              </div>
              <div className="card-actions flex-nowrap mt-4 gap-x-4">
                <div className="btn-group">
                  <button
                    className="btn bg-black text-white"
                    onClick={() => {
                      if (!item.qty) {
                        return;
                      }

                      handleIncDec(item._id, "dec");
                    }}
                  >
                    -
                  </button>
                  {/* <input
                    type="text"
                    placeholder="Qty"
                    min={1}
                    value={item.qty}
                    className="input max-w-[5rem] font-bold text-black"
                    onChange={(e) => {
                      console.log(e);
                      handleIncDec(item._id, "inc");
                    }}
                  /> */}
                  <button
                    className="btn bg-black text-white"
                    onClick={() => handleIncDec(item._id, "inc")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Item;
