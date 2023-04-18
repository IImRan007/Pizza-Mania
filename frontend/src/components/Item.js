const Item = ({ item, handleIncDec }) => {
  const price = parseInt(item.qty) * parseInt(item.price);
  let individualPrice = price ? price : item.price;
  if (!item.qty) {
    individualPrice = 0;
  }

  return (
    <div
      className="card lg:card-side bg-[#a2d2ff] shadow-xl mt-[1.5rem] lg:items-center max-w-[40rem]"
      key={item._id}
    >
      <div className="card-body lg:items-center gap-y-[2rem]">
        <h2 className="card-title text-[27px]">
          {item.name} ({item.size})
        </h2>
        <h2 className="card-title">
          Total Price: <span className="font-bold">₹{individualPrice} </span>
        </h2>
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
            <input
              type="text"
              placeholder="Qty"
              min={1}
              value={item.qty}
              className="input max-w-[5rem] font-bold"
              onChange={(e) => {
                console.log(e);
                handleIncDec(item._id, "inc");
              }}
            />
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
  );
};
export default Item;
