declare class ListOrdersService {
    execute(): Promise<{
        name: string | null;
        id: string;
        created_at: Date | null;
        updated_at: Date | null;
        table: number;
        status: boolean;
        draft: boolean;
    }[]>;
}
export { ListOrdersService };
//# sourceMappingURL=ListOrdersService.d.ts.map