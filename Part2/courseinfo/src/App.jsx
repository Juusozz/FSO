const App = () => {

  const Course = (props) => {
    const {courses} = props
    const multiple = ({courses}) => {
        
    }
    return (
      <div>
        {props.course.parts.map(i => 
          <p key = {i.id}>
            {i.name}
            {" "}
            {i.exercises}
          </p>
        )}
      </div>
    )
  }

  const Sum = (props) => {
    const total = props.course.parts.reduce(
      (sum, num) => sum + num.exercises, 0
    )
    console.log(total)
    return (
      <p style={{ fontWeight: 'bold' }}>
        Total of {total} exercises
      </p>
    )
  }

    const Header = ({ course }) => <h1>{course.name}</h1>

    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]

  return (
    <div>
      <Header course = {courses} />
      <Course course = {courses} />
      <Sum course = {courses} />
  </div>
  )
}

export default App
