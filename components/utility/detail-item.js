import classes from './detail-item.module.css';
export default function Details({title,content}){
    return <>
        <div className={classes.detailItem}>
              <strong>{title}</strong>
              <span>{content}</span>
            </div>
    </>
}