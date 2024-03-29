import bhajan_lal from "../../images/bhajan_lal.webp";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <nav class=" py-4 px-6 flex justify-between items-center w-full ">
        <div className="text-3xl text-[#4E7690] mr-12 rounded-full shadow-md"><IoIosArrowBack /></div>
        <div className="flex-auto text-sm text-[#4E7690] ">Categories</div>
        <div className="relative flex w-1/2 rounded-full">
          <input
            type="search"
            className=" relative m-0 -me-0.5 block flex-auto rounded-tl-full rounded-bl-full bg-slate-200 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            id="exampleFormControlInput3"
            aria-describedby="button-addon3"
          />
          <button
            className="z-[2] inline-block rounded-tr-full rounded-br-full bg-[#4E7690] text-white rounded-e border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-primary-50/50 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950"
            data-twe-ripple-init
            data-twe-ripple-color="white"
            type="button"
            id="button-addon3"
          >
            Search
          </button>
        </div>
        <div className="flex-initial w-56">
          <div className="flex justify-center items-center">
            <div className="flex-initial pl-10 pr-8 text-[#4E7690]">
                <IoSettingsOutline />
            </div>
            <div className="flex-initial w-12">
              <img
                class="w-10 h-10 rounded-full"
                src={bhajan_lal}
                alt="Rounded avatar"
              ></img>
            </div>
            <div className="flex flex-col justify-center test-xs">
              <div className="text-xs text-[#4E7690]">chulbul Pandey</div>
              <div className="text-xs text-[#4E7690] font-bold">204389</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
