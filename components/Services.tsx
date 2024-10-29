import {
  LayoutTemplate,
  Monitor,
  Paintbrush,
  PanelsRightBottom,
} from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <div id="about">
      <section id="services">
        <div className="flex flex-col items-center justify-center gap-8 h-auto min-h-[90vh] p-4 md:p-8">
          <span className="text-4xl md:text-6xl font-bold">What I do</span>
          <span className="font-semibold text-lg md:text-xl mx-4 md:mx-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
              {/* Card 1 */}
              <div className="w-full col-span-1 lg:col-span-2 relative glass rounded-lg overflow-hidden md:py-5">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-purple-500 to-green-700 animate-gradient-xy opacity-30 md:block"></div>
                <div className="flex flex-row p-6">
                  <LayoutTemplate size={50} />
                  <div className="flex flex-col mx-4">
                    <h2 className="text-xl md:text-2xl font-bold">
                      lorem ipsum
                    </h2>
                    <p className="text-sm md:text-md mt-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eos ab autem asperiores excepturi doloribus? Praesentium?
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="w-full relative glass rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-purple-500 to-green-700 animate-gradient-xy opacity-30 md:block"></div>
                <div className="flex flex-row p-6">
                  <Monitor size={50} />
                  <div className="flex flex-col mx-4">
                    <h2 className="text-xl md:text-2xl font-bold">
                      lorem ipsum
                    </h2>
                    <p className="text-sm md:text-md mt-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eos ab autem asperiores excepturi doloribus? Praesentium?
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="w-full relative glass rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-purple-500 to-green-700 animate-gradient-xy opacity-30 md:block"></div>
                <div className="flex flex-row p-6">
                  <Paintbrush size={50} />
                  <div className="flex flex-col mx-4">
                    <h2 className="text-xl md:text-2xl font-bold">
                      lorem ipsum
                    </h2>
                    <p className="text-sm md:text-md mt-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eos ab autem asperiores excepturi doloribus? Praesentium?
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 4 */}
              <div className="w-full col-span-1 lg:col-span-2 relative glass rounded-lg overflow-hidden md:py-5">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-purple-500 to-green-700 animate-gradient-xy opacity-30 md:block"></div>
                <div className="flex flex-row p-6">
                  <PanelsRightBottom size={50} />
                  <div className="flex flex-col mx-4">
                    <h2 className="text-xl md:text-2xl font-bold">
                      lorem ipsum
                    </h2>
                    <p className="text-sm md:text-md mt-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eos ab autem asperiores excepturi doloribus? Praesentium?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Services;
