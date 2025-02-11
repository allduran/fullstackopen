const Total = ({ course }) => {
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  
    return <strong>Number of exercises {total}</strong>;
  };

export default Total;