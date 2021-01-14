import App from '../pages/app'

import { connectToDatabase } from "../util/mongodb";

export default function IndexPage({dataT}) {
  
   return (<>
   <div className="py-20">
        <h1 className="md:text-5xl text-3xl text-center text-gray-700 dark:text-gray-100">
          Nossa lista de compras 
        </h1>
    </div>
    <div className="px-4 md:px-24 xl:px-96">
      <App dataT={dataT}/>
    </div>    
  </>)
}

export async function getServerSideProps() {

  const { db } = await connectToDatabase();  

  const response = await db
    .collection("actvits")
    .find({})
    .sort({ metacritic: -1 })
    .toArray();

  return {
    props: {
      dataT: JSON.parse(JSON.stringify(response)),
    },
  };
}


