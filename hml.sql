INSERT INTO public.fonte_pagadora
(id, id_tipo_fonte_pagadora, id_endereco, id_cobranca_associado, numero_cnpj, razao_social, denominacao, id_status, registro_ans, versao_tiss, observacao, data_hora_inclusao, usuario_inclusao, data_hora_alteracao, usuario_alteracao)
VALUES(nextval('fonte_pagadora_id_seq'::regclass), 0, 0, 0, '', '', '', 0, '', '', '', '', '', '', '');INSERT INTO FontesPagadoras (ID, Tipo, CNPJ, RazaoSocial, Status)
VALUES (17, 'Pesquisa Clinica', '86.179.196/0001-49', 'CLINICA MÉDICA SÃO GERMANO S/S LTDA', 'ATIVO');
VALUES (18, 'Pesquisa Clinica', '67.626.628/0001-78', 'CPCLIN - CENTRO DE PESQUISAS CLÍNICAS', 'INATIVO');
VALUES (19, 'Pesquisa Clinica', '16.110.933/0001-71', 'NOVARTIS BIOCIENCIAS SA', 'SUSPENSO');
VALUES (19, 'Particular', '64.336.047/0001-03', 'INSTITUTO DE EDUCAÇÃO, PESQUISA E GESTÃO EM SAÚDE', 'INATIVO');
VALUES (19, 'Particular', '94.047.824/0001-60', 'FUNDAÇÃO ANTONIO PRUDENTE', 'SUSPENSO');
VALUES (19, 'Parceria', '16.110.942/0001-74', '	INTEGRA MEDICAL CONSULTORIA S.A', 'ATIVO');
VALUES (19, 'Parceria', '12.116.891/0001-25', 'Azimute Med Consultoria e Assessoria Ltda', 'SUSPENSO');