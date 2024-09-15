import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const response = await prisma.users.findMany({
        // where: { published: true },
        // include: { user: true },
    });
	// const response = await prisma.contents.findMany({
	// 	// where: { published: true },
	// 	include: { user: true },
	// 	orderBy: { createdAt: 'desc' }
	// });

	return { users: response };
}) satisfies PageServerLoad;
