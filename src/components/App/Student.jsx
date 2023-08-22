import studentStyle from "./Student.css"
import Score from "./Score"

export default function Student({student}) {
    const score = student.scores.map(s=> <Score score={s}/>)
    return (
        <li className="student-data">
            <span class="student-name">{student.name}</span> 
            <span class="student-bio">{student.bio}</span> 
            <h3>Scores: </h3>
            <ul className="student-scores">
                {score}
            </ul>
        </li>
    )
}