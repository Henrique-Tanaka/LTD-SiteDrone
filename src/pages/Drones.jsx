import React from 'react'
const DRONES = [
  {name:'DJI Mavic 3', img:'https://upload.wikimedia.org/wikipedia/commons/3/3e/DJI_Mavic_3.jpg', desc:'Drone quadricóptero profissional popular.'},
  {name:'DJI Mini 3 Pro', img:'https://upload.wikimedia.org/wikipedia/commons/8/8b/DJI_Mini_3_Pro.jpg', desc:'Drone leve com menos de 250g.'},
  {name:'Autel EVO II', img:'https://upload.wikimedia.org/wikipedia/commons/4/49/Autel_EVO_II.jpg', desc:'Drone para imagens de longo alcance.'}
]

export default function Drones(){
  return (
    <div>
      <h1>Drones</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12}}>
        {DRONES.map(d=> (
          <article key={d.name} style={{border:'1px solid #eee', padding:12}}>
            <h3>{d.name}</h3>
            <img src={d.img} alt={d.name} style={{width:'100%',height:140,objectFit:'cover'}}/>
            <p>{d.desc}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
