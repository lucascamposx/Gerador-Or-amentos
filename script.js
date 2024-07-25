document.getElementById('gerarOrcamento').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('input[name="servicos"]:checked');
    let orcamentoText = '*Orçamento:*\n';
    let total = 0;

    checkboxes.forEach((checkbox) => {
        const value = parseFloat(checkbox.value);
        orcamentoText += `${checkbox.parentNode.textContent}\n`;
        total += value;
    });

    orcamentoText += `\n*Total: R$ ${total.toFixed(2)}*`;
    document.getElementById('orcamento').value = orcamentoText;
});

document.getElementById('copiarOrcamento').addEventListener('click', function() {
    const orcamentoTextarea = document.getElementById('orcamento');
    orcamentoTextarea.select();
    document.execCommand('copy');
});
