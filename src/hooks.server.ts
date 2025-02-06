import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { PrismaClient } from '@prisma/client';
import type { CustomLocals } from '$lib/types';

const prisma = new PrismaClient();

const authMiddleware: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');

	if (!session) {
		(event.locals as CustomLocals).user = null;
	} else {
		const user = await prisma.users.findFirst({
			where: { token: session }
		});

		if (user) {
			(event.locals as CustomLocals).user = { id: user.id, email: user.email, name: user.name };
		} else {
			event.cookies.delete('session', { path: '/' });
			(event.locals as CustomLocals).user = null;
		}
	}

	return resolve(event);
};

export const handle: Handle = sequence(authMiddleware);
