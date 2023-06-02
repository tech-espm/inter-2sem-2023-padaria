import app = require("teem");
import Produto = require("../../models/produto");

class ProdutoApiRoute {
    @app.http.post()
    @app.route.formData()
    public async criar(req: app.Request, res: app.Response) {
		let resultado = await Produto.criar(req.body, req.uploadedFiles["imagem"]);

		if (resultado) {
			res.status(400);
		}

		res.json(resultado);
    }

    @app.http.post()
    @app.route.formData()
    public async editar(req: app.Request, res: app.Response) {
		let resultado = await Produto.editar(req.body);

		if (resultado) {
			res.status(400);
		}

		res.json(resultado);
    }

	@app.http.delete()
    public async excluir(req: app.Request, res: app.Response) {
		let resultado = await Produto.excluir(parseInt(req.query["idproduto"] as string));

		if (resultado) {
			res.status(400);
		}

		res.json(resultado);
    }

    public async obter(req: app.Request, res: app.Response) {
		res.json(await Produto.obter(parseInt(req.query["idproduto"] as string)));
    }
}

export = ProdutoApiRoute;
