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
        <div className="flex flex-col items-center justify-center gap-8 h-[90vh]">
          <span className="text-7xl font-bold">What I do</span>
          <span className="font-semibold tex-2xl mx-20">
            <div className="grid grid-cols-8 gap-6 place-items-center card">
              <div className="w-full col-span-5 relative glass rounded-lg overflow-hidden py-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-purple-500 to-green-700 animate-gradient-xy opacity-30"></div>
                <div className="flex flex-row p-6">
                  <LayoutTemplate size={50} />
                  <div className="flex flex-col mx-4">
                    <h2 className="text-2xl font-bold">lorem ipsum</h2>
                    <p className="text-md mt-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eos ab autem asperiores excepturi doloribus? Praesentium?
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full col-span-3 relative glass rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-purple-500 to-green-700 animate-gradient-xy opacity-30"></div>
                <div className="flex flex-row p-6">
                  <Monitor size={50} />
                  <div className="flex flex-col mx-4">
                    <h2 className="text-2xl font-bold">lorem ipsum</h2>
                    <p className="text-md mt-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eos ab autem asperiores excepturi doloribus? Praesentium?
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full col-span-3 relative glass rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-purple-500 to-green-700 animate-gradient-xy opacity-30"></div>
                <div className="flex flex-row p-6">
                  <Paintbrush size={50} />
                  <div className="flex flex-col mx-4">
                    <h2 className="text-2xl font-bold">lorem ipsum</h2>
                    <p className="text-md mt-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eos ab autem asperiores excepturi doloribus? Praesentium?
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full col-span-5 relative glass rounded-lg overflow-hidden py-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-purple-500 to-green-700 animate-gradient-xy opacity-30"></div>
                <div className="flex flex-row p-6">
                  <PanelsRightBottom size={50} />
                  <div className="flex flex-col mx-4">
                    <h2 className="text-2xl font-bold">lorem ipsum</h2>
                    <p className="text-md mt-2">
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
