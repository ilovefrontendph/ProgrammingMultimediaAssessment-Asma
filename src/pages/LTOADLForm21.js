import APLForm from "../assets/APL-Form.pdf";

function LTOADLForm21() {
  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col justify-center px-[10px] md:px-a[50px] lg:px-[300px] pt-[40px]">
        <iframe src={APLForm} height="800"></iframe>
      </div>
    </div>
  );
}

export default LTOADLForm21;
