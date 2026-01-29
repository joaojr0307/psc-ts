// ===== CONFIGURATION =====
const WHATSAPP_NUMBER = '5527988834082';

// ===== FORM DATA CONFIGURATION =====
const FORMS_CONFIG = [
    // ========== PESSOA JURÍDICA (PJ) ==========
    {
        id: 'antecipacao-recebiveis',
        name: 'Antecipação de Recebíveis',
        type: 'PJ',
        icon: '💳',
        description: 'Antecipe seus recebíveis de cartão, duplicatas e contratos',
        fields: [
            { name: 'razao_social', label: 'Razão Social', type: 'text', required: true },
            { name: 'cnpj', label: 'CNPJ', type: 'text', required: true, placeholder: '00.000.000/0000-00' },
            { name: 'cnae', label: 'CNAE', type: 'text', required: true },
            { name: 'tempo_abertura', label: 'Tempo de Abertura', type: 'text', required: true },
            { name: 'tipo_recebivel', label: 'Tipo de Recebível', type: 'select', required: true, options: ['Cartão', 'Duplicata', 'Contrato'] },
            { name: 'valor_medio_mensal', label: 'Valor Médio Mensal', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'valor_desejado', label: 'Valor Desejado', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'banco_recebedor', label: 'Banco Recebedor', type: 'text', required: true },
            { name: 'administrador', label: 'Administrador', type: 'text', required: true },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'capital-giro-aval',
        name: 'Capital de Giro – Aval',
        type: 'PJ',
        icon: '💼',
        description: 'Crédito empresarial com garantia de aval',
        fields: [
            { name: 'razao_social', label: 'Razão Social', type: 'text', required: true },
            { name: 'cnpj', label: 'CNPJ', type: 'text', required: true, placeholder: '00.000.000/0000-00' },
            { name: 'cnae', label: 'CNAE', type: 'text', required: true },
            { name: 'tempo_abertura', label: 'Tempo de Abertura', type: 'text', required: true },
            { name: 'cidade_estado', label: 'Cidade/Estado', type: 'text', required: true },
            { name: 'faturamento_mensal', label: 'Faturamento Mensal', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'valor_desejado', label: 'Valor Desejado', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'prazo_desejado', label: 'Prazo Desejado', type: 'text', required: true, placeholder: 'Ex: 12 meses' },
            { name: 'finalidade', label: 'Finalidade', type: 'text', required: true },
            { name: 'administrador', label: 'Administrador', type: 'text', required: true },
            { name: 'cargo_funcao', label: 'Cargo/Função', type: 'text', required: true },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'capital-giro-bndes',
        name: 'Capital de Giro – BNDES FGI',
        type: 'PJ',
        icon: '🏦',
        description: 'Crédito com garantia do Fundo Garantidor do BNDES',
        fields: [
            { name: 'razao_social', label: 'Razão Social', type: 'text', required: true },
            { name: 'cnpj', label: 'CNPJ', type: 'text', required: true, placeholder: '00.000.000/0000-00' },
            { name: 'cnae', label: 'CNAE', type: 'text', required: true },
            { name: 'tempo_abertura', label: 'Tempo de Abertura', type: 'text', required: true },
            { name: 'faturamento_anual', label: 'Faturamento Anual', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'valor_desejado', label: 'Valor Desejado', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'finalidade', label: 'Finalidade', type: 'text', required: true },
            { name: 'administrador', label: 'Administrador', type: 'text', required: true },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'capital-giro-garantia',
        name: 'Capital de Giro – Garantia',
        type: 'PJ',
        icon: '🏢',
        description: 'Crédito empresarial com garantia real',
        fields: [
            { name: 'razao_social', label: 'Razão Social', type: 'text', required: true },
            { name: 'cnpj', label: 'CNPJ', type: 'text', required: true, placeholder: '00.000.000/0000-00' },
            { name: 'cnae', label: 'CNAE', type: 'text', required: true },
            { name: 'tempo_abertura', label: 'Tempo de Abertura', type: 'text', required: true },
            { name: 'garantia_disponivel', label: 'Garantia Disponível', type: 'select', required: true, options: ['Imóvel', 'Veículo', 'Duplicata', 'Máquinas/Equipamentos', 'Estoque', 'Outros'] },
            { name: 'valor_garantia', label: 'Valor da Garantia', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'faturamento_mensal', label: 'Faturamento Mensal', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'valor_desejado', label: 'Valor Desejado', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'prazo_desejado', label: 'Prazo Desejado', type: 'text', required: true, placeholder: 'Ex: 12 meses' },
            { name: 'administrador', label: 'Administrador', type: 'text', required: true },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'consorcio-pj-psc-ts',
        name: 'Consórcio – Pessoa Jurídica',
        type: 'PJ',
        icon: '🎁',
        description: 'Consórcio para pessoa jurídica',
        fields: [
            { name: 'razao_social', label: 'Razão Social', type: 'text', required: true },
            { name: 'cnpj', label: 'CNPJ', type: 'text', required: true, placeholder: '00.000.000/0000-00' },
            { name: 'data_fundacao', label: 'Data da Fundação', type: 'date', required: true },
            { name: 'tipo_bem', label: 'Tipo de Bem Desejado', type: 'select', required: true, options: ['Imóvel', 'Veículo', 'Serviço', 'Outro'] },
            { name: 'valor_carta', label: 'Valor da Carta de Crédito Desejada', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'prazo_estimado', label: 'Prazo Estimado (meses)', type: 'number', required: true },
            { name: 'urgencia', label: 'Tem Urgência de Contemplação?', type: 'select', required: true, options: ['Sim', 'Não'] },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP da Empresa', type: 'text', required: true },
            { name: 'representante_legal', label: 'Nome do Representante Legal', type: 'text', required: true },
            { name: 'cpf_representante', label: 'CPF do Representante Legal', type: 'text', required: true, placeholder: '000.000.000-00' }
        ]
    },
    {
        id: 'consorcio-pj',
        name: 'Consórcio – Pessoa Jurídica',
        type: 'PJ',
        icon: '🎯',
        description: 'PSC Consórcios - Realize seus sonhos',
        logo: 'logo-psc.png',
        fields: [
            { name: 'razao_social', label: 'Razão Social', type: 'text', required: true },
            { name: 'cnpj', label: 'CNPJ', type: 'text', required: true, placeholder: '00.000.000/0000-00' },
            { name: 'data_fundacao', label: 'Data da Fundação', type: 'date', required: true },
            { name: 'tipo_bem', label: 'Tipo de Bem Desejado', type: 'select', required: true, options: ['Imóvel', 'Veículo', 'Serviço', 'Outro'] },
            { name: 'valor_carta', label: 'Valor da Carta de Crédito Desejada', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'prazo_estimado', label: 'Prazo Estimado (meses)', type: 'number', required: true },
            { name: 'urgencia', label: 'Tem Urgência de Contemplação?', type: 'select', required: true, options: ['Sim', 'Não'] },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP da Empresa', type: 'text', required: true },
            { name: 'representante_legal', label: 'Nome do Representante Legal', type: 'text', required: true },
            { name: 'cpf_representante', label: 'CPF do Representante Legal', type: 'text', required: true, placeholder: '000.000.000-00' }
        ],
        observacoes: 'O cliente receberá tokens de bancos parceiros e e-mails do portal DInDin e BPO.'
    },
    {
        id: 'energia-livre',
        name: 'Energia Livre',
        type: 'PJ',
        icon: '⚡',
        description: 'Migração para mercado livre de energia',
        fields: [
            { name: 'razao_social', label: 'Razão Social', type: 'text', required: true },
            { name: 'cnpj', label: 'CNPJ', type: 'text', required: true, placeholder: '00.000.000/0000-00' },
            { name: 'tempo_abertura', label: 'Tempo de Abertura', type: 'text', required: true },
            { name: 'faturamento_anual', label: 'Faturamento Anual', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'consumo_mensal', label: 'Consumo Médio Mensal (kWh)', type: 'number', required: true },
            { name: 'cidade_estado', label: 'Cidade/Estado', type: 'text', required: true },
            { name: 'administrador', label: 'Administrador', type: 'text', required: true },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'finame',
        name: 'Finame',
        type: 'PJ',
        icon: '🏭',
        description: 'Financiamento de máquinas e equipamentos',
        fields: [
            { name: 'razao_social', label: 'Razão Social', type: 'text', required: true },
            { name: 'cnpj', label: 'CNPJ', type: 'text', required: true, placeholder: '00.000.000/0000-00' },
            { name: 'tempo_abertura', label: 'Tempo de Abertura', type: 'text', required: true },
            { name: 'faturamento_anual', label: 'Faturamento Anual', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'valor_equipamento', label: 'Valor do Equipamento', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'fabricante', label: 'Fabricante', type: 'text', required: true },
            { name: 'tipo_equipamento', label: 'Tipo de Equipamento', type: 'text', required: true },
            { name: 'administrador', label: 'Administrador', type: 'text', required: true },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'leasing-empresarial',
        name: 'Leasing Empresarial',
        type: 'PJ',
        icon: '🚜',
        description: 'Arrendamento de bens para sua empresa',
        fields: [
            { name: 'razao_social', label: 'Razão Social', type: 'text', required: true },
            { name: 'cnpj', label: 'CNPJ', type: 'text', required: true, placeholder: '00.000.000/0000-00' },
            { name: 'tempo_abertura', label: 'Tempo de Abertura', type: 'text', required: true },
            { name: 'tipo_bem', label: 'Tipo de Bem', type: 'select', required: true, options: ['Máquinas', 'Frota', 'Agrícola', 'Outros'] },
            { name: 'valor_bem', label: 'Valor do Bem', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'prazo_desejado', label: 'Prazo Desejado', type: 'text', required: true, placeholder: 'Ex: 12 meses' },
            { name: 'administrador', label: 'Administrador', type: 'text', required: true },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'operacoes-agro',
        name: 'Operações Agro',
        type: 'PJ',
        icon: '🌾',
        description: 'Crédito para o agronegócio',
        fields: [
            { name: 'razao_social', label: 'Razão Social', type: 'text', required: true },
            { name: 'cnpj', label: 'CNPJ', type: 'text', required: true, placeholder: '00.000.000/0000-00' },
            { name: 'tempo_abertura', label: 'Tempo de Abertura', type: 'text', required: true },
            { name: 'faturamento_anual', label: 'Faturamento Anual', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'tipo_operacao', label: 'Tipo de Operação', type: 'text', required: true },
            { name: 'valor_operacao', label: 'Valor da Operação', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'prazo_safra', label: 'Prazo da Safra', type: 'text', required: true },
            { name: 'administrador', label: 'Administrador', type: 'text', required: true },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'planos-saude-pj',
        name: 'Planos de Saúde – PJ',
        type: 'PJ',
        icon: '🏥',
        description: 'Planos de saúde empresariais',
        fields: [
            { name: 'razao_social', label: 'Razão Social', type: 'text', required: true },
            { name: 'cnpj', label: 'CNPJ', type: 'text', required: true, placeholder: '00.000.000/0000-00' },
            { name: 'numero_vidas', label: 'Número de Vidas', type: 'number', required: true },
            { name: 'cidade_estado', label: 'Cidade/Estado', type: 'text', required: true },
            { name: 'operadora_atual', label: 'Operadora Atual', type: 'text', required: false },
            { name: 'administrador', label: 'Administrador', type: 'text', required: true },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'seguros-pj',
        name: 'Seguros – PJ',
        type: 'PJ',
        icon: '🛡️',
        description: 'Seguros empresariais diversos',
        fields: [
            { name: 'razao_social', label: 'Razão Social', type: 'text', required: true },
            { name: 'cnpj', label: 'CNPJ', type: 'text', required: true, placeholder: '00.000.000/0000-00' },
            { name: 'tipo_seguro', label: 'Tipo de Seguro', type: 'text', required: true },
            { name: 'valor_cobertura', label: 'Valor Estimado Cobertura', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'numero_funcionarios', label: 'Número de Funcionários', type: 'number', required: true },
            { name: 'administrador', label: 'Administrador', type: 'text', required: true },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },

    // ========== PESSOA FÍSICA (PF) ==========
    {
        id: 'cartao-consignado',
        name: 'Cartão Consignado Benefício',
        type: 'PF',
        icon: '💳',
        description: 'Cartão consignado para beneficiários',
        fields: [
            { name: 'nome_completo', label: 'Nome Completo', type: 'text', required: true },
            { name: 'cpf', label: 'CPF', type: 'text', required: true, placeholder: '000.000.000-00' },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'tipo_beneficio', label: 'Tipo de Benefício', type: 'text', required: true },
            { name: 'margem_disponivel', label: 'Margem Disponível (se souber)', type: 'text', required: false, placeholder: 'R$ 0,00' },
            { name: 'banco_agencia_conta', label: 'Banco, Agência e Conta onde Recebe o Benefício', type: 'text', required: true },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'consignado-inss',
        name: 'Consignado INSS',
        type: 'PF',
        icon: '👴',
        description: 'Empréstimo consignado para beneficiários do INSS',
        fields: [
            { name: 'nome_completo', label: 'Nome Completo', type: 'text', required: true },
            { name: 'cpf', label: 'CPF', type: 'text', required: true, placeholder: '000.000.000-00' },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'beneficio', label: 'Benefício', type: 'select', required: true, options: ['INSS', 'BPC', 'LOAS'] },
            { name: 'renda_mensal', label: 'Renda Mensal', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'valor_desejado', label: 'Valor Desejado do Crédito', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'prazo', label: 'Prazo Desejado (meses)', type: 'number', required: true },
            { name: 'outros_emprestimos', label: 'Possui Outros Empréstimos Ativos?', type: 'select', required: true, options: ['Sim', 'Não'] },
            { name: 'banco_agencia_conta', label: 'Banco, Agência e Conta onde Recebe o Benefício', type: 'text', required: true },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'consignado-privado',
        name: 'Consignado Privado',
        type: 'PF',
        icon: '👔',
        description: 'Empréstimo consignado para funcionários da iniciativa privada',
        fields: [
            { name: 'nome_completo', label: 'Nome Completo', type: 'text', required: true },
            { name: 'cpf', label: 'CPF', type: 'text', required: true, placeholder: '000.000.000-00' },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'empresa', label: 'Empresa onde Trabalha', type: 'text', required: true },
            { name: 'cargo', label: 'Cargo/Função', type: 'text', required: true },
            { name: 'tempo_vinculo', label: 'Tempo de Vínculo', type: 'text', required: true },
            { name: 'renda_mensal', label: 'Renda Mensal', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'valor_desejado', label: 'Valor Desejado do Crédito', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'prazo', label: 'Prazo Desejado (meses)', type: 'number', required: true },
            { name: 'outros_emprestimos', label: 'Possui Outros Empréstimos Ativos?', type: 'select', required: true, options: ['Sim', 'Não'] },
            { name: 'banco_agencia_conta', label: 'Banco, Agência e Conta', type: 'text', required: true },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'consignado-publico',
        name: 'Consignado Público',
        type: 'PF',
        icon: '🏛️',
        description: 'Empréstimo consignado para servidores públicos',
        fields: [
            { name: 'nome_completo', label: 'Nome Completo', type: 'text', required: true },
            { name: 'cpf', label: 'CPF', type: 'text', required: true, placeholder: '000.000.000-00' },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'orgao_publico', label: 'Órgão Público', type: 'text', required: true },
            { name: 'cargo', label: 'Cargo/Função', type: 'text', required: true },
            { name: 'tempo_vinculo', label: 'Tempo de Vínculo', type: 'text', required: true },
            { name: 'renda_mensal', label: 'Renda Mensal', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'valor_desejado', label: 'Valor Desejado do Crédito', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'prazo', label: 'Prazo Desejado (meses)', type: 'number', required: true },
            { name: 'banco_agencia_conta', label: 'Banco, Agência e Conta onde Recebe o Benefício', type: 'text', required: true },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'consorcio-pf-psc-ts',
        name: 'Consórcio – Pessoa Física',
        type: 'PF',
        icon: '🎁',
        description: 'Consórcio para pessoa física',
        fields: [
            { name: 'nome_completo', label: 'Nome Completo', type: 'text', required: true },
            { name: 'cpf', label: 'CPF', type: 'text', required: true, placeholder: '000.000.000-00' },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'tipo_bem', label: 'Tipo de Bem Desejado', type: 'select', required: true, options: ['Imóvel', 'Veículo', 'Serviço', 'Outro'] },
            { name: 'valor_carta', label: 'Valor da Carta de Crédito Desejada', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'prazo_estimado', label: 'Prazo Estimado (meses)', type: 'number', required: true },
            { name: 'urgencia', label: 'Tem Urgência de Contemplação?', type: 'select', required: true, options: ['Sim', 'Não'] },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'consorcio-pf',
        name: 'Consórcio – Pessoa Física',
        type: 'PF',
        icon: '🎯',
        description: 'PSC Consórcios - Realize seus sonhos',
        logo: 'logo-psc.png',
        fields: [
            { name: 'nome_completo', label: 'Nome Completo', type: 'text', required: true },
            { name: 'cpf', label: 'CPF', type: 'text', required: true, placeholder: '000.000.000-00' },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'tipo_bem', label: 'Tipo de Bem Desejado', type: 'select', required: true, options: ['Imóvel', 'Veículo', 'Serviço', 'Outro'] },
            { name: 'valor_carta', label: 'Valor da Carta de Crédito Desejada', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'prazo_estimado', label: 'Prazo Estimado (meses)', type: 'number', required: true },
            { name: 'urgencia', label: 'Tem Urgência de Contemplação?', type: 'select', required: true, options: ['Sim', 'Não'] },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ],
        observacoes: 'O cliente receberá tokens de bancos parceiros e e-mails do portal DInDin e BPO.'
    },
    {
        id: 'financiamento-imobiliario',
        name: 'Financiamento Imobiliário',
        type: 'PF',
        icon: '🏠',
        description: 'Financiamento para compra de imóveis',
        fields: [
            { name: 'nome_completo', label: 'Nome Completo', type: 'text', required: true },
            { name: 'cpf', label: 'CPF', type: 'text', required: true, placeholder: '000.000.000-00' },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'tipo_imovel', label: 'Tipo de Imóvel', type: 'text', required: true },
            { name: 'valor_imovel', label: 'Valor do Imóvel', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'valor_entrada', label: 'Valor de Entrada', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'prazo', label: 'Prazo (meses)', type: 'number', required: true },
            { name: 'renda_mensal', label: 'Renda Mensal', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'usar_fgts', label: 'Usar FGTS?', type: 'select', required: true, options: ['Sim', 'Não'] },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'home-equity',
        name: 'Home Equity',
        type: 'PF',
        icon: '🏡',
        description: 'Crédito com garantia de imóvel',
        fields: [
            { name: 'nome_completo', label: 'Nome Completo', type: 'text', required: true },
            { name: 'cpf', label: 'CPF', type: 'text', required: true, placeholder: '000.000.000-00' },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'valor_imovel', label: 'Valor do Imóvel Oferecido em Garantia', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'valor_credito', label: 'Valor do Crédito Desejado', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'finalidade', label: 'Finalidade do Crédito', type: 'text', required: true },
            { name: 'endereco_imovel', label: 'Endereço do Imóvel', type: 'text', required: true },
            { name: 'escritura_regularizada', label: 'Escritura Regularizada?', type: 'select', required: true, options: ['Sim', 'Não'] },
            { name: 'metragem', label: 'Metragem do Imóvel', type: 'text', required: true },
            { name: 'tipo_imovel', label: 'O Imóvel é Rural ou Urbano?', type: 'select', required: true, options: ['Urbano', 'Rural'] },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'endereco_proprietario', label: 'Endereço Completo com CEP do Proprietário', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ],
        observacoes: 'Área rural apenas acima de 30 hectares, com comprovação de produtividade da terra. O cliente receberá tokens de bancos parceiros e e-mails do portal DInDin e BPO.'
    },
    {
        id: 'financiamento-veiculos',
        name: 'Financiamento de Veículos',
        type: 'PF',
        icon: '🚗',
        description: 'Financiamento para compra de veículos',
        fields: [
            { name: 'nome_completo', label: 'Nome Completo', type: 'text', required: true },
            { name: 'cpf', label: 'CPF', type: 'text', required: true, placeholder: '000.000.000-00' },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'tipo_veiculo', label: 'Tipo Veículo', type: 'text', required: true },
            { name: 'valor_veiculo', label: 'Valor Veículo', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'entrada_disponivel', label: 'Entrada Disponível', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'prazo', label: 'Prazo (meses)', type: 'number', required: true },
            { name: 'renda_mensal', label: 'Renda Mensal', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'banco_atual', label: 'Banco Atual', type: 'text', required: true },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'planos-saude-pf',
        name: 'Planos de Saúde – PF',
        type: 'PF',
        icon: '⚕️',
        description: 'Planos de saúde individuais ou familiares',
        fields: [
            { name: 'nome_completo', label: 'Nome Completo', type: 'text', required: true },
            { name: 'cpf', label: 'CPF', type: 'text', required: true, placeholder: '000.000.000-00' },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'idade_dependentes', label: 'Idade Dependentes', type: 'text', required: false },
            { name: 'cidade_estado', label: 'Cidade/Estado', type: 'text', required: true },
            { name: 'operadora_atual', label: 'Operadora Atual', type: 'text', required: false },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'seguros-pf',
        name: 'Seguros – PF',
        type: 'PF',
        icon: '🔒',
        description: 'Seguros pessoais diversos',
        fields: [
            { name: 'nome_completo', label: 'Nome Completo', type: 'text', required: true },
            { name: 'cpf', label: 'CPF', type: 'text', required: true, placeholder: '000.000.000-00' },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'tipo_seguro', label: 'Tipo de Seguro', type: 'text', required: true },
            { name: 'valor_bem', label: 'Valor do Bem', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'cobertura_desejada', label: 'Cobertura Desejada', type: 'text', required: true },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'portabilidade-refin',
        name: 'Portabilidade de Empréstimo / Refinanciamento',
        type: 'PF',
        icon: '🔄',
        description: 'Portabilidade e refinanciamento de crédito',
        fields: [
            { name: 'nome_completo', label: 'Nome Completo', type: 'text', required: true },
            { name: 'cpf', label: 'CPF', type: 'text', required: true, placeholder: '000.000.000-00' },
            { name: 'banco_atual', label: 'Banco Atual do Empréstimo', type: 'text', required: true },
            { name: 'tipo_contrato', label: 'Tipo de Contrato (Consignado / Pessoal / Outro)', type: 'text', required: true },
            { name: 'valor_parcela', label: 'Valor Atual da Parcela', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'saldo_devedor', label: 'Saldo Devedor Aproximado', type: 'text', required: true, placeholder: 'R$ 0,00' },
            { name: 'objetivo', label: 'Deseja Reduzir Parcela ou Obter Troco?', type: 'select', required: true, options: ['Reduzir Parcela', 'Obter Troco', 'Ambos'] },
            { name: 'dados_bancarios', label: 'Banco, Agência e Conta para Crédito (se houver troco)', type: 'text', required: false },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    },
    {
        id: 'saque-aniversario-fgts',
        name: 'Saque Aniversário FGTS',
        type: 'PF',
        icon: '🎂',
        description: 'Antecipação do saque aniversário do FGTS',
        fields: [
            { name: 'nome_completo', label: 'Nome Completo', type: 'text', required: true },
            { name: 'cpf', label: 'CPF', type: 'text', required: true, placeholder: '000.000.000-00' },
            { name: 'data_nascimento', label: 'Data de Nascimento', type: 'date', required: true },
            { name: 'possui_saldo', label: 'Possui Saldo no FGTS?', type: 'select', required: true, options: ['Sim', 'Não'] },
            { name: 'valor_aproximado', label: 'Valor Aproximado Disponível no FGTS', type: 'text', required: false, placeholder: 'R$ 0,00' },
            { name: 'dados_bancarios', label: 'Banco, Agência e Conta em que Recebe o Benefício', type: 'text', required: true },
            { name: 'telefone', label: 'Telefone/WhatsApp', type: 'tel', required: true, placeholder: '(00) 00000-0000' },
            { name: 'email', label: 'E-mail', type: 'email', required: true },
            { name: 'endereco', label: 'Endereço Completo com CEP', type: 'text', required: true },
            { name: 'estado_civil', label: 'Estado Civil', type: 'select', required: true, options: ['Solteiro(a)', 'Casado(a)', 'Divorciado(a)', 'Viúvo(a)', 'União Estável'] }
        ]
    }
];

// ===== STATE =====
let currentForm = null;
let currentCategory = 'all';

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    renderServiceCards();
    setupEventListeners();

    // Check if there's a form ID in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const formId = urlParams.get('form');
    if (formId) {
        loadForm(formId);
    }
});

// ===== RENDER SERVICE CARDS =====
function renderServiceCards(category = 'all') {
    const container = document.getElementById('serviceCards');
    const filteredForms = category === 'all'
        ? FORMS_CONFIG
        : FORMS_CONFIG.filter(form => form.type === category);

    container.innerHTML = filteredForms.map(form => `
        <div class="service-card" data-form-id="${form.id}">
            <div class="service-card-header">
                <div class="service-icon">${form.icon}</div>
                <div class="service-name">${form.name}</div>
                <div class="service-badge">${form.type}</div>
            </div>
            <p class="service-description">${form.description}</p>
        </div>
    `).join('');

    // Add click events to cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', () => {
            const formId = card.dataset.formId;
            loadForm(formId);
        });
    });
}

// ===== LOAD FORM =====
function loadForm(formId) {
    currentForm = FORMS_CONFIG.find(form => form.id === formId);
    if (!currentForm) return;

    // Update URL with form ID
    const url = new URL(window.location);
    url.searchParams.set('form', formId);
    window.history.pushState({}, '', url);

    // Update footer notice based on form type
    const footerNotice = document.getElementById('footerNotice');
    if (currentForm.type === 'PF') {
        footerNotice.textContent = 'Observações: o cliente receberá tokens de bancos parceiros e e-mails do portal DInDin e BPO para autorizar o uso dos dados.';
    } else {
        footerNotice.textContent = 'Observações: o cliente receberá tokens de bancos parceiros e e-mails do portal DInDin e BPO.';
    }

    // Set form title
    document.getElementById('formTitle').textContent = currentForm.name;

    // Update logo based on form configuration
    const logoImg = document.querySelector('.form-logo');
    if (currentForm.logo) {
        logoImg.src = currentForm.logo;
        logoImg.alt = currentForm.description;
    } else {
        logoImg.src = 'logo.png';
        logoImg.alt = 'PSC+TS Logo';
    }


    // Render form fields
    const formContainer = document.getElementById('dynamicForm');
    formContainer.innerHTML = currentForm.fields.map(field => {
        if (field.type === 'select') {
            return `
                <div class="form-group">
                    <label class="form-label ${field.required ? 'required' : ''}">${field.label}</label>
                    <select 
                        name="${field.name}" 
                        class="form-select" 
                        ${field.required ? 'required' : ''}
                    >
                        <option value="">Selecione...</option>
                        ${field.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                    </select>
                </div>
            `;
        } else {
            return `
                <div class="form-group">
                    <label class="form-label ${field.required ? 'required' : ''}">${field.label}</label>
                    <input 
                        type="${field.type}" 
                        name="${field.name}" 
                        class="form-input" 
                        placeholder="${field.placeholder || ''}"
                        ${field.required ? 'required' : ''}
                    />
                </div>
            `;
        }
    }).join('');

    // Show form screen, hide service selection
    document.getElementById('serviceSelection').classList.add('hidden');
    document.getElementById('formScreen').classList.remove('hidden');

    // Scroll to top
    window.scrollTo(0, 0);
}

// ===== SETUP EVENT LISTENERS =====
function setupEventListeners() {
    // Category tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            currentCategory = category;
            renderServiceCards(category);
        });
    });

    // Submit button
    document.getElementById('submitBtn').addEventListener('click', (e) => {
        e.preventDefault();
        handleFormSubmit();
    });
}

// ===== HANDLE FORM SUBMIT =====
function handleFormSubmit() {
    const form = document.getElementById('dynamicForm');

    // Validate form
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Collect form data
    const formData = new FormData(form);

    // Build formatted message
    let message = '';

    // Header
    message += `${currentForm.icon} *NOVA PROPOSTA* ${currentForm.icon}\n`;
    message += `*Serviço:* ${currentForm.name}\n`;
    message += `*Tipo:* ${currentForm.type === 'PJ' ? 'Pessoa Jurídica' : 'Pessoa Física'}\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n`;

    // Group fields by category
    const personalFields = ['nome_completo', 'cpf', 'data_nascimento', 'estado_civil', 'telefone', 'email', 'endereco', 'endereco_proprietario'];
    const companyFields = ['razao_social', 'cnpj', 'cnae', 'tempo_abertura', 'data_fundacao', 'cidade_estado', 'administrador', 'cargo_funcao', 'representante_legal', 'cpf_representante'];
    const financialFields = ['valor_desejado', 'valor_imovel', 'valor_credito', 'valor_veiculo', 'valor_entrada', 'valor_bem', 'valor_carta', 'valor_equipamento', 'valor_garantia', 'valor_cobertura', 'valor_medio_mensal', 'valor_parcela', 'saldo_devedor', 'faturamento_mensal', 'faturamento_anual', 'renda_mensal', 'margem_disponivel', 'prazo', 'prazo_desejado', 'prazo_estimado', 'prazo_safra'];

    // Personal/Company Information Section
    const hasPersonalInfo = currentForm.fields.some(f => personalFields.includes(f.name) || companyFields.includes(f.name));
    if (hasPersonalInfo) {
        message += `*DADOS ${currentForm.type === 'PJ' ? 'DA EMPRESA' : 'PESSOAIS'}*\n`;
        currentForm.fields.forEach(field => {
            const value = formData.get(field.name);
            if (value && (personalFields.includes(field.name) || companyFields.includes(field.name))) {
                message += `*${field.label}:* ${value}\n`;
            }
        });
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    }

    // Financial Information Section
    const hasFinancialInfo = currentForm.fields.some(f => financialFields.includes(f.name));
    if (hasFinancialInfo) {
        message += `💰 *INFORMAÇÕES FINANCEIRAS*\n\n`;
        currentForm.fields.forEach(field => {
            const value = formData.get(field.name);
            if (value && financialFields.includes(field.name)) {
                message += `*${field.label}:* ${value}\n`;
            }
        });
        message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    }

    // Additional Information Section (other fields)
    message += `📝 *INFORMAÇÕES ADICIONAIS*\n\n`;
    currentForm.fields.forEach(field => {
        const value = formData.get(field.name);
        if (value && !personalFields.includes(field.name) && !companyFields.includes(field.name) && !financialFields.includes(field.name)) {
            message += `*${field.label}:* ${value}\n`;
        }
    });

    // Footer
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `🦁 *PSC+TS*\n`;
    message += `📅 ${new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}`;

    // Generate WhatsApp link
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
}
