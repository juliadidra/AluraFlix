import { Pen, X } from "lucide-react";
import { useState } from "react";
import MaxWrapper from "../MaxWrapper";
import Input from "../Input";
import TextArea from "../TextArea";
import Dropdown from "../Dropdown";
import { CourseCardProps } from ".";

const Edit = ({
  category,
  description,
  image,
  title,
  video,
}: CourseCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-3 text-zinc-300"
      >
        <Pen />
        EDITAR
      </button>

      {isOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-custom-dark-blue/60 z-40"
            onClick={() => setIsOpen(false)}
          ></div>

          <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[80%] xl:w-[800px] bg-custom-dark-blue border-4 border-blue-400 rounded-xl flex flex-col gap-4 p-6 pb-20 z-50">
            <button
              className="p-0.5 rounded-full border-4 max-w-fit border-white text-white ml-auto"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </button>

            <h1 className="text-blue-700 text-4xl font-bold text-center">
              EDITAR CARD:
            </h1>

            <MaxWrapper className="max-w-[500px] text-white flex flex-col gap-4">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="titulo" className="font-semibold text-md">
                  Título
                </label>
                <Input id="titulo" defaultValue={title} />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="font-semibold text-md">Categoria</label>
                <Dropdown
                  defaultSelected={category}
                  options={["Front End", "Back End", "Mobile"]}
                  buttonClassName="h-[60px] border-blue-800 bg-custom-dark-blue border-2"
                  dropdownClassName="border-blue-800 bg-custom-dark-blue border-2"
                  optionClassName="hover:bg-blue-950"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="imagem" className="font-semibold text-md">
                  Imagem
                </label>
                <Input id="imagem" defaultValue={image} />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="video" className="font-semibold text-md">
                  Video
                </label>
                <Input id="video" defaultValue={video} />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="descricao" className="font-semibold text-md">
                  Descrição
                </label>
                <TextArea rows={10} id="descricao" defaultValue={description} />
              </div>

              <div className="flex items-center justify-between">
                <a href="/" className="border-2 flex items-center justify-center border-blue-600 w-[180px] h-[54px] rounded-xl text-blue-500">
                  GUARDAR
                </a>
                <button className="text-zinc-300 border-2 border-zinc-300 w-[180px] h-[54px] rounded-xl">
                  LIMPAR
                </button>
              </div>
            </MaxWrapper>
          </div>
        </>
      )}
    </>
  );
};

export default Edit;
