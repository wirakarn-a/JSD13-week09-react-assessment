# Explain how and why you divided the app’s UI into components

เพราะว่าถ้าเขียนทุกอย่างไว้ในไฟล์เดียว โค้ดจะยาวและทำให้อ่านยาก พอจะแก้อะไรก็ต้องไล่หาทีละบรรทัด ซึ่งทำให้ลำบากเวลาทำงานเองและทำกับกลุ่มด้วย
    - MainLayout = กรอบที่เอาไปใช้ซ้ำทุกๆหน้า (มี Navbar และ Footer เหมือนกันหมด) ส่วนตรงกลางที่เปลี่ยนไปตามหน้าคือ <Outlet />
    - Home.jsx / Owner.jsx = ตัวหน้าเว็บใหญ่ จะทำการเอาข้อมูลและเรียกชิ้นส่วนย่อยๆใน components มาประกอบกัน
    - Navbar, Header, NavButton, Display, Table = ส่วนประกอบเล็กๆ ที่เอามาต่อกันเป็นหน้า

# What state variables did you created and why?

- activeSection — จำว่าตอนนี้อยู่โหมดไหน (ยังไม่เลือก / User / Admin) ใช้บอก Display.jsx ว่าจะโชว์หน้าอะไร
- members — เก็บรายชื่อสมาชิกทั้งหมดที่ดึงมาจาก API เอาไว้โชว์ในตาราง
- isLoading — จำว่าตอนนี้กำลังโหลดข้อมูลอยู่ไหม ใช้โชว์ Loading ระหว่างรอ
- formData — เก็บค่าที่พิมพ์ในฟอร์ม ก่อนกดส่งไปสร้างสมาชิกใหม่

# How did you manage these states? Was it via Passing Props or React Context, why? 

เลือกใช้ Props เพราะโครงสร้างลึกแค่ 2-3 ชั้น ยังไม่ยุ่งยากขนาดต้องใช้ Context
มีการเห็นชัดว่าข้อมูลไหลจากไหนไปไหน ไล่ debug ง่าย

# Explain how and why you used the useEffect hook?

javascript
useEffect(() => {
  fetchMembers();
}, []);

แบบพอหน้านี้เปิดขึ้นมาปุ๊บ ให้ไปดึงข้อมูลสมาชิกมาให้หน่อย ส่วน [] ที่ใส่ไว้ท้ายๆ คือการบอกให้รันแค่ครั้งเดียวตอนเปิดหน้า ไม่ต้องรันซ้ำทุกครั้งที่หน้าจอเปลี่ยนอะไรนิดหน่อย ถ้าลืมใส่ [] จะดึงข้อมูลซ้ำไปเรื่อยๆ ไม่หยุด

# Explain whether you could and why, you would use fetch() without using useEffect?

ถ้าเป็นตอนโหลดข้อมูลครั้งแรกตอนเปิดหน้าเว็บ ต้องใส่ใน useEffect เพราะถ้าเรียก fetch() ลอยๆ ตรงๆ ในตัว component มันจะวนเป็นลูปไม่รู้จบ: ดึงข้อมูล → อัพเดต state → หน้าจอ re-render ใหม่ → ดึงข้อมูลอีก → วนแบบนี้ไปเรื่อยๆ

แต่ถ้าเป็นตอนที่กดปุ่ม Save หรือ Delete — ใส่ fetch() ตรงในฟังก์ชันที่ปุ่มเรียกได้เลย ไม่ต้องพึ่ง useEffect เพราะมันถูกสั่งให้รันตอนมีคนกดปุ่มเท่านั้น ไม่ได้วนซ้ำ

# Explain whether the use of fetch() should be synchronous or asynchronous JavaScript, why?

การดึงข้อมูลจากเซิร์ฟเวอร์ต้องใช้เวลา ถ้าเขียนแบบ Synchronous (รอจนกว่าจะเสร็จค่อยทำอย่างอื่นต่อ) หน้าเว็บจะ "ค้าง" ทั้งหน้า กดอะไรไม่ได้เลยระหว่างรอ

พอใช้ Async/Await แทน หน้าเว็บจะยังสามารถตอบสนองได้ปกติระหว่างรอข้อมูล เช่นโชว์ Loading spinner หมุนๆ ให้ดู หรือกดปุ่มอื่นได้ ไม่ค้าง

# Include any other notes about React and Frontend Web Development you want to use to summarize your understanding of this technical domain . You can also note down questions you have.

- Controlled Components — ผูกช่อง input ในฟอร์มเข้ากับ state โดยตรง ทำให้เช็คหรือควบคุมค่าที่พิมพ์ได้ก่อนส่งไป API
- State Immutability — เวลาจะแก้ state (เช่น array ของ members) ห้ามแก้ของเดิมตรงๆ ต้องสร้างชุดใหม่แทนเสมอ (ใช้ ... หรือ .map(), .filter()) ไม่งั้น React จะไม่รู้ว่ามีอะไรเปลี่ยนแปลง แล้วจะไม่ re-render ให้