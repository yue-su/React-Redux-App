import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Card from './Card'
import { fetchData } from "../store"

const CardList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    const amiiboList = useSelector(state => state.amiiboList)
    const isLoading = useSelector(state => state.isLoading)

    return (
        <div>
            {
                amiiboList.map(amiibo => {
                    return (
                        <Card key={amiibo.tail} amiibo={amiibo}/>
                    )
                })
            }
        </div>
    )
}

export default CardList
