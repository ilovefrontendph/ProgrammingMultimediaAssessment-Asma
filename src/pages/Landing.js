import banner from "../assets/banner.jpg";

function Landing() {
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col justify-center px-[10px] md:px-a[50px] lg:px-[300px] pt-[40px]">
        <img src={banner} />
      </div>
    </div>
  );
}

export default Landing;
