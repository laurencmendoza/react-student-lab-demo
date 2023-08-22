export default function Score({score}) {
    return(
        <li>
            <span className="score-date">Date: {score.date} </span>
            <span className="score">Score: {score.score}</span>
        </li>
    )
}