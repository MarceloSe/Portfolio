const skills = document.querySelectorAll('.box-content');
const descricao = document.querySelector('.hiden');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>Linguagem de marcação de hipertexto, para criação de sites, layouts e toda a estrutura principal do conteúdo na Web.</p> <br>',
                    '<p>CSS</p> <br> <p>Folhas de estilo, para incrementar a criação de sites dando o aparato visual ao estilo, cores e tamanhos gerais.</p> <br>',
                    '<p>JavaScript</p> <br> <p>Interação com usuário por intermédio do JavaScript, com efeitos e animações através da manipulação do DOM.</p> <br>',
                    '<p>NodeJS</p> <br> <p>Utilização do software NodeJS para criação do Backend, com as APIs e integração a bancos de dados.</p> <br>',
                    '<p>ReactJS</p> <br> <p>Biblioteca Front-End com base em Javascript, para criação de interfaces de usuário em páginas Web.</p> <br>',
                    '<p>MySQL</p> <br> <p>Criação de tabelas para armazenamento de dados, e integração com Backend.</p> <br>',
                    '<p>Git</p> <br> <p>Versionamento de Software e controle sobre atualizações com Git.</p> <br>',
                    '<p>Github</p> <br> <p>Hospedagem, criação de projetos, clonagem de repositórios e utilização de Branches com o GitHub.</p> <br>'
]
const dataInicio = [
                    (new Date(2021, 10, 1)).getTime(), // 0
                    (new Date(2021, 10, 1)).getTime(), // 1
                    (new Date(2022, 0, 1)).getTime(), // 2
                    (new Date(2022, 3, 1)).getTime(), // 3
                    (new Date(2022, 3, 1)).getTime(), // 4
                    (new Date(2022, 1, 1)).getTime(), // 5
                    (new Date(2021, 11, 1)).getTime(), // 6
                    (new Date(2021, 11, 1)).getTime(), // 7
                    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
    } )
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */';
    } )
} );
