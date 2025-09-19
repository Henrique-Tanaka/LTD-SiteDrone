import React from 'react'
import { Link } from 'react-router-dom'

const DESTAQUES = [
  {
    icone: "🎯",
    titulo: "Guia Completo",
    descricao: "Aprenda desde o básico até técnicas avançadas de pilotagem",
    link: "/tutorial"
  },
  {
    icone: "🚁",
    titulo: "Catálogo de Drones",
    descricao: "Compare diferentes modelos e suas especificações técnicas",
    link: "/drones"
  },
  {
    icone: "💼",
    titulo: "Aplicações Profissionais",
    descricao: "Descubra as diversas utilidades dos drones no mercado",
    link: "/utility"
  },
  {
    icone: "📋",
    titulo: "Regulamentação",
    descricao: "Fique por dentro das normas e legislação",
    link: "/regulamentacao"
  }
]

export default function Home() {
  return (
    <div style={{
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      {/* Hero Section */}
      <section style={{
        textAlign: 'center',
        marginBottom: '60px'
      }}>
        <h1 style={{
          fontSize: '2.5em',
          marginBottom: '20px',
          color: '#2c3e50'
        }}>
          Portal Educativo de Drones
        </h1>
        <p style={{
          fontSize: '1.2em',
          color: '#666',
          maxWidth: '800px',
          margin: '0 auto 30px'
        }}>
          Seu guia completo sobre drones: desde a escolha do equipamento até
          aplicações profissionais, incluindo tutoriais, regulamentação e muito mais.
        </p>
        <div style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center'
        }}>
          <Link
            to="/tutorial"
            style={{
              backgroundColor: '#007bff',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '500'
            }}
          >
            Começar Agora
          </Link>
          <Link
            to="/drones"
            style={{
              backgroundColor: 'white',
              color: '#007bff',
              padding: '12px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '500',
              border: '2px solid #007bff'
            }}
          >
            Ver Drones
          </Link>
        </div>
      </section>

      {/* Destaques */}
      <section>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          margin: '0 auto'
        }}>
          {DESTAQUES.map(destaque => (
            <Link
              key={destaque.titulo}
              to={destaque.link}
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <div style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                ':hover': {
                  transform: 'translateY(-5px)'
                }
              }}>
                <span style={{
                  fontSize: '3em',
                  marginBottom: '16px'
                }}>
                  {destaque.icone}
                </span>
                <h3 style={{
                  margin: '0 0 12px 0',
                  color: '#2c3e50'
                }}>
                  {destaque.titulo}
                </h3>
                <p style={{
                  margin: 0,
                  color: '#666'
                }}>
                  {destaque.descricao}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        marginTop: '60px',
        textAlign: 'center',
        backgroundColor: '#e9ecef',
        padding: '40px',
        borderRadius: '12px'
      }}>
        <h2 style={{
          margin: '0 0 20px 0',
          color: '#2c3e50'
        }}>
          Pronto para começar?
        </h2>
        <p style={{
          margin: '0 0 30px 0',
          color: '#666'
        }}>
          Explore nosso conteúdo educativo e descubra o fascinante mundo dos drones.
        </p>
        <Link
          to="/tutorial"
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: '500'
          }}
        >
          Iniciar Aprendizado
        </Link>
      </section>
    </div>
  )
}
