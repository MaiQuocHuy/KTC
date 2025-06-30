import {
  FaEnvelope,
  FaPhone,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
  FaMapMarkerAlt,
  FaAlignJustify,
} from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        <div className="grid grid-cols-3">
          {/* Left Sidebar */}
          {/* <div className="w-1/3 bg-[#E8EAEE] p-8"> */}
          <div className="col-span-1 bg-[#E8EAEE] p-8 flex flex-col">
            {/* Introduction Section */}
            <div className="mb-[36px]">
              <h1 className="text-3xl font-medium text-[#5C6168] mb-2 tracking-widest">
                Robyn Kingsley
              </h1>
              <div className="flex flex-row text-sm text-gray-600 items-start">
                <FaAlignJustify className="mt-1 mr-2" />
                <div>
                  <p className="font-normal text-[#5C6168]">UX/UI DESIGNER</p>
                  <p className="font-normal text-[#5C6168]">PRODUCT DESIGNER</p>
                  <p className="font-normal text-[#5C6168]">UX RESEARCHER</p>
                </div>
              </div>
              <div className="flex justify-start mt-3 text-sm text-gray-600">
                <FaMapMarkerAlt className="mt-1 mr-2" />
                <span className="font-normal text-[#5C6168]">
                  Berlin, Germany
                </span>
              </div>
            </div>
            {/* Education Section */}
            <div className="mb-8">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-[#5C6168] uppercase tracking-[.25em] mb-2">
                  Education
                </h2>
                <div className="w-10 h-0.5 bg-[#5C6168]"></div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-sm text-[#5C6168]">
                    Course
                  </h3>
                  <p className="text-sm text-gray-600">University</p>
                  <p className="text-sm text-gray-500">2016 - 2018</p>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Risus commodo viverra maecenas accumsan lacus.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-sm text-[#5C6168]">
                    Course
                  </h3>
                  <p className="text-sm text-gray-600">University</p>
                  <p className="text-sm text-gray-500">2020 - 2014</p>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Risus commodo viverra maecenas accumsan lacus.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <div className="mb-4">
                <h2 className="text-xl font-bold text-[#5C6168] uppercase tracking-[.25em] mb-2">
                  Skills
                </h2>
                <div className="w-10 h-0.5 bg-[#5C6168]"></div>
              </div>

              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  User experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  User interface
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  App design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  Adaptive web design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  Product design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  Design system
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  CSS
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  AB testing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                  User research
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-span-2 p-8 flex flex-col">
            {/* Profile Section */}
            <div className="text-left flex flex-row items-center mb-8">
              <div className="pr-6">
                <div className="w-44 h-44 rounded-full overflow-hidden bg-gray-300">
                  <img
                    src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Contact Information */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center">
                  <FaEnvelope className="w-4 h-4 mr-3 text-gray-600" />
                  <span className="text-gray-700">
                    hi.robyn.kingsley@mail.com
                  </span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="w-4 h-4 mr-3 text-gray-600" />
                  <span className="text-gray-700">+88 533 000 250</span>
                </div>
                <div className="flex items-center">
                  <FaLinkedinIn className="w-4 h-4 mr-3 text-gray-600" />
                  <span className="text-gray-700">
                    www.linkedin.com/in/robynkingsley
                  </span>
                </div>
                <div className="flex items-center">
                  <FaBehance className="w-4 h-4 mr-3 text-gray-600" />
                  <span className="text-gray-700">
                    www.behance.net/robynkingsley
                  </span>
                </div>
                <div className="flex items-center">
                  <FaDribbble className="w-4 h-4 mr-3 text-gray-600" />
                  <span className="text-gray-700">
                    dribbble.com/robyn_kingsley
                  </span>
                </div>
              </div>
            </div>
            {/* Profile Section */}
            <div className="mb-8">
              <div>
                <h2 className="text-xl font-bold text-[#5C6168] uppercase tracking-[.25em] mb-2">
                  Profile
                </h2>
              </div>
              <div className="w-10 h-0.5 bg-[#5C6168] mb-4"></div>

              <p className="text-sm text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Risus commodo viverra maecenas accumsan lacus. Sed lectus
                vestibulum mattis ullamcorper velit sed ullamcorper.
              </p>
            </div>

            {/* Experience Section */}
            <div>
              <div>
                <h2 className="text-xl font-bold text-[#5C6168] uppercase tracking-[.25em] mb-2">
                  Experience
                </h2>
              </div>
              <div className="w-10 h-0.5 bg-[#5C6168] mb-4"></div>

              <div className="space-y-8">
                {/* Job 1 */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Job position
                      </h3>
                      <p className="text-sm text-gray-600">Company, Country</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      2021 - present
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Risus commodo viverra maecenas accumsan lacus. Sed
                    lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                    Purus et faucibus pulvinar elementum. Eget aliquet nibh
                    praesent tristique magna sit.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 mt-2"></span>
                      Unique experience highlight
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 mt-2"></span>
                      Unique experience highlight
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 mt-2"></span>
                      Unique experience highlight
                    </li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Job position
                      </h3>
                      <p className="text-sm text-gray-600">Company, Country</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      2021 - present
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Risus commodo viverra maecenas accumsan lacus. Sed
                    lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                    Purus et faucibus pulvinar elementum. Eget aliquet nibh
                    praesent tristique magna sit.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 mt-2"></span>
                      Unique experience highlight
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 mt-2"></span>
                      Unique experience highlight
                    </li>
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 mt-2"></span>
                      Unique experience highlight
                    </li>
                  </ul>
                </div>

                {/* Job 3 */}
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Job position
                      </h3>
                      <p className="text-sm text-gray-600">Company, Country</p>
                    </div>
                    <span className="text-sm text-gray-500">
                      2021 - present
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Risus commodo viverra maecenas accumsan lacus. Sed
                    lectus vestibulum mattis ullamcorper velit sed ullamcorper.
                    Purus et faucibus pulvinar elementum. Eget aliquet nibh
                    praesent tristique magna sit.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 mt-2"></span>
                      Unique experience highlight
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
