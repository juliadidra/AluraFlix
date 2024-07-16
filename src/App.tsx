import CourseCard, { CourseCardProps } from "./components/CourseCard";
import CourseType from "./components/CourseType";
import MaxWrapper from "./components/MaxWrapper";
import Menu from "./components/Menu";
import NewVideo from "./components/NewVideo";

const data: CourseCardProps[] = [
  {
    category: "front",
    image: "/front1.png",
    title: "Front 1",
    description: "",
    video: "https://www.youtube.com/watch?v=lYBUbBu4W08",
  },
  {
    category: "front",
    image: "/front2.png",
    title: "Front 2",
    description: "",
    video: "https://www.youtube.com/watch?v=lYBUbBu4W08",
  },
  {
    category: "front",
    image: "/front3.png",
    title: "Front 3",
    description: "",
    video: "https://www.youtube.com/watch?v=lYBUbBu4W08",
  },
  {
    category: "back",
    image: "/back1.png",
    title: "Back 1",
    description: "",
    video: "https://www.youtube.com/watch?v=lYBUbBu4W08",
  },
  {
    category: "back",
    image: "/back2.png",
    title: "Back 2",
    description: "",
    video: "https://www.youtube.com/watch?v=lYBUbBu4W08",
  },
  {
    category: "back",
    image: "/back3.png",
    title: "Back 3",
    description: "",
    video: "https://www.youtube.com/watch?v=lYBUbBu4W08",
  },
  {
    category: "mobile",
    image: "/mobile1.png",
    title: "Mobile 1",
    description: "",
    video: "https://www.youtube.com/watch?v=lYBUbBu4W08",
  },
  {
    category: "mobile",
    image: "/mobile2.png",
    title: "Mobile 2",
    description: "",
    video: "https://www.youtube.com/watch?v=lYBUbBu4W08",
  },
  {
    category: "mobile",
    image: "/mobile3.png",
    title: "Mobile 3",
    description: "",
    video: "https://www.youtube.com/watch?v=lYBUbBu4W08",
  },
];

const App = () => {
  const frontData = data.filter((d) => d.category === "front");
  const backData = data.filter((d) => d.category === "back");
  const mobileData = data.filter((d) => d.category === "mobile");

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

      <main className="w-full min-h-screen bg-custom-dark">
        <MaxWrapper>
          <div className="relative w-full min-h-[680px] flex flex-col xl:flex-row items-center justify-between gap-10 p-10">
            <div className="flex flex-col gap-8 z-10 text-white">
              <CourseType variant="front" />

              <h2 className="font-bold text-5xl">SEO com REACT</h2>

              <p>
                Eu to aqui pra nesse vídeo dizer que a gente vai aprender a
                começar uma app inspirada no desenho Pokémon com Nextjs e React,
                ver algumas dicas sobre performance e de quebra conhecer uma
                plataforma sensacional pra fazer deploy que é a Vercel. Tudo em
                22 minutos nesse vídeo feito com todo o carinho do mundo
                construindo uma "Pokedex"!{" "}
              </p>
            </div>

            <a href="/" className="w-full md:min-w-[635px] h-[335px] z-10">
              <img
                src="/player.png"
                alt="player"
                className="w-full h-full object-cover"
              />
            </a>

            <img
              src="/player.png"
              alt="player"
              className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
            />
          </div>

          <div className="w-full border-b-4 border-blue-500"></div>
        </MaxWrapper>

        <MaxWrapper className="px-7 py-20">
          <form action=""></form>
          <div className="flex flex-col gap-8">
            <CourseType variant="front" />
            <div className="flex items-center gap-4 overflow-x-auto pb-5">
              {frontData.map((data, key) => (
                <CourseCard
                  key={key}
                  category={data.category}
                  image={data.image}
                  title={data.title}
                  description={data.description}
                  video={data.video}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-16">
            <CourseType variant="back" />
            <div className="flex items-center gap-4 overflow-x-auto pb-5">
              {backData.map((data, key) => (
                <CourseCard
                  key={key}
                  category={data.category}
                  image={data.image}
                  title={data.title}
                  description={data.description}
                  video={data.video}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-16">
            <CourseType variant="mobile" />
            <div className="flex items-center gap-4 overflow-x-auto pb-5">
              {mobileData.map((data, key) => (
                <CourseCard
                  key={key}
                  category={data.category}
                  image={data.image}
                  title={data.title}
                  description={data.description}
                  video={data.video}
                />
              ))}
            </div>
          </div>
        </MaxWrapper>
      </main>

      <footer className="flex items-center justify-center h-[125px] bg-zinc-950 border-t-4 border-blue-500">
        <img src="/logo.png" alt="AluraFlix" width={169} height={40} />
      </footer>
    </>
  );
};

export default App;
