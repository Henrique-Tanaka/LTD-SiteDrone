import React from 'react'

const SECOES_TUTORIAL = [
  {
    titulo: "Preparação Inicial",
    topicos: [
      {
        titulo: "Conhecendo seu Drone",
        conteudo: [
          "Estude o manual do usuário detalhadamente",
          "Identifique todos os componentes e controles",
          "Verifique se todas as peças estão bem fixadas",
          "Familiarize-se com o controle remoto"
        ]
      },
      {
        titulo: "Checklist Pré-Voo",
        conteudo: [
          "Verificar nível de bateria do drone e controle",
          "Calibrar bússola e sensores",
          "Verificar condições climáticas",
          "Atualizar firmware se necessário"
        ]
      }
    ]
  },
  {
    titulo: "Segurança",
    topicos: [
      {
        titulo: "Regras Básicas",
        conteudo: [
          "Mantenha distância segura de pessoas e propriedades",
          "Não voe acima de 120 metros de altura",
          "Mantenha o drone sempre em linha de visão",
          "Evite áreas restritas (aeroportos, áreas militares)"
        ]
      },
      {
        titulo: "Condições Climáticas",
        conteudo: [
          "Evite voar com ventos fortes (acima de 20km/h)",
          "Não voe durante chuva ou neblina",
          "Evite temperaturas extremas",
          "Verifique a previsão do tempo antes do voo"
        ]
      }
    ]
  },
  {
    titulo: "Primeiros Voos",
    topicos: [
      {
        titulo: "Práticas Iniciais",
        conteudo: [
          "Comece em áreas abertas e sem obstáculos",
          "Pratique decolagem e pouso controlados",
          "Aprenda a manter posição estável no ar",
          "Faça movimentos simples em baixa velocidade"
        ]
      },
      {
        titulo: "Habilidades Avançadas",
        conteudo: [
          "Pratique voos em diferentes modos (Normal, Sport)",
          "Aprenda a usar recursos automáticos com segurança",
          "Treine manobras de retorno automático",
          "Pratique fotografia e filmagem básica"
        ]
      }
    ]
  }
]

export default function Tutorial() {
  const [secaoAtiva, setSecaoAtiva] = React.useState(0)

  return (
    <div style={{
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1>Tutorial e Guia de Segurança</h1>

      <div style={{
        display: 'flex',
        gap: '20px',
        marginTop: '20px'
      }}>
        {/* Menu lateral */}
        <nav style={{
          width: '250px',
          backgroundColor: '#f8f9fa',
          padding: '15px',
          borderRadius: '8px',
          height: 'fit-content'
        }}>
          {SECOES_TUTORIAL.map((secao, index) => (
            <button
              key={secao.titulo}
              onClick={() => setSecaoAtiva(index)}
              style={{
                display: 'block',
                width: '100%',
                padding: '10px',
                marginBottom: '8px',
                backgroundColor: secaoAtiva === index ? '#007bff' : 'transparent',
                color: secaoAtiva === index ? 'white' : 'black',
                border: '1px solid #dee2e6',
                borderRadius: '4px',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              {secao.titulo}
            </button>
          ))}
        </nav>

        {/* Conteúdo principal */}
        <div style={{flex: 1}}>
          <h2 style={{
            marginTop: 0,
            color: '#007bff'
          }}>
            {SECOES_TUTORIAL[secaoAtiva].titulo}
          </h2>

          {SECOES_TUTORIAL[secaoAtiva].topicos.map(topico => (
            <div
              key={topico.titulo}
              style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                marginBottom: '20px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <h3 style={{
                marginTop: 0,
                color: '#495057'
              }}>
                {topico.titulo}
              </h3>
              <ul style={{
                paddingLeft: '20px',
                marginBottom: 0
              }}>
                {topico.conteudo.map((item, i) => (
                  <li key={i} style={{marginBottom: '8px'}}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        backgroundColor: '#ffe9e9',
        padding: '15px',
        borderRadius: '8px',
        marginTop: '20px'
      }}>
        <h3 style={{color: '#dc3545', marginTop: 0}}>⚠️ Avisos Importantes:</h3>
        <ul>
          <li>Sempre siga as regulamentações locais para voo de drones</li>
          <li>Mantenha seu drone registrado e documentação em dia</li>
          <li>Nunca voe sob efeito de álcool ou substâncias que afetem seus reflexos</li>
          <li>Em caso de emergência, mantenha a calma e ative o retorno automático</li>
        </ul>
      </div>
    </div>
  )
}
