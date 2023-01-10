const skills = document.querySelectorAll('.box-content');
const descricao = document.querySelector('.hiden');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>Linguagem de marcação de hipertexto e Folhas de estilo, para criação de sites e layouts com acessibilidade e responsividade, juntamente com otimização para motores de busca.</p> <br>',
                    '<p>CSS</p> <br> <p>Linguagem de marcação de hipertexto e Folhas de estilo, para criação de sites e layouts com acessibilidade e responsividade, juntamente com otimização para motores de busca.</p> <br>',
                    '<p>JavaScript</p> <br> <p>Interação com usuário por intermédio do JavaScript, com efeitos e animações através da manipulação do DOM.</p> <br>',
                    '<p>NodeJS</p> <br> <p>Utilização do software NodeJS para criação do Backend, e também as APIs para integração a bancos de dados.</p> <br>',
                    '<p>MySQL</p> <br> <p>Criação de tabelas para armazenamento de dados, e integração com Backend</p> <br>',
                    '<p>Git</p> <br> <p>Versionamento de Software e hospedagem com Git e GitHub. Criação e clonagem de repositórios e utilização de Branches.</p> <br>',
                    '<p>Github</p> <br> <p>Versionamento de Software e hospedagem com Git e GitHub. Criação e clonagem de repositórios e utilização de Branches.</p> <br>'
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
