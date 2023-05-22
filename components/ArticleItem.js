import articleStyles from '../styles/Article.module.css' 
import Link from 'next/link'

const ArticleIte = ({article}) => {
  return (
    <Link legacyBehavior href='article/[id]' as={`article/${article.id}`} >
      <a className={articleStyles.card}>
        <h3>{article.title} &arr;</h3>
        <p>{article.body}</p>
      </a>
    </Link>
  )
}

export default ArticleIte
