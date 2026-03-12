// export default function ToDO({task, isDone}){
//     return (
//         <li>Task: {task}</li>
//     )
// }

// export default function ToDo({ task, isDone }) {
//     if (isDone === true) {
//         return <li>Done: {task}</li>
//     }
//     else {
//         return <li>Pending: {task}</li>
//     }
// }

export default function ToDO({task, isDone, time=0}){
    if(isDone === true){
        return <li>Done: {task} Duration: {time}</li>
    }
    return <li>To be done: {task}</li>
}

export function Food({item, isHungry}){
    if(isHungry){
        return <li>Eat now: {item}</li>
    }
    else{
        return <li>Don't Eat: {item}</li>
    }
}

export function TakeRest({work, isDone}){
    if(isDone){
        return <li>Take Rest: {work} Completed</li>
    }
    return <li>Do the {work}</li>
}