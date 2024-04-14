import Image from "next/image";
import affiliationImage from "../../../assets/Affiliation.png";

const Affiliation = () => {
  return (
    <div className="px-[100px] py-[60px] mt-[170px] bg-[#d9d9d9]">
      <Image
        width={1240}
        height={24}
        src={affiliationImage}
        alt="image"
        className="mx-auto"
      />
    </div>
  );
};

export default Affiliation;
