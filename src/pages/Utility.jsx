import React from 'react'

const CASOS_USO = [
  {
    categoria: "Fotografia e Cinematografia",
    icon: "📸",
    aplicacoes: [
      {
        titulo: "Fotografia Aérea",
        descricao: "Captura de imagens aéreas para eventos, paisagens e imóveis",
        exemplos: [
          "Fotografia de casamentos",
          "Marketing imobiliário",
          "Turismo e documentários",
          "Cobertura de eventos"
        ]
      },
      {
        titulo: "Cinematografia",
        descricao: "Filmagens aéreas para produções audiovisuais",
        exemplos: [
          "Produções cinematográficas",
          "Vídeos publicitários",
          "Documentários",
          "Transmissões ao vivo"
        ]
      }
    ]
  },
  {
    categoria: "Agricultura e Meio Ambiente",
    icon: "🌾",
    aplicacoes: [
      {
        titulo: "Agricultura de Precisão",
        descricao: "Monitoramento e análise de cultivos agrícolas",
        exemplos: [
          "Mapeamento de culturas",
          "Análise de saúde das plantas",
          "Pulverização de precisão",
          "Contagem de plantas"
        ]
      },
      {
        titulo: "Monitoramento Ambiental",
        descricao: "Acompanhamento de áreas naturais e impacto ambiental",
        exemplos: [
          "Monitoramento de desmatamento",
          "Inspeção de áreas de preservação",
          "Contagem de animais",
          "Análise de impacto ambiental"
        ]
      }
    ]
  },
  {
    categoria: "Engenharia e Construção",
    icon: "🏗️",
    aplicacoes: [
      {
        titulo: "Inspeção de Infraestrutura",
        descricao: "Vistoria de estruturas e construções",
        exemplos: [
          "Inspeção de torres e antenas",
          "Vistoria de telhados",
          "Análise de fachadas",
          "Manutenção preventiva"
        ]
      },
      {
        titulo: "Topografia e Mapeamento",
        descricao: "Levantamento topográfico e modelagem 3D",
        exemplos: [
          "Mapeamento de terrenos",
          "Cálculo de volumes",
          "Modelagem 3D de construções",
          "Acompanhamento de obras"
        ]
      }
    ]
  },
  {
    categoria: "Segurança e Resgate",
    icon: "🚨",
    aplicacoes: [
      {
        titulo: "Segurança e Vigilância",
        descricao: "Monitoramento de áreas e eventos",
        exemplos: [
          "Patrulhamento de perímetros",
          "Segurança de eventos",
          "Monitoramento de multidões",
          "Inspeção noturna"
        ]
      },
      {
        titulo: "Busca e Resgate",
        descricao: "Operações de busca e salvamento",
        exemplos: [
          "Busca de pessoas perdidas",
          "Resgate em áreas remotas",
          "Avaliação de desastres",
          "Entrega de suprimentos"
        ]
      }
    ]
  }
]

export default function Utility() {
  return (
    <div style={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1>Utilidades e Aplicações</h1>
      <p style={{
        fontSize: '1.1em',
        color: '#666',
        marginBottom: '30px'
      }}>
        Explore as diversas aplicações profissionais e comerciais dos drones em diferentes setores.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
        gap: '30px'
      }}>
        {CASOS_USO.map(caso => (
          <section
            key={caso.categoria}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '24px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            <h2 style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              margin: '0 0 20px 0',
              color: '#007bff'
            }}>
              <span style={{fontSize: '1.5em'}}>{caso.icon}</span>
              {caso.categoria}
            </h2>

            {caso.aplicacoes.map(app => (
              <div
                key={app.titulo}
                style={{
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  padding: '16px',
                  marginBottom: '16px'
                }}
              >
                <h3 style={{
                  margin: '0 0 8px 0',
                  color: '#495057'
                }}>
                  {app.titulo}
                </h3>
                <p style={{
                  margin: '0 0 12px 0',
                  color: '#666'
                }}>
                  {app.descricao}
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {app.exemplos.map((exemplo, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: 'white',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '0.9em',
                        border: '1px solid #dee2e6'
                      }}
                    >
                      {exemplo}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>

      <div style={{
        backgroundColor: '#e9ecef',
        padding: '20px',
        borderRadius: '8px',
        marginTop: '30px'
      }}>
        <h3 style={{margin: '0 0 10px 0'}}>💡 Dica Profissional:</h3>
        <p style={{margin: 0}}>
          Para cada aplicação, certifique-se de utilizar o drone adequado e obter as licenças necessárias.
          Considere também investir em treinamentos específicos para sua área de atuação.
        </p>
      </div>
    </div>
  )
}
