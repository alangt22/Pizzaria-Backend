interface UserRequest {
    email: string;
    password: string;
}
declare class AuthUserService {
    execute({ email, password }: UserRequest): Promise<{
        id: string;
        name: string;
        email: string;
        token: string;
    }>;
}
export { AuthUserService };
//# sourceMappingURL=AuthUserService.d.ts.map