import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "./redux/reducers/CommonReducer";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";

function App() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.Common.productList.products);

  useEffect(() => {
    dispatch(getProducts(""));
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <ImageSlider />
      <ul className="grid grid-cols-1 md:grid-cols-3">
        {productList &&
          productList.map((item) => (
            <li
              key={item.id}
              className="w-[300px] py-5 mx-12 my-12 shadow-2xl bg-white rounded-lg group"
            >
              <div className="py-1 px-2">
                <div className="flex py-3 items-center justify-center">
                  <img
                    className="h-[200px] w-[300px]"
                    src={item.images[0]}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-4 px-4">
                  <p className="font-bold text-lg text-gray-900 text-center pt-4">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500 text-center line-clamp-2">
                    {item.description}
                  </p>
                  <p className="text-md font-semibold text-black-500 text-center line-clamp-2 ">
                    {"₹ " + item.price}
                  </p>
                  <button className="bg-blue-500 rounded text-white py-2 hover:bg-blue-900 uppercase">
                    Add to cart
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
