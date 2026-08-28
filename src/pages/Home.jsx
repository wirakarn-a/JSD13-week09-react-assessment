import React, { useState, useEffect } from 'react';
import Header from '../components/home/Header';
import NavButtons from '../components/home/NavButton';
import Display from '../components/home/Display';

const API_URL = "https://67eca027aa794fb3222e43e2.mockapi.io/members";

const Home = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({ name: '', lastname: '', position: '' });

  // 1. READ: ดึงข้อมูลจาก API (GET)
  const fetchMembers = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Fetch error");
      const data = await res.json();
      setMembers(data);
    } catch (err) {
      console.error("Error fetching members:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  // 2. CREATE: เพิ่มสมาชิกใหม่ (POST)
  const handleAddMember = async (newMember) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMember),
      });
      if (res.ok) {
        const addedData = await res.json();
        setMembers((prev) => [...prev, addedData]); // อัปเดต UI ทันทีไม่ต้องโหลดใหม่
      }
    } catch (err) {
      console.error("Error adding member:", err);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.lastname || !formData.position) return;
    await handleAddMember(formData);
    setFormData({ name: '', lastname: '', position: '' });
  };

  // 3. UPDATE: แก้ไขข้อมูลสมาชิก (PUT)
  const handleUpdateMember = async (id, updatedMember) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedMember),
      });
      if (res.ok) {
        const updatedData = await res.json();
        setMembers((prev) =>
          prev.map((m) => (m.id === id ? updatedData : m))
        ); // อัปเดตข้อมูลแถวนั้นใน UI ทันที
      }
    } catch (err) {
      console.error("Error updating member:", err);
    }
  };

  // 4. DELETE: ลบสมาชิก (DELETE)
  const handleDeleteMember = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setMembers((prev) => prev.filter((m) => m.id !== id)); // เอาไอเทมนั้นออกจาก UI ทันที
      }
    } catch (err) {
      console.error("Error deleting member:", err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Header sector={activeSection} />
      <NavButtons
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      {isLoading ? (
        <div className="text-center py-12">
          <div className="inline-block w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-2 text-xs font-bold text-neutral-500 uppercase tracking-wider">กำลังเชื่อมต่อฐานข้อมูล...</p>
        </div>
      ) : (
        <Display
          activeSection={activeSection}
          members={members}
          handleCreate={handleCreate}
          handleDelete={handleDeleteMember}
          handleUpdate={handleUpdateMember}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
};

export default Home;