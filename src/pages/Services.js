import animated_video from "../assets/animated_graphics.mp4";

function Services() {
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col justify-center px-[10px] md:px-a[50px] lg:px-[300px] pt-[40px]">
        {/* width="320" height="240" */}
        <video controls>
          <source src={animated_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Services;
