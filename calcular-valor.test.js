// test('teste funcionou', () => {
 
//     //assertion ou asserção é a comparação do resultado esperado com o resultado obtido
//     expect(true).toBe(false); //resultado esperado é true, resultado obtido é false
// });


const calcularValorPedido = require('./calcular-valor');

it('Não deve aplicar frete quando o valor dos produtos for maior que 500', () => { //AAA
    //AAA - Arrange, Act, Assert
    //Arrange - Preparar o cenário do teste
    const meuPedido = {
  itens: [
    { nome: 'Poção de vida', valor: 100 },
    { nome: 'Espada de prata', valor: 2000 },
    { nome: 'Entrega', valor: 40, entrega: true }
  ]
}
 
    //Act - Executar a ação que queremos testar
    const resultado = calcularValorPedido(meuPedido);
   

    //Assert - Verificar se o resultado obtido é o esperado
    expect(resultado).toBe(2100); // 2000 + 100
});

it('Deve aplicar frete quando o valor dos produtos for menor que 500', () => {
    // AAA
    //AAA - Arrange, Act, Assert
    //Arrange - Preparar o cenário do teste
    const meuPedido = {
  itens: [
    { nome: 'Poção de vida', valor: 100 },
    { nome: 'Espada de prata', valor: 200 },
    { nome: 'Entrega', valor: 40, entrega: true }
  ]
}
 
    //Act - Executar a ação que queremos testar
    const resultado = calcularValorPedido(meuPedido);
   

    //Assert - Verificar se o resultado obtido é o esperado
    expect(resultado).toBe(340); // 200 + 100 + 40
});

it('Deve aplicar frete quando o valor dos produtos for igual a 500', () => {
    // AAA
//AAA - Arrange, Act, Assert
//Arrange - Preparar o cenário do teste
    const meuPedido = {
  itens: [
    { nome: 'Poção de vida', valor: 100 },
    { nome: 'Espada de prata', valor: 400 },
    { nome: 'Entrega', valor: 40, entrega: true }
  ]
}
 
    //Act - Executar a ação que queremos testar
    const resultado = calcularValorPedido(meuPedido);
   

    //Assert - Verificar se o resultado obtido é o esperado
    expect(resultado).toBe(540); // 400 + 100 + 40
});
