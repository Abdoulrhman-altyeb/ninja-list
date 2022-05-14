import { useEffect } from "react";

export const getStaticPaths = async() => {
    const res= await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map((ninja) => {
        return {
            params:{ id: ninja.id.toString() }
        }

    })

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const ninja = await res.json();

    return {
        props:{ninja}
    }

} 



const Details = ({ninja}) => {


    // useEffect(() => {
    //     const fetchData = async() => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
    //         const data = await res.json();

    //         console.log(data);
    //     }

    //     fetchData();
    // })

  return (
    <div>
        <h1>{ninja.name}</h1>
        <p>{ninja.email}</p>
        <p>{ninja.website}</p>
        <p>{ninja.address.city}</p>
    </div>
  )
}

export default Details