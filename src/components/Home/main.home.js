import { hover } from "@testing-library/user-event/dist/hover";
import { NavLink } from "react-router-dom";

const Home = (props) => {
  return (
    <div className="mt-10 md:pr-24 md:pl-24">
      <h1 className="font-medium text-2xl md:text-7xl text-dark" 
      style = {{
        fontSize:" 2.5rem",
         lineheight: "1.2",
         fontWeight:" 600"}}>
        {props.title}
      </h1>
      <p className="text-xs md:text-base text-gray-600 pt-3">
        {props.description}
      </p>
      <NavLink to="/chatgpt">
        <button
          type="button"
          className="mt-5 w-36 md:w-52 md:h-15 md:text-2xl font-medium rounded-lg px-5 py-2.5 border-2 border-black shadow-lg text-center mr-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-dark boxview"
          style={{
            boxShadow: "rgb(30 28 28) 0.4rem 0.5rem 5px 0px"
            
          }}
        >
          Let's Go
        </button>
      </NavLink>
    </div>
  );
};

export default Home;
