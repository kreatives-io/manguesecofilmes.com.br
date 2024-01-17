const socials = ["instagram", "vimeo", "email"];

export default function FloatingSocials() {
  return (
    <div className="sticky mx-8 bottom-[50%] flex flex-col text-persian font-freight text-2xl">
      {socials.map((social: string, index: any) => (
        <span key={index}>{social}</span>
      ))}
    </div>
  );
}
