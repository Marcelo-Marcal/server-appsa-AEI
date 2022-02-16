import { Router } from "express";
import  knex from "../database/db";

const router = Router();

//router.use('/')

router.get('/units', async (req, res) => {
    const result = await knex.raw(`
    SELECT DISTINCT (agenda_central.cd_unidade_atendimento),
    unidade_atendimento.ds_unidade_atendimento,
    multi_empresas.nr_cep,
    multi_empresas.nm_bairro,
    cidade.nm_cidade,
    multi_empresas.ds_endereco,
    multi_empresas.cd_uf,
    multi_empresas.nr_telefone_empresa,
    'PHYSICAL' Tipo  
    FROM dbamv.agenda_central
    LEFT JOIN dbamv.multi_empresas ON multi_empresas.cd_multi_empresa= agenda_central.cd_multi_empresa
    LEFT JOIN dbamv.unidade_atendimento ON unidade_atendimento.cd_unidade_atendimento= agenda_central.cd_unidade_atendimento
    LEFT JOIN dbamv.cidade ON cidade.cd_cidade= multi_empresas.cd_cidade`)

    const date = {
    data: [
     {
        id: result[0].CD_UNIDADE_ATENDIMENTO,
        name: result[0].DS_UNIDADE_ATENDIMENTO,
        shortName: 'aa',
        address: {
            postalCode: result[0].NR_CEP,
            neighborhood: result[0].NM_BAIRRO,
            city: result[0].NM_CIDADE,
            state: result[0].CD_UF,
            street: result[0].DS_ENDERECO
        },
        phone:result[0].NR_TELEFONE_EMPRESA,
        descriptionOperation:'2ª a sábado das 6:55 às 19h',
        latitude:'-23.19943700',
        longitude:'-46.20031300',
        type:result[0].TIPO
       }
      ]
    }; 

    res.json(date)

})

export { router };
