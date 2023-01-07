import React, { useState } from "react";
import Article from "./Article";
import AddArticle from "./AddArticle";
const Articles = () => {
	const [articles, setArticles] = useState([
		{ id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
		{ id: 2, title: "post 2", body: "Quisque cursus, metus vitae pharetra" },
	]);
	const saveArticle = (art) => {
		setArticles([...articles,art]);
	};
	return (
		<div>
			<AddArticle saveArticle={saveArticle} />
			{console.log(articles)}
			{articles.map((article) => (
				<Article key={article.id} article={article} />
			))}
		</div>
	);
};
export default Articles;
