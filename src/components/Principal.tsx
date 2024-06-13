import React, { useEffect, useState } from 'react'
import Card from './ui/Card'
import Pagination from './ui/Pagination';

interface pageURL {
    pageNum:number,
}

const Principal: React.FC<pageURL> = ({pageNum}) => {

    const [data, setData] = useState<DataApi[]>([])
    const [page, setPage] = useState<number>(1)
    
    interface DataApi {
        id: number;
        name: string;
        status: string;
        species: string;
        gender: string;
        image: string;
    }
        

    useEffect(() => {
      const CallApi = async () => {
        const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const res = await data.json()
        setData(res.results)
      }

      CallApi();
    }, [page])


    const NextPage = () => {
        setPage(page + 1);
    }

    const BackPage = () => {
        setPage(page - 1);
    }
    
    

  return (
    <div className='bg-FondoPrincipal h-fit w-full pb-5 flex flex-col items-center'>
        <div className='min-h-screen w-full flex flex-wrap gap-x-10 justify-center pt-5'>
            {data.map((data) => {
                return <Card key={data.id} img={data.image} name={data.name} status={data.status} specie={data.species} genre={data.gender}/>
            })}
        </div>

        <div className='w-108 flex gap-1 justify-center'>
            <Pagination link='#' pageNumber='<' handleClick={BackPage}/>
            <Pagination link='#' pageNumber='1' handleClick={() => setPage(1)}/>
            <Pagination link='#' pageNumber='>' handleClick={NextPage}/>
        </div>
    </div>
  )
}

export default Principal
