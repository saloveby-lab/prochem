export interface UserData {
	id: number;
	email: string;
	name: string | null;
}

export interface CustomLocals {
	user: UserData | null;
}
