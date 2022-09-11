import React from "react";
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function Content() {
  const renderPosts = nums.map((num) => (
    <div key={num} className="w-full md:w-1/4 h-56 p-2 mb-4">
      <div className="rounded shadow-sm bg-slate-100 p-2 h-full">
        <p className="font-semibold text-lg text-center">عنوان تستی</p>
        <p className="text-justify text-sm mt-4">
          متن تستی متن است متن تستی متن است متن تستی متن است متن تستی متن است
          متن تستی متن است متن تستی متن است متن تستی متن است متن تستی متن است
          متن تستی متن است متن تستی متن است متن تستی متن است متن تستی متن است
        </p>
      </div>
    </div>
  ));
  return (
    <div>
      <h3 className="text-lg font-vazir mb-5 font-semibold dark:text-gray-200">
        لیست داستان ها
      </h3>
      <div className="flex justify-start flex-wrap">{renderPosts}</div>
    </div>
  );
}
