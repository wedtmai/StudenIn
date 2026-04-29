import { Search, Filter, GraduationCap, Building2, CheckCircle2, XCircle, Clock } from "lucide-react";
import clsx from "clsx";
import pdf1 from "../../imports/1.jpeg";
import { Avatar } from "../components/Avatar";

export function Mentorship() {
  const mentors = [
    {
      name: "Nora Alqahtani",
      university: "King Saud University (KSU)",
      title: "Ph.D. Candidate, AI Research",
      status: "Available",
      expertise: ["Machine Learning", "Python", "Data Science"],
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Reem Alshammari",
      university: "Princess Nourah Bint Abdulrahman University",
      title: "Master's Student, Software Eng",
      status: "Busy",
      expertise: ["React", "System Design", "Agile"],
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Sara Alghamdi",
      university: "King Abdulaziz University (KAU)",
      title: "Software Engineer @ TechCorp",
      status: "Available",
      expertise: ["Frontend", "UI/UX", "JavaScript"],
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Mentorship Bridge</h1>
        <p className="text-gray-600">
          Connect with experienced graduate peers for guidance.
        </p>
      </div>

      {/* Incoming Requests Alert */}
      <div className="bg-green-50 rounded-2xl p-6 border border-green-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-full text-green-700">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-gray-900">Incoming Mentorship Requests</h2>
              <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-0.5 rounded-full">
                1 New
              </span>
            </div>
          </div>
        </div>
        
        {/* Request Card */}
        <div className="w-full md:w-auto bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between gap-6 flex-1">
          <div className="flex items-center gap-3">
            <Avatar src={pdf1} size="w-12 h-12" />
            <div>
              <h3 className="font-bold text-gray-900">Shahad Alotaibi</h3>
              <p className="text-sm text-gray-500 line-clamp-1">
                Topic: Guidance on Frontend Architecture for Capstone
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Sent 2 days ago</p>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-lg text-sm font-medium hover:bg-green-100 transition-colors">
              <CheckCircle2 className="w-4 h-4" />
              Accept
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-700 border border-red-200 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors">
              <XCircle className="w-4 h-4" />
              Decline
            </button>
          </div>
        </div>
      </div>

      {/* Find a Mentor Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Find a Mentor</h2>
        
        {/* Search Bar */}
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, skill, or department..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00966D] focus:border-transparent transition-all text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm text-gray-700 font-medium hover:bg-gray-50 transition-colors">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>

        {/* Mentor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full hover:border-[#00966D] transition-colors group"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-4">
                  <Avatar src={mentor.avatar} size="w-16 h-16" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#00966D] transition-colors">
                      {mentor.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span className="truncate">{mentor.university}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-0.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>{mentor.title}</span>
                    </div>
                  </div>
                </div>
                
                <span
                  className={clsx(
                    "text-xs px-2.5 py-1 rounded-md font-medium shrink-0",
                    mentor.status === "Available"
                      ? "bg-green-50 text-green-700 border border-green-100"
                      : "bg-gray-100 text-gray-600 border border-gray-200"
                  )}
                >
                  {mentor.status}
                </span>
              </div>

              {/* Expertise Tags */}
              <div className="mb-6 flex-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                  Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((exp, j) => (
                    <span
                      key={j}
                      className="text-xs bg-gray-50 text-gray-600 px-3 py-1 rounded-md border border-gray-100"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                disabled={mentor.status !== "Available"}
                className={clsx(
                  "w-full py-3 rounded-xl text-sm font-bold transition-all shadow-sm",
                  mentor.status === "Available"
                    ? "bg-[#00966D] text-white hover:bg-[#007F5B]"
                    : "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
                )}
              >
                {mentor.status === "Available" ? "Request Mentorship >" : "Request Mentorship"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
