import Link from 'next/link'
import {useEffect} from 'react';
import { useRouter } from 'next/router';


const NotFound = () => {
    
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            // router.go(-1)
            router.push('/')
        },5000)

    },[,router])
    
  return (
    <div className="not-found">
        <h1>Oooops.....</h1>
        <h2>That page cannot be found.</h2>
        <p>go back to the 
            <Link href='/'>
                <a>
                    Homepage
                </a>
            </Link>
        </p>
    </div>
  )
}

export default NotFound