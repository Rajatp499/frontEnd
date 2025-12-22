import type React from "react";

interface imageContainerProps{
    image: string;
    name: string;
    position:string;
    imagePosition?:'left' | 'right';
}
const imageContainer: React.FC<imageContainerProps> = ({image,name,position,imagePosition }) => {
  return (
<div className="w-full">
                  <div className="relative group">
                    {/* Decorative background */}
                    <div className={`absolute inset-0 bg-linear-to-br from-primary to-primaryDark rounded-2xl transform ${imagePosition === 'left' ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'
                      } group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300`}></div>

                    {/* Image container */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={image}
                        alt={name}
                        className="w-full h-100 sm:h-100 object-cover"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

                      {/* Info overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-1">
                          {name}
                        </h3>
                        <p className="text-primaryDark text-lg font-bold">
                          {position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
  )
}

export default imageContainer