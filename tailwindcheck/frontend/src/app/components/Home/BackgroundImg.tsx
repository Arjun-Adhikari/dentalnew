export default function BackgroundImg() {
  return (
    <section className="relative">
      <video
        src="/second.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[40vh] md:h-[55vh] object-cover"
      />
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
