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
}

export = ProdutoApiRoute;
