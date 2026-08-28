import Table from "../Table";

const Display = ({
  activeSection,
  members,
  handleDelete,
  handleCreate,
  handleUpdate,
  formData,
  setFormData,
}) => {
  return (
    <div className="w-full max-w-5xl mt-6 p-8 bg-white rounded-2xl shadow-xl border-t-8 border-black border-x border-b border-neutral-200">
      {!activeSection && (
        <div className="text-center py-12">
          <p className="text-2xl font-bold text-neutral-400 italic">
            {`Pick your own path`}
          </p>
        </div>
      )}
      {activeSection === "user" && (
        <div className="text-center">
          <h2 className="text-3xl font-black text-black uppercase tracking-wider mb-6">
            User Database
          </h2>
          <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 shadow-inner">
            <Table data={members} isAdmin={false} />
          </div>
        </div>
      )}
      {activeSection === "admin" && (
        <div className="text-center">
          <h2 className="text-3xl font-black text-black uppercase tracking-wider mb-8">
            Admin Control Panel
          </h2>
          <div className="mb-10 p-8 bg-black text-white rounded-xl border border-black shadow-xl text-left">
            <h3 className="text-xl font-black mb-6 text-white uppercase tracking-wider border-b border-neutral-800 pb-3">
              Create User
            </h3>
            <form onSubmit={handleCreate} className="flex flex-wrap gap-4 items-end">
              <div className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
                <label className="font-bold text-xs uppercase text-neutral-400 tracking-wider">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-neutral-900 border border-neutral-700 text-white p-2.5 rounded-lg focus:border-white focus:ring-1 focus:ring-white outline-none text-sm"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
                <label className="font-bold text-xs uppercase text-neutral-400 tracking-wider">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-neutral-900 border border-neutral-700 text-white p-2.5 rounded-lg focus:border-white focus:ring-1 focus:ring-white outline-none text-sm"
                  value={formData.lastname}
                  onChange={(e) =>
                    setFormData({ ...formData, lastname: e.target.value })
                  }
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5 flex-1 min-w-[200px]">
                <label className="font-bold text-xs uppercase text-neutral-400 tracking-wider">Position</label>
                <input
                  type="text"
                  placeholder="Position"
                  className="bg-neutral-900 border border-neutral-700 text-white p-2.5 rounded-lg focus:border-white focus:ring-1 focus:ring-white outline-none text-sm"
                  value={formData.position}
                  onChange={(e) =>
                    setFormData({ ...formData, position: e.target.value })
                  }
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-white text-black px-8 py-2.5 rounded-lg font-black hover:bg-neutral-200 shadow-md transition-all transform active:scale-95 text-sm uppercase tracking-wider h-[42px]"
              >
                Save
              </button>
            </form>
          </div>
          <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 shadow-inner">
            <Table data={members} isAdmin={true} onDelete={handleDelete} onUpdate={handleUpdate} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Display;