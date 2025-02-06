import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

const prisma = new PrismaClient();

export const load: PageServerLoad = async ({ locals }) => {
	// ถ้าผู้ใช้ล็อกอินแล้ว ให้ redirect ไปยังหน้า content
	if (locals.user) {
		throw redirect(302, '/admin/content');
	}
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (!email || !password) {
			return fail(400, { error: 'Missing email or password' });
		}

		try {
			const user = await prisma.users.findUnique({
				where: { email: email.toString() }
			});

			if (!user) {
				return fail(400, { error: 'Invalid email or password' });
			}

			const passwordMatch = await bcrypt.compare(password.toString(), user.password);

			if (!passwordMatch) {
				return fail(401, { error: 'Invalid email or password' });
			}

			const token = crypto.randomBytes(64).toString('hex');

			await prisma.users.update({
				where: { id: user.id },
				data: { token: token }
			});

			cookies.set('session', token, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 * 30 // 30 days
			});

			// แทนที่จะใช้ throw redirect, เราจะส่งค่ากลับเพื่อให้ client-side จัดการ
			return { success: true };
		} catch (error) {
			console.error(error);
			return fail(500, { error: 'An error occurred during login' });
		}
	}
};
