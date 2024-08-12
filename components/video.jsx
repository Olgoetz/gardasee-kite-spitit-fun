const Video = () => {
  return (
    <div className="w-full h-[500px] my-20">
      <iframe
        src="https://www.youtube-nocookie.com/embed/RxvQr9yy9jU?autoplay=1&controls=1&mute=1&loop=1&modestbranding=1&showinfo=0"
        title="Kite-Spirit-Fun Camp"
        frameBorder="0"
        className="w-full h-full aspect-video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
