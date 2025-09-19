import React from 'react'

const REGULAMENTACOES = {
  registro: {
    titulo: "Registro de Drones",
    conteudo: [
      "Registro obrigatório na ANAC para drones acima de 250g",
      "Cadastro no SISANT (Sistema de Aeronaves Não Tripuladas)",
      "Identificação visível na aeronave",
      "Renovação periódica do registro"
    ]
  },
  licencas: {
    titulo: "Licenças e Certificações",
    conteudo: [
      "ANAC - Licença de piloto remoto",
      "DECEA - Autorização de acesso ao espaço aéreo",
      "ANATEL - Homologação do equipamento",
      "Seguros obrigatórios quando aplicável"
    ]
  },
  restricoes: {
    titulo: "Restrições de Voo",
    conteudo: [
      "Altura máxima de 120 metros",
      "Distância mínima de aeródromos",
      "Proibição de voo sobre áreas povoadas",
      "Restrições em áreas sensíveis"
    ]
  },
  documentacao: {
    titulo: "Documentação Necessária",
    conteudo: [
      "Manual de voo do drone",
      "Documentos de registro e licenças",
      "Seguro (quando aplicável)",
      "Autorizações específicas para operações especiais"
    ]
  }
}

export default function Regulamentacao() {
  return (
    <div style={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1>Regulamentação e Legislação</h1>
      
      <div style={{
        backgroundColor: '#fff3cd',
        border: '1px solid #ffeeba',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '30px'
      }}>
        <h3 style={{
          color: '#856404',
          margin: '0 0 10px 0'
        }}>
          ⚠️ Atenção
        </h3>
        <p style={{margin: 0}}>
          As informações aqui apresentadas são um guia geral. Consulte sempre a legislação atual
          e os órgãos reguladores para informações específicas e atualizadas.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '20px'
      }}>
        {Object.entries(REGULAMENTACOES).map(([key, secao]) => (
          <div
            key={key}
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{
              margin: '0 0 16px 0',
              color: '#007bff'
            }}>
              {secao.titulo}
            </h2>
            <ul style={{
              paddingLeft: '20px',
              margin: 0
            }}>
              {secao.conteudo.map((item, i) => (
                <li
                  key={i}
                  style={{
                    marginBottom: '12px'
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        padding: '20px',
        marginTop: '30px'
      }}>
        <h3 style={{margin: '0 0 16px 0'}}>Links Úteis:</h3>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          <li>
            <a
              href="https://www.anac.gov.br/drones"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#007bff',
                textDecoration: 'none',
                display: 'block',
                padding: '8px 0'
              }}
            >
              🔗 ANAC - Regulamentação RPAS
            </a>
          </li>
          <li>
            <a
              href="https://www.decea.mil.br/drone"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#007bff',
                textDecoration: 'none',
                display: 'block',
                padding: '8px 0'
              }}
            >
              🔗 DECEA - Acesso ao Espaço Aéreo
            </a>
          </li>
          <li>
            <a
              href="https://www.anatel.gov.br"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#007bff',
                textDecoration: 'none',
                display: 'block',
                padding: '8px 0'
              }}
            >
              🔗 ANATEL - Homologação de Equipamentos
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}