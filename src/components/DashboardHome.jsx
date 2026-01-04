import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import MyEnrollment from "./MyEnrollment";
import MyCourses from "./MyCourses";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const DashboardHome = () => {
  const { user } = use(AuthContext);

  // Mock Data for Charts
  const activityData = [
    { name: "Mon", hours: 2 },
    { name: "Tue", hours: 5 },
    { name: "Wed", hours: 3 },
    { name: "Thu", hours: 8 },
    { name: "Fri", hours: 6 },
    { name: "Sat", hours: 4 },
    { name: "Sun", hours: 1 },
  ];

  const completionData = [
    { name: "Completed", value: 400 },
    { name: "In Progress", value: 300 },
    { name: "Not Started", value: 200 },
  ];

  const COLORS = ["#6366f1", "#a855f7", "#e2e8f0"];

  return (
    <>
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 mb-8 text-primary-content shadow-lg">
        <h1 className="text-3xl font-bold">
          Welcome back, {user?.displayName || "Learner"}! 👋
        </h1>
        <p className="mt-2 opacity-90 max-w-xl">
          You've completed 65% of your weekly goal. Keep up the great work!
        </p>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Weekly Activity Bar Chart */}
        <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-300">
          <h3 className="font-bold text-lg mb-4">Learning Hours (Weekly)</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#e2e8f0"
                />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip
                  cursor={{ fill: "transparent" }}
                  contentStyle={{
                    borderRadius: "10px",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Bar dataKey="hours" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Course Status Pie Chart */}
        <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-300">
          <h3 className="font-bold text-lg mb-4">Course Completion Status</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={completionData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {completionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  iconType="circle"
                  layout="vertical"
                  align="right"
                  verticalAlign="middle"
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <MyEnrollment />
      <div className="mt-8">
        <MyCourses />
      </div>
    </>
  );
};

export default DashboardHome;
