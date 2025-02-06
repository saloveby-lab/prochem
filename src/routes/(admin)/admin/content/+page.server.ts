import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	// ตรวจสอบว่ามีผู้ใช้ล็อกอินอยู่หรือไม่
	if (!locals.user) {
		// ถ้าไม่มี ให้ redirect ไปหน้า login
		throw redirect(302, '/login');
	}

	// ถ้ามีผู้ใช้ล็อกอิน ดำเนินการต่อไป
	// คุณสามารถโหลดข้อมูล content หรือข้อมูลอื่นๆ ที่จำเป็นได้ที่นี่

	return {
		user: locals.user
		// ส่งข้อมูลอื่นๆ ที่ต้องการไปยังหน้า
	};
};
