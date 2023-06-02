import app = require("teem");

interface Produto {
    idproduto: number;
    nome: string;
    codigo: string;
    inclusao: string;
    idtipo: number;
    marca: string;
    ean: string;
}

class Produto {
    public static async listar(): Promise<Produto[]> {
        let lista: Produto[];

        await app.sql.connect(async (sql: app.Sql) => {
            lista = await sql.query(`
                SELECT p.idproduto, p.nome, p.codigo,
                date_format(p.inclusao, '%d/%m/%Y') inclusao,
                t.nome tipo,
                p.marca, p.ean
                FROM produto p
                INNER JOIN tipo t ON t.idtipo = p.idtipo
                order by p.idproduto ASC
            `);
        });

        return lista;
    }

    public static async criar(produto: Produto, imagem: app.UploadedFile): Promise<string> {
        if (!produto) {
            return "Produto inválido";
        }

        if (!produto.nome) {
            return "Nome do produto inválido";
        }

        // @@@

        if (!produto.codigo) {
            return "Codigo Invalido inválido";
        }
        if (!produto.inclusao) {
            return "Data inválida";
        }

        
        if (!produto.idtipo) {
            return "Tipo inválido";
        }

        if (!produto.marca) {
            return "Marca inválida";
        }

        
        if (!produto.ean) {
            return "EAN inválida";
        }

        await app.sql.connect(async (sql: app.Sql) => {
            await sql.beginTransaction();

            await sql.query("INSERT INTO produto (nome, codigo, inclusao, idtipo, marca, ean) VALUES (?, ?, ?, ?, ?, ?)", [produto.nome, produto.codigo, produto.inclusao, produto.idtipo, produto.marca, produto.ean]);

            produto.idproduto = await sql.scalar("SELECT last_insert_id()");

            app.fileSystem.saveUploadedFile("/public/img/produtos/" + produto.idproduto + ".jpg", imagem);

            await sql.commit();
        });

        return null;
    }

    public static async editar(produto: Produto): Promise<string> {
        if (!produto) {
            return "Produto inválido";
        }

        if (!produto.nome) {
            return "Nome do produto inválido";
        }

        // @@@
        

        await app.sql.connect(async (sql: app.Sql) => {
            // @@@
        });

        return null;
    }
}

export = Produto;
