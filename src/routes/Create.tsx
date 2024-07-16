import { FormEvent, useRef, useState } from "react";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import MaxWrapper from "../components/MaxWrapper";
import Menu from "../components/Menu";
import NewVideo from "../components/NewVideo";
import TextArea from "../components/TextArea";

const Create = () => {
  const [category, setCategory] = useState<string | null>(null);

  const titleRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  
  async function handleAction(form: FormEvent) {
    form.preventDefault();
    
    console.log("🚀 ~ Create ~ titleRef:", titleRef.current?.value)
    console.log("🚀 ~ Create ~ imageRef:", imageRef.current?.value)
    console.log("🚀 ~ Create ~ videoRef:", videoRef.current?.value)
    console.log("🚀 ~ Create ~ descriptionRef:", descriptionRef.current?.value)
    console.log("🚀 ~ Create ~ category:", category)
  }

  return (
    <>
      <header className="px-14 h-32 flex items-center bg-custom-dark-gray border-b-4 border-blue-500">
        <div className="max-w-[1440px] flex items-center justify-between mx-auto w-full">
          <a href="/">
            <img src="/logo.png" alt="AluraFlix" width={169} height={40} />
          </a>
          <div className="hidden md:flex items-center gap-4">
            <button className="border-2 flex items-center justify-center border-blue-600 w-[180px] h-[54px] rounded-xl">
              <a
                href="/"
                className="text-blue-600 h-full w-full flex items-center justify-center"
              >
                HOME
              </a>
            </button>
            <NewVideo />
          </div>

          <Menu />
        </div>
      </header>

      <main className="w-full min-h-screen bg-custom-dark pb-20 pt-8">
        <h1 className="text-white font-bold text-5xl py-8 text-center">
          NOVO VÍDEO
        </h1>
        <p className="text-white uppercase text-center">
          Complete o formulário para criar um novo card de vídeo.
        </p>

        <MaxWrapper className="px-7 flex flex-col gap-5">
          <h3 className="text-white font-semibold text-3xl py-5 border-y border-custom-dark-gray my-14">
            Criar Card
          </h3>

          <form onSubmit={handleAction}>
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="titulo"
                  className="font-semibold text-md text-zinc-300"
                >
                  Título
                </label>
                <Input
                  id="titulo"
                  ref={titleRef}
                  className="border-custom-dark-gray bg-custom-dark text-zinc-300"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="font-semibold text-md text-zinc-300">
                  Categoria
                </label>
                <Dropdown
                onSelect={value => setCategory(value)}
                  options={["Front End", "Back End", "Mobile"]}
                  buttonClassName="h-[60px] border-2"
                  rootClassName="h-[60px]"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="image"
                  className="font-semibold text-md text-zinc-300"
                >
                  Imagem
                </label>
                <Input
                  id="image"
                  ref={imageRef}
                  className="border-custom-dark-gray bg-custom-dark text-zinc-300"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="video"
                  className="font-semibold text-md text-zinc-300"
                >
                  Vídeo
                </label>
                <Input
                  id="video"
                  ref={videoRef}
                  className="border-custom-dark-gray bg-custom-dark text-zinc-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="description"
                className="font-semibold text-md text-zinc-300"
              >
                Descrição
              </label>
              <TextArea
                id="description"
                ref={descriptionRef}
                className="h-56 border-custom-dark-gray bg-custom-dark text-white"
              />
            </div>

            <div className="flex items-center gap-10 mt-10">
              <button
                type="submit"
                className="border-2 flex items-center justify-center border-blue-600 w-[180px] h-[54px] rounded-xl text-blue-500"
              >
                GUARDAR
              </button>
              <button
                type="button"
                className="text-zinc-300 border-2 border-zinc-300 w-[180px] h-[54px] rounded-xl"
              >
                LIMPAR
              </button>
            </div>
          </form>
        </MaxWrapper>
      </main>

      <footer className="flex items-center justify-center h-[125px] bg-zinc-950 border-t-4 border-blue-500">
        <img src="/logo.png" alt="AluraFlix" width={169} height={40} />
      </footer>
    </>
  );
};

export default Create;
