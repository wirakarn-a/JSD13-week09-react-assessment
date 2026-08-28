import React, { useState } from 'react';

const Table = ({ data, isAdmin, onDelete, onUpdate }) => {

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', lastname: '', position: '' });

  const handleStartEdit = (member) => {
    setEditingId(member.id);
    setEditForm({ name: member.name, lastname: member.lastname, position: member.position });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditForm({ name: '', lastname: '', position: '' });
  };

  const handleSaveEdit = (id) => {
    if (!editForm.name || !editForm.lastname || !editForm.position) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่องก่อนบันทึก!");
      return;
    }
    onUpdate(id, editForm);
    setEditingId(null);
  };

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-neutral-200">
        <p className="text-neutral-400 font-medium">ยังไม่มีข้อมูลสมาชิกในระบบ</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-neutral-300">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-black text-white text-xs uppercase tracking-wider font-bold">
            <th className="py-4 px-6">Name</th>
            <th className="py-4 px-6">Last Name</th>
            <th className="py-4 px-6">Position</th>
            {isAdmin && <th className="py-4 px-6 text-center">Action</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 text-neutral-800 text-sm font-medium">
          {data.map((member) => {
            const isEditing = editingId === member.id;

            return (
              <tr key={member.id} className="hover:bg-neutral-100/80 transition-colors">
                {/* ช่อง Name */}
                <td className="py-4 px-6 font-semibold text-black">
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      className="px-3 py-1.5 border border-black rounded focus:ring-2 focus:ring-black outline-none text-sm w-full bg-white text-black"
                    />
                  ) : (
                    member.name
                  )}
                </td>

                {/* ช่อง Last Name */}
                <td className="py-4 px-6">
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.lastname}
                      onChange={(e) => setEditForm({ ...editForm, lastname: e.target.value })}
                      className="px-3 py-1.5 border border-black rounded focus:ring-2 focus:ring-black outline-none text-sm w-full bg-white text-black"
                    />
                  ) : (
                    member.lastname
                  )}
                </td>

                {/* ช่อง Position */}
                <td className="py-4 px-6">
                  {isEditing ? (
                    <input
                      type="text"
                      value={editForm.position}
                      onChange={(e) => setEditForm({ ...editForm, position: e.target.value })}
                      className="px-3 py-1.5 border border-black rounded focus:ring-2 focus:ring-black outline-none text-sm w-full bg-white text-black"
                    />
                  ) : (
                    <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-900 text-xs font-bold rounded-full border border-neutral-300 uppercase tracking-wide">
                      {member.position}
                    </span>
                  )}
                </td>

                {/* ปุ่มจัดการในโหมด Admin */}
                {isAdmin && (
                  <td className="py-4 px-6 text-center">
                    {isEditing ? (
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => handleSaveEdit(member.id)}
                          className="px-3.5 py-1.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold rounded-lg shadow-sm uppercase tracking-wider transition-all"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="px-3.5 py-1.5 bg-neutral-200 hover:bg-neutral-300 text-black text-xs font-bold rounded-lg border border-neutral-300 uppercase tracking-wider transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => handleStartEdit(member)}
                          className="px-3.5 py-1.5 bg-black hover:bg-neutral-800 text-white text-xs font-bold rounded-lg shadow-sm active:scale-95 transition-all uppercase tracking-wider"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => onDelete(member.id)}
                          className="px-3.5 py-1.5 bg-white text-black border border-black hover:bg-black hover:text-white text-xs font-bold rounded-lg shadow-sm active:scale-95 transition-all uppercase tracking-wider"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;