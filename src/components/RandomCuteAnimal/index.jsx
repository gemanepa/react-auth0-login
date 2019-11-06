import React from 'react';
import useSWR from 'swr';
import Loader from '../Loader';
import { fetcher } from '../../utils/swr';
import errorIcon from '../../media/error.png';
import './index.css'

export default function RandomCuteAnimal(props) {
    const { homepage, type, url } = props.cuteAnimal;

    const { data, error } = useSWR(url, fetcher)
    if (error) return <img alt={`Error loading ${type} pic`} src={errorIcon} />
    if (!data) return <Loader />

    return (
        <section className="cuteanimal">
            <h3>You are {type === 'dog' ? 'not logged' : 'logged'}, so here you have a random {type} pic from <a href={homepage}>{homepage}</a></h3>
            <img alt="" src={type === 'dog' ? data.message : data[0].url}/>
            <h3>Cute {type}, right?</h3>
        </section>
    )
}
