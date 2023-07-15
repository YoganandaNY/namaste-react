import { LOGO_URL } from "../utils/constant";

const ItemLists = ({ items, dummy }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="border-b-2 my-2 py-2">
          <div className="flex justify-between">
            <div className="w-10/12">
              <div className="font-bold text-sm my-1 py-1">
                {item?.card?.info?.name}
              </div>
              <div className="text-sm mb-3">
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice}
              </div>
              <p className="text-xs my-1 py-1">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="">
              <button className="absolute bg-black text-white text-center mx-12 my-16 p-1 text-xs">
                ADD +
              </button>
              <img
                className="w-[140px] rounded-lg"
                src={LOGO_URL + item?.card?.info?.imageId}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemLists;
