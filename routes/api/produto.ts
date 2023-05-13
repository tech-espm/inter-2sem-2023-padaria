import app = require("teem");

class ProdutoRoute {
    @app.http.post()
    @app.route.formData()
    public async criar(req: app.Request, res: app.Response) {
        let produto = req.body;

        res.json("show")
    }
}

export = ProdutoRoute;