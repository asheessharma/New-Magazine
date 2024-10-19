import { useEffect } from "react";
import { useState } from "react"
import NewItem from "./NewItem";



export default function NewsBoard({category}) {

    const [articles, setarticles] = useState([]);
    useEffect(() => {
        const getarticles = async() => {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
            const response = await fetch(url);
            const data = await response.json();
            setarticles(data.articles);
        };
        getarticles(); 
    },[category]);
        

    return (
        <div>
            <div className="text-center">Latest <span className="badge bg-danger">News</span></div>
            {articles.map((news,index)=>{
                return <NewItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} /> ;
            }) };
        </div>
    )
}
