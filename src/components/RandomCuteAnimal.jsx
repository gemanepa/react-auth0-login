import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../utils/swr';

export default function RandomCuteAnimal(props) {
    const { type, url } = props.cuteAnimal;
    const { data, error } = useSWR(url, fetcher)
    console.log(data)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <>
            <h3 style={{textAlign: 'center'}}>You are {type === 'dog' ? 'not logged' : 'logged'}, so here you have a random {type} pic</h3>
            <img alt="" style={{maxWidth: '40%', height: 'auto'}} src={type === 'dog' ? data.message : data[0].url}/>
            <h4 style={{textAlign: 'center'}}>Isn't it a cute {type}?</h4>
        </>
    )
}
