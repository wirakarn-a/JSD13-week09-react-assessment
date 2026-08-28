import React from 'react';

const Owner = () => {
  return (
    <div className="max-w-3xl mx-auto my-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
      {/* แบนเนอร์หัวเรื่อง */}
      <div className="bg-gradient-to-r from-emerald-500 to-sky-600 h-32"></div>
      
      <div className="relative px-8 pb-8 text-center">
        {/* รูปโปรไฟล์ */}
        <div className="relative -top-16 inline-block">
          <img
            src="https://i.pinimg.com/1200x/16/48/2c/16482c6341fd050a746c96f18e47b7b6.jpg"
            alt="Owner Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover mx-auto"
          />
        </div>

        {/* ข้อมูลแนะนำตัว */}
        <div className="-mt-12">
          <h1 className="text-3xl font-bold text-slate-800">
            Wirakarn A.
          </h1>
          <p className="text-amber-600 font-semibold mt-1">
            GEN D - JSD13
          </p>

          <div className="mt-6 p-6 bg-slate-50 rounded-xl text-left border border-slate-200/60">
            <p className="text-slate-600 leading-relaxed">
              Hi, I'm Aiai. I'm someone who loves trying new things and training to become a software developer.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-left">
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
              <span className="text-xs text-amber-700 font-bold uppercase block">Program</span>
              <span className="text-slate-800 font-semibold">Junior Software Developer (JSD)</span>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <span className="text-xs text-orange-700 font-bold uppercase block">Personal Theme</span>
              <span className="text-slate-800 font-semibold">Creativity & Growth</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
