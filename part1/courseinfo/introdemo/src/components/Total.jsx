const Total = (props) => {
    return (
        <p>
        Number of exercises{" "}
        {props.exercises.reduce((accumulator, currentValue) => accumulator + currentValue)}
        </p>
    );
};

export default Total;