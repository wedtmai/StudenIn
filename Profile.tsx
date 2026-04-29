import { BadgeCheck, Edit3, Link2, Building2, MapPin, GraduationCap, Star, BookOpen } from "lucide-react";
import clsx from "clsx";
import pdf1 from "../../imports/1.jpeg";
import { Avatar } from "../components/Avatar";

export function Profile() {
  const skills = [
    { name: "React.js", endorsed: true },
    { name: "Node.js", endorsed: true },
    { name: "UI/UX Design", endorsed: false },
    { name: "Python", endorsed: true },
    { name: "Agile Methodology", endorsed: false },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Banner & Info */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Banner */}
        <div className="h-32 bg-[#00966D]" />
        
        <div className="px-6 sm:px-8 pb-6 relative">
          {/* Avatar Area */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end -mt-12 sm:-mt-16 mb-4 sm:mb-0 gap-4">
            <div className="flex items-end gap-4">
              <Avatar src={pdf1} size="w-24 h-24 sm:w-32 sm:h-32" />
              
              <div className="pb-2">
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Shahad Alotaibi
                  </h1>
                  <BadgeCheck className="w-6 h-6 text-[#00966D]" />
                </div>
                <p className="text-gray-600 font-medium">
                  Software Engineering (SWE) Undergraduate
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pb-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                <Edit3 className="w-4 h-4" />
                Edit Profile
              </button>
              <button className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-[#00966D] hover:bg-[#007F5B] transition-colors shadow-sm">
                <Link2 className="w-4 h-4" />
                Export to LinkedIn
              </button>
            </div>
          </div>

          {/* Details Row */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-gray-400" />
              <span>Prince Sattam bin Abdulaziz University (PSAU)</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-gray-400" />
              <span>Senior Year (Level 4)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span>Al Kharj, Saudi Arabia</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* About Me */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              Passionate SWE student with a strong interest in frontend development and user 
              experience design. Currently working on my capstone project focusing on accessible web 
              technologies. Looking for mentorship opportunities to transition effectively into the 
              software engineering industry.
            </p>
          </div>

          {/* Verified Skills */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-2">
              <BadgeCheck className="w-6 h-6 text-[#00966D]" />
              <h2 className="text-xl font-bold text-gray-900">Verified Skills</h2>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Skills with a checkmark have been officially endorsed by university faculty.
            </p>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={clsx(
                    "flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium",
                    skill.endorsed
                      ? "bg-green-50/50 border-green-200 text-green-800"
                      : "bg-gray-50 border-gray-200 text-gray-600"
                  )}
                >
                  {skill.name}
                  {skill.endorsed && <BadgeCheck className="w-4 h-4 text-[#00966D]" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Academic Stats */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Academic Stats</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 font-medium">GPA</span>
                  <span className="font-bold text-gray-900">3.8/4.0</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00966D] w-[95%] rounded-full" />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 font-medium">Credits Completed</span>
                  <span className="font-bold text-gray-900">110/120</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00966D] w-[90%] rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Find a Mentor CTA */}
          <div className="bg-[#00966D] rounded-2xl shadow-sm border border-[#007F5B] p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 opacity-10">
              <Star className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-yellow-300" />
                <h3 className="text-lg font-bold">Find a Mentor</h3>
              </div>
              <p className="text-green-50 text-sm mb-6">
                Connect with graduate students to guide you through your capstone and career journey.
              </p>
              <button className="w-full bg-white text-[#00966D] py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-50 transition-colors shadow-sm">
                Browse Mentors
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
