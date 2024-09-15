import classes from './posts-grid.module.css';
import Card from './card';
export default function PostGrid(){
    return <>
        <div className={classes.container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card/>
        <Card/>
        <Card/>
      </div>
    </>
}