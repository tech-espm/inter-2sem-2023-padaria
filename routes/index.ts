import app = require("teem");
import Produto = require("../models/produto");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		let nomeDoUsuarioQueVeioDoBanco = "Rafael";

		let opcoes = {
			usuario: nomeDoUsuarioQueVeioDoBanco,
			quantidadeDeRepeticoes: 5,
			titulo: "Paio Pão"
		};

		res.render("index/index", opcoes);
	}

	public async teste(req: app.Request, res: app.Response) {
		let opcoes = {
			layout: "casca-teste"
		};

		res.render("index/teste", opcoes);
	}

	public async teste2(req: app.Request, res: app.Response) {
		let opcoes = {
			layout: "casca-teste"
		};

		res.render("index/teste2", opcoes);
	}

	public async cadastro(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Cadastro"
		};
		res.render("index/cadastro",opcoes);
	}

	public async sobre(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Sobre Nós"
		};
		res.render("index/sobre",opcoes);
	}

	public async historia(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "História"
		};
		res.render("index/historia",opcoes);
	}

	public async produtos(req: app.Request, res: app.Response) {
		let produtosVindosDoBanco = await Produto.listar();

		let opcoes = {
			titulo: "Listagem de Produtos",
			produtos: produtosVindosDoBanco
		};

		res.render("index/produtos", opcoes);
	}

	public async promocao(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Promoção"
		};
		res.render("index/promocao",opcoes);
	}
}

export = IndexRoute;
