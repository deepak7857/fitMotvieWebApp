import React from 'react';

function Page() {
  const videos = [
    { src: '/video_1.mp4', caption: 'Short 1' },
    { src: '/video_2.mp4', caption: 'Short 1' }, // Updated caption
    { src: '/video_3.mp4', caption: 'Short 1' },
     { src: '/video_4.mp4', caption: 'Short 2' },
     { src: '/video_5.mp4', caption: 'Short 3' },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black overflow-y-scroll">
      {videos.map((video, index) => {
        return ( // Explicit return is required here
          <div key={index} className="relative w-full h-screen"> 
            <video
              className="w-full h-full object-contain"
              controls // Uncommented controls
              preload="auto"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src={video.src} type="video/mp4" />
              <track
                src="/path/to/captions.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>

            {/* Caption Overlay */}
            <div className="absolute bottom-10 left-0 w-full text-center text-white text-xl font-bold">
              {video.caption}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Page;