import Edit from "./Edit";
import { Trash2 } from "lucide-react";

export interface CourseCardProps {
  category: "back" | "front" | "mobile";
  image: string;
  title: string;
  video: string;
  description: string;
}

const CourseCard = ({
  description,
  category,
  image,
  title,
  video,
}: CourseCardProps) => {
  const props = {
    description,
    category,
    image,
    title,
    video,
  };

  return (
    <div
      data-category={category}
      className="min-w-[320px] max-w-[320px] md:min-w-[432px] md:max-w-[432px] h-[320px] flex flex-col rounded-xl border-4 data-[category=front]:border-blue-400 data-[category=back]:border-green-500 data-[category=mobile]:border-yellow-400"
    >
      <a target="_blank" href={video} className="flex h-[260px]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </a>

      <div className="flex-1 flex items-center justify-around">
        <a href="/" className="flex items-center gap-3 text-zinc-300">
          <Trash2 />
          DELETAR
        </a>
        <Edit {...props} />
      </div>
    </div>
  );
};

export default CourseCard;
