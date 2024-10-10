import { PrismaClient } from '@prisma/client';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit/types';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		// Find the user by email
		const user = await prisma.users.findUnique({
			where: { email }
		});

		if (!user) {
			return fail(400, { error: 'Invalid email or password' });
		}

		// Check if the password matches
		const passwordMatch = await bcrypt.compare(password, user.password);

		if (!passwordMatch) {
			return fail(400, { error: 'Invalid email or password' });
		}

		// If credentials are correct, redirect to home or handle session
		throw redirect(303, '/');
	}
};
