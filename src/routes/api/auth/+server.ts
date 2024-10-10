import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt';

export async function POST(request: Request): Promise<Response> {
	const formData = await request.formData();
	const email = formData.get('email') as string;
	const password = formData.get('password') as string;

	// Find the user by email
	const user = await prisma.users.findUnique({
		where: { email }
	});

	if (!user) {
		return new Response('Invalid email or password', { status: 400 });
	}

	// Check if the password matches
	const passwordMatch = await bcrypt.compare(password, user.password);

	if (!passwordMatch) {
		return new Response('Invalid email or password', { status: 400 });
	}

	// If credentials are correct, redirect to home or handle session
	throw redirect(303, '/');
}
