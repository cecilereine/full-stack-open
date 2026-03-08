const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total total={getExercisesTotal(course.parts)} />
    </div>
  )
}

const Header = (props) => {
  console.log('header: ', props)
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Part = (props) => {
  // name, exercises
  console.log('part: ', props)
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log('content: ', props)
  return (
    <div>
      <Part part = {props.parts[0]} />
      <Part part = {props.parts[1]} />
      <Part part = {props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const getExercisesTotal = (parts) => {
  let total = 0;
  for(let i = 0; i < parts.length; i++) {
    total += parts[i].exercises;
  }
  return total;
}

export default App