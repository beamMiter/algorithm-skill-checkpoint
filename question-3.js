/*
What is the Big O notation for Function findStudentById . Explain your reason.
Answer: O(n) เพราะใช้ Linear Search ซึ่งต้องตรวจสอบข้อมูลทีละตัว และในกรณีที่ข้อมูลอยู่ตัวสุดท้ายหรือไม่พบข้อมูล อาจต้องตรวจสอบนักเรียนทุกคนใน Array


*/

/* 
What is the Big O notation for Function findProductPrice. Explain your reason.
Answer: O(log n) เพราะใช้ Binary Search ข้อมูลสินค้าถูกเรียงรายชื่ออยู่แล้ว โดยแต่ละรอบจะตัดขอบเขตการค้นหาออกไปครึ่งนึง


*/

/*
Which function is more efficient and why?
Answer: findProductPrice, Binary O(log n) เนื่องจากว่าจำนวนรอบในการ Loop น้อยกว่าทำให้ลดขอบเขตลงครึ่งนึงในแต่ละรอบ แต่ต้องใช้กับข้อมูลที่ถูกเรียงลำดับแล้ว


*/
