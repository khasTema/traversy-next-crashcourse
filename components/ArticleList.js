import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

const Article = ({acrticles}) => {
  return (
    <div className={articleStyles.grid}>
      {acrticles.map(article => (
        <ArticleItem 
          key={article.id}
          article={article}
        />
        ))}
    </div>
  )
}

export default Article
