import app = require("teem");

interface Tipo {
    idtipo: number;
    nome: string;
}

class Tipo {
    public static async listar(): Promise<Tipo[]> {
        let lista: Tipo[];

        await app.sql.connect(async (sql: app.Sql) => {
            lista = await sql.query(`
                SELECT idtipo, nome
                FROM tipo
                ORDER BY nome ASC
            `);
        });

        return lista;
    }
}

export = Tipo;
