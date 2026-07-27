export default function BackgroundImg() {
  return (
    <section className="relative" aria-label="Swargadwari Dental Care Home video showcase">
      <video
        src="/second.mp4"
        autoPlay
        muted
        loop
        playsInline
        poster="/dentallogo.jpg"
        className="w-full h-[40vh] md:h-[55vh] object-cover"
      >
        Your browser does not support the video tag. Visit Swargadwari Dental Care Home in Birendranagar, Surkhet for expert dental care.
      </video>
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle 60px at top left, rgba(255,255,255,0.7) 0%, transparent 100%)," +
            "radial-gradient(circle 60px at top right, rgba(255,255,255,0.7) 0%, transparent 100%)," +
            "radial-gradient(circle 60px at bottom left, rgba(255,255,255,0.7) 0%, transparent 100%)," +
            "radial-gradient(circle 60px at bottom right, rgba(255,255,255,0.7) 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
