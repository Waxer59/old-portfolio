const About: React.FC = () => {
  return (
    <div
      className="w-full h-auto py-[4rem] pb-[50px] bg-secondaryColor"
      id="about">
      <h2 className="mt-[-30px] text-[3rem] font-normal text-center">About</h2>
      <p className="overflow-hidden text-[1.3rem] text-center leading-[2rem] p-[1.5rem] max-w-[900px] mx-auto">
        Hi!!, my name is <strong>Hugo</strong> but you can call me{' '}
        <strong>Wadev</strong>, I have been programming since I was fourteen
        years old, I started with C++ and from there I went on to study java,
        after learning java I started to study web development until now{' '}
        <strong>:)</strong>
      </p>
    </div>
  )
}

export default About
