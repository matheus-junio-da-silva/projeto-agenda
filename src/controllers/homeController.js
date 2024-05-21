const Contato = require('../models/ContatoModel');

exports.index = async(req, res) => {
  // Verifique se o usuário está logado
  if(req.session.user) {
    const usuarioId = req.session.user._id;
    const contatos = await Contato.buscaContatos(usuarioId);
    res.render('index', { contatos });
  } else {
    // Redirecione para a página de login se o usuário não estiver logado
    res.redirect('/login/index');
  }
};

