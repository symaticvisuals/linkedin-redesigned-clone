import { Divider } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import "./News.css";
function News() {
	const [news, setNews] = React.useState([]);
	useEffect(() => {
		getNews();
	}, []);
	const getNews = () => {
		axios
			.get(
				"https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=aec47d78c4714b5fb7e66eceea902024&pageSize=10"
			)
			.then((res) => {
				setNews(res.data.articles);
				console.log(res.data.articles);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className='news'>
			<h4 style={{ marginBottom: "10px" }}>Latest News</h4>
			<div className='news__cards'>
				{news.map((news, id) => (
					<div className='news__card'>
						<a href={news.url} target='_blank' rel='noreferrer'>
							<p>{news.title}</p>
						</a>

						<Divider style={{ marginTop: "10px" }} />
					</div>
				))}
			</div>
		</div>
	);
}

export default News;
