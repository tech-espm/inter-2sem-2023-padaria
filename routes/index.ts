﻿import app = require("teem");
import Produto = require("../models/produto");
import Tipo = require("../models/tipo");

class IndexRoute {
	public async index(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Paio Pão"
		};

		res.render("index/index", opcoes);
	}

	public async cadastro(req: app.Request, res: app.Response) {
		let opcoes = {
			titulo: "Cadastro",
			tipos: await Tipo.listar()
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
			titulo: "Produtos",
			produtos: produtosVindosDoBanco,
			tipos: await Tipo.listar()
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
