import React from 'react'

interface CardProps {
    img: string;
    name: string;
    status: string;
    specie: string;
    genre: string;
}

const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'text-green-500';
      case 'dead':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

const Card: React.FC<CardProps> = ({img, name, status, specie, genre}) => {
  return (
    <div className='bg-FondoTarjeta flex flex-row w-108 h-40 rounded-2xl overflow-hidden gap-2 shadow-md shadow-gray-800'>
        {/* CONTENEDOR IMAGEN */}
        <div className='min-w-40 min-h-40 overflow-hidden relative'>   
            <img src={img} alt="" className='w-full h-full absolute'/>
        </div>

        <div className='flex flex-col text-slate-200'>
            <span className='text-2xl font-semibold'>{name}</span>

            <div className='flex flex-row gap-1 text-ColorTextoSecundario'>
                <span className={`text-xl font-bold ${getStatusColor(status)}`}>•</span>
                <span className='text-lg'>{status}</span>
                <span className='text-lg'>-</span>
                <span className='text-lg'>{specie}</span>
            </div>
            <span className='text-lg text-ColorTextoSecundario'>{genre}</span>
        </div>
    </div>
  )
}

export default Card
