interface CourseTypeProps {
  variant: "back" | "front" | "mobile";
}

const CourseType = ({ variant }: CourseTypeProps) => {
  return (
    <div
      data-variant={variant}
      className="w-72 md:w-[432px] h-[70px] data-[variant=back]:bg-green-500 data-[variant=front]:bg-blue-400 data-[variant=mobile]:bg-yellow-400 rounded-2xl flex items-center justify-center text-white font-bold text-3xl"
    >
      {variant === "back"
        ? "BACK END"
        : variant === "front"
        ? "FRONT END"
        : "MOBILE"}
    </div>
  );
};

export default CourseType;
