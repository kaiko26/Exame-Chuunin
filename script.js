const avanca = document.querySelectorALL('.btn-proximo');

avanca.array.forEach(element => {
   btton.addEventListener('click', function(){
    const atual = document.querrySelector('.ativo');
    const proximoPasso = 'passo-' + this.getattribute('data-proximo');

    atual.classList.remove('ativo');
    document.getElementById(proximoPasso).classList.add('ativo');
   })
});