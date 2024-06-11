import ArticlePreviewer from "./_components/ArticlePreviewer";
import Container from "./_components/Container";
import Section from "./_components/Section";
import getPostMetadata from "./_components/getPostMetadata";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <ArticlePreviewer key={post.slug} {...post} />
  ));
  return (
    <main className="flex flex-col items-center justify-between">
      <Container>
        <div className="flex w-full h-screen bg-sketch items-center justify-center">
          <div className="lg:flex lg:w-1/2 px-6">
            <div className="flex flex-col space-y-5">
              <p className="text-3xl lg:text-6xl">Hi, I am Domuki</p>
              <p className="text-justify">
                I am a 24-year-old male with a passion for music and writing. I
                am fluent in English and native in Chinese. I graduated from UPM
                with a Bachelor's degree in Software Engineering and am
                currently pursuing a Master's degree at PolyU.
              </p>
              <p className="lg:text-lg">
                <span>My email is </span>
                <span className="underline">DOMUKINO@GMAIL.COM</span>
                <span>, and feel free to contact with me.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex w-full items-start justify-around px-6 lg:px-12 mt-32">
          <div className="flex lg:w-1/4 p-6 items-center justify-center">
            <div className="flex flex-col space-y-5">
              <span className="font-bold text-xl text-center">
                Software Engineer
              </span>
              <span className="text-justify text-gray-800">
                I hold a Bachelor's degree in Software Engineering. I frequently
                worked with frameworks like Flutter for mobile development and
                Next.js for web development.
              </span>
            </div>
          </div>
          <div className="flex lg:w-1/4 p-6 items-center justify-center">
            <div className="flex flex-col space-y-5">
              <span className="font-bold text-xl text-center">
                English Assistant
              </span>
              <span className="text-justify text-gray-800">
                I have achieved an IELTS band score of 7 and have experience as
                an English teaching assistant.
              </span>
            </div>
          </div>
          <div className="flex lg:w-1/4 p-6 items-center justify-center">
            <div className="flex flex-col space-y-5">
              <span className="font-bold text-xl text-center">
                Music Composer
              </span>
              <span className="text-justify text-gray-800">
                Composing music is my favorite hobby, which I've continued to
                pursue for over 5 years, accumulating more than 472,000 listens.
              </span>
            </div>
          </div>
          <div className="flex lg:w-1/4 p-6 items-center justify-center">
            <div className="flex flex-col space-y-5">
              <span className="font-bold text-xl text-center">Student</span>
              <span className="text-justify text-gray-800">
                Being a student will always be my identity throughout my life. I
                have a constant desire to learn new things, expand my knowledge,
                and enhance my perspectives.
              </span>
            </div>
          </div>
        </div>
        {/* divider */}
        <div className="lg:flex px-6 lg:px-12 my-32">
          <div className="w-full h-px bg-black"></div>
        </div>
        <div className="lg:flex px-6 lg:px-12 mt-20">
          <div className="flex flex-col lg:flex-1 items-center justify-center m-10 hover:bg-gray-200">
            <span className="text-6xl">Posts</span>
            <span className="text-center mt-2 italic">
              There will be some notes about my ideas.
            </span>
          </div>
          <div className="flex lg:flex-1">
            <div className="flex flex-col w-full">{postPreviews}</div>
          </div>
        </div>
        <div className="flex p-12 lg:p-32 mt-32 bg-black text-white justify-center items-center ">
          <div className="flex flex-col lg:w-2/3 text-center">
            <span className="text-xl lg:text-3xl italic">
              You are too concerned about what was and what will be. There is a
              saying: yesterday is history, tomorrow is a mystery, but today is
              a gift. That is why it is called the present.
            </span>
            <span className="mt-10 text-sm lg:text-lg">
              Kung Fu Panda (2008) - Randall Duk Kim as Oogway
            </span>
          </div>
        </div>
      </Container>
    </main>
  );
}
