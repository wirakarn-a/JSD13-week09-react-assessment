import React from 'react';

const Owner = () => {
  return (
    <div className="max-w-3xl mx-auto my-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-200">
      {/* แบนเนอร์หัวเรื่อง */}
      <div className="bg-gradient-to-r from-black via-neutral-900 to-neutral-800 h-36"></div>
      
      <div className="relative px-8 pb-8 text-center">
        {/* รูปโปรไฟล์ */}
        <div className="relative -top-16 inline-block">
          <img
            src="https://i.pinimg.com/1200x/16/48/2c/16482c6341fd050a746c96f18e47b7b6.jpg"
            alt="Owner Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-2xl object-cover mx-auto ring-2 ring-black"
          />
        </div>

        {/* ข้อมูลแนะนำตัว */}
        <div className="-mt-12">
          <h1 className="text-3xl font-black text-black tracking-tight">
            Wirakarn A.
          </h1>
          <p className="text-neutral-500 font-bold uppercase tracking-wider text-xs mt-1">
            GEN D - JSD13
          </p>

          <div className="mt-6 p-6 bg-neutral-50 rounded-xl text-center border border-neutral-200">
            <p className="text-neutral-700 leading-relaxed font-medium">
              Hi, I'm Aiai. I'm someone who loves trying new things and training to become a software developer.
            </p>
          </div>

          <div className="mt-6 flex justify-center text-left">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                <span className="text-xs text-neutral-700 font-bold uppercase block">Program</span>
                <span className="text-slate-800 font-semibold">Junior Software Developer (JSD)</span>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Owner;
