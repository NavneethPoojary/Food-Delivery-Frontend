import './Skeleton.css'

export default function Skeleton({ type }) {
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
}
