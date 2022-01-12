import banner from "../assets/banner.jpg";

function Stack() {
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col justify-center text-center px-[10px] md:px-a[50px] lg:px-[300px] pt-[40px]">
        <label>Website Design (TailwindCSS)</label>
        <label>Web Programming (Reactjs, npm)</label>
        <label>Database (Nosql Firebase)</label>
        {/* <img src={banner} /> */}
      </div>
    </div>
  );
}

export default Stack;
