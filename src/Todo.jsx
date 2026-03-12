// export default function ToDO({task, isDone}){
//     return (
//         <li>Task: {task}</li>
//     )
// }


// Conditional Rendering: 1 --> If else
// export default function ToDo({ task, isDone }) {
//     if (isDone === true) {
//         return <li>Done: {task}</li>
//     }
//     else {
//         return <li>Pending: {task}</li>
//     }
// }

// Conditional Rendering:2 --> If
// export default function ToDO({task, isDone, time=0}){
//     if(isDone === true){
//         return <li>Done: {task} Duration: {time}</li>
//     }
//     return <li>To be done: {task}</li>
// }


// Conditional Rendering:3--> Ternary
// condition ? true : false
// export default function ToDo({task, isDone, time=0}){
//     return isDone ? <li>Done: {task} time: {time}</li> : <li>Not Done: {task}</li>
// }


// Conditional Rendering:4--> && [return only true]
// export default function ToDo({task, isDone, time}){
//     return isDone && <li>Done Task: {task} time: {time}</li>
// }


// Conditional Rendering:5 --> || [return only false]
// export default function ToDo({task, isDone, time=0}){
//     return isDone || <li>Not Done Tasks: {task} time: {time}</li>
// }


// Conditional Rendering:6 --> Use Variable
export default function ToDo({ task, isDone , time}) {
    // const displayTime = time ? time : 100 ;
    let listItem;
    if (isDone === true) {
        listItem =  <li>Done: {task} time: {time ? 'I am done': 'I am not done'}</li>;
    }
    else {
        listItem =  <li>Pending: {task}</li>;
    }
    return listItem;
}

// Practice

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