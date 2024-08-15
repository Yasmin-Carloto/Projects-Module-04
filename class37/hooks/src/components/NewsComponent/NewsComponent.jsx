import { useEffect, useState } from 'react'
import './NewsComponent.css'

const NewsComponent = () => {
    const [news, setNews] = useState({
        title: null,
        body: null
    })
    const [intervalCount, setIntervalCount] = useState(0)

    function getRandomItemFromArray(array){
        const choosenNumber = Math.floor(Math.random() * array.length)
        return array[choosenNumber]
    }

    useEffect(() => {
        const fetchNews = async () => {
            const responseNews = await fetch("https://jsonplaceholder.typicode.com/posts")
            const newsData = await responseNews.json()
            const choosenNews = getRandomItemFromArray(newsData)            
            setNews({
                title: choosenNews.title,
                body: choosenNews.body
            })            
        }

        fetchNews()

        const timeForNews = setInterval(() => {
            fetchNews()
        }, 30000)

        const countInterval = setInterval(() => {
            setIntervalCount(prevInterval => prevInterval + 1)
        }, 1000)

        return () => { 
            clearInterval(timeForNews)
            clearInterval(countInterval)
            setNews({ title: null, body: null })
        }
    }, [])

    return (
        <div className='news-container'>
            {news.title && news.body ? 
            (
                <div>
                    <h1 className='news-title'>{news.title}</h1>
                    <p className='news-body'>{news.body}</p>
                    <p className='timer-count'>Contagem atual: {intervalCount}</p>
                </div>
            ) : (
                <div>
                    <h1 className='news-title'>Não há novas notícias...</h1>
                    <p className='news-body'>{news.body}</p>
                </div>
            )}

        </div>
    )
}

export default NewsComponent