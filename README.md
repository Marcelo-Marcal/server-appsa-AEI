### server-appsa-AEI
# AGENDAMENTO ELETRÔNICO INTEGRADO (SulAmérica)


Criando a API com Node.JS

A plataforma de Agendamento Eletrônico Integrado tem como objetivo disponibilizar serviços de agendamento direto, ou seja, dado um hub de parceiros conectados à mesma, os beneficiários têm a opção de selecionar especificamente a unidade, médico e agenda desejada. A conexão de novos parceiros à plataforma é totalmente transparente ao beneficiário, sendo perceptivo apenas o aumento da rede médica disponível ao mesmo.

Seleção da Especialidade > Seleção de Unidade (local físico) > Seleção de Médico e Horário > Confirmação

Toda a integração se dá por API’s seguindo o padrão REST, retornando JSON como respostas, códigos HTTP e autenticação. Todos os passos descritos no documento abaixo são importantes para que a integração se dê por completa, sendo compostos pelas seguintes APIs:

Obter Unidades - Ok
Obter Profissionais - Ok
Obter Agendas Disponíveis
Criar Agendamento -
Cancelar Agendamento
Obter Detalhes de Especialidades (Verificar necessidade)
Descrição técnica: Essa API é responsável por retornar as unidades médicas (local físico de atendimento ao beneficiário) disponíveis para agendamentos de consultas.

Method GET

Path /api/v1/units