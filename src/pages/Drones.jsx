import React from 'react'

const CATEGORIAS = {
  CONSUMER: 'Consumidor',
  PROFESSIONAL: 'Profissional',
  INDUSTRIAL: 'Industrial',
  RACING: 'Corrida'
}

const DRONES = [
  {
    name: 'DJI Mini 3 Pro',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/DJI_Mini_3_Pro.jpg',
    categoria: CATEGORIAS.CONSUMER,
    desc: 'Drone leve e compacto ideal para iniciantes',
    specs: {
      peso: '< 249g',
      autonomia: '34 minutos',
      camera: '4K 60fps',
      alcance: '12km',
      recursos: ['Obstacle Avoidance', 'ActiveTrack 4.0', 'QuickShots']
    }
  },
  {
    name: 'DJI Mavic 3',
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/DJI_Mavic_3.jpg',
    categoria: CATEGORIAS.PROFESSIONAL,
    desc: 'Drone profissional com câmera Hasselblad',
    specs: {
      peso: '895g',
      autonomia: '46 minutos',
      camera: '5.1K 50fps',
      alcance: '15km',
      recursos: ['Dual Camera System', 'Omnidirectional Obstacle Sensing', 'Advanced RTH']
    }
  },
  {
    name: 'Autel EVO II Pro',
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Autel_EVO_II.jpg',
    categoria: CATEGORIAS.PROFESSIONAL,
    desc: 'Drone profissional com excelente qualidade de imagem',
    specs: {
      peso: '1150g',
      autonomia: '40 minutos',
      camera: '6K 30fps',
      alcance: '9km',
      recursos: ['Dynamic Track 2.0', '360° Obstacle Avoidance', 'Dual GPS']
    }
  },
  {
    name: 'DJI Matrice 300 RTK',
    img: 'https://img.gkbcdn.com/p/2020-05-08/dji-matrice-300-rtk-industrial-drone-1588901595322._w500_p1_.jpg',
    categoria: CATEGORIAS.INDUSTRIAL,
    desc: 'Drone industrial para inspeções e mapeamento',
    specs: {
      peso: '6.3kg',
      autonomia: '55 minutos',
      camera: 'Múltiplas payload options',
      alcance: '15km',
      recursos: ['IP45 Rating', 'Triple Redundancy', 'AI Spot-Check']
    }
  },
  {
    name: 'iFlight Nazgul5 V2',
    img: 'https://img.gkbcdn.com/p/2020-12-11/iFlight-Nazgul5-V2-4S-6S-FPV-Racing-Drone-BNF-425288-0._w500_p1_.jpg',
    categoria: CATEGORIAS.RACING,
    desc: 'Drone de corrida FPV de alta performance',
    specs: {
      peso: '380g',
      autonomia: '7 minutos',
      camera: 'FPV 1200TVL',
      alcance: '2km',
      recursos: ['Digital FPV System', '5-inch Props', 'F7 Flight Controller']
    }
  }
]

export default function Drones(){
  const [categoriaAtiva, setCategoriaAtiva] = React.useState(null)
  
  const dronesFiltrados = categoriaAtiva 
    ? DRONES.filter(d => d.categoria === categoriaAtiva)
    : DRONES

  return (
    <div style={{padding: '20px'}}>
      <h1>Catálogo de Drones</h1>
      
      <div style={{marginBottom: '20px'}}>
        <h3>Filtrar por categoria:</h3>
        <div style={{display: 'flex', gap: '10px'}}>
          {Object.values(CATEGORIAS).map(cat => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat === categoriaAtiva ? null : cat)}
              style={{
                padding: '8px 16px',
                background: cat === categoriaAtiva ? '#007bff' : '#f8f9fa',
                color: cat === categoriaAtiva ? 'white' : 'black',
                border: '1px solid #dee2e6',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        {dronesFiltrados.map(d => (
          <article key={d.name} style={{
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            padding: '16px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <span style={{
              display: 'inline-block',
              padding: '4px 8px',
              backgroundColor: '#e9ecef',
              borderRadius: '4px',
              fontSize: '0.9em',
              marginBottom: '8px'
            }}>
              {d.categoria}
            </span>
            
            <h3 style={{margin: '8px 0'}}>{d.name}</h3>
            
            <img 
              src={d.img} 
              alt={d.name} 
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '4px'
              }}
            />
            
            <p style={{margin: '12px 0'}}>{d.desc}</p>
            
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '12px',
              borderRadius: '4px',
              marginTop: '12px'
            }}>
              <h4 style={{margin: '0 0 8px 0'}}>Especificações Técnicas:</h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li><strong>Peso:</strong> {d.specs.peso}</li>
                <li><strong>Autonomia:</strong> {d.specs.autonomia}</li>
                <li><strong>Câmera:</strong> {d.specs.camera}</li>
                <li><strong>Alcance:</strong> {d.specs.alcance}</li>
                <li>
                  <strong>Recursos:</strong>
                  <ul style={{paddingLeft: '20px'}}>
                    {d.specs.recursos.map(r => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
